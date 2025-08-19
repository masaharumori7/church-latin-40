import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '../data/courseData';
import { saveQuizScore, completeLesson } from '../utils/storage';

interface QuizProps {
  questions: QuizQuestion[];
  lessonId: number;
  onComplete: () => void;
}

export function Quiz({ questions, lessonId, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [matchingState, setMatchingState] = useState<{
    pairs: { [key: string]: string };
    selectedLatin: string | null;
    selectedEnglish: string | null;
    randomizedOptions: string[];
  }>({
    pairs: {},
    selectedLatin: null,
    selectedEnglish: null,
    randomizedOptions: [],
  });

  useEffect(() => {
    if (questions[currentQuestion]?.type === 'matching') {
      // Randomize English options for matching
      const options = [...questions[currentQuestion].options!];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      setMatchingState((prev) => ({ ...prev, randomizedOptions: options }));
    }
  }, [currentQuestion, questions]);

  const handleMatchingSelect = (type: 'latin' | 'english', value: string) => {
    if (type === 'latin') {
      setMatchingState((prev) => ({
        ...prev,
        selectedLatin: prev.selectedLatin === value ? null : value,
        selectedEnglish: prev.selectedLatin === value ? prev.selectedEnglish : null,
      }));
    } else {
      if (matchingState.selectedLatin) {
        setMatchingState((prev) => ({
          ...prev,
          pairs: {
            ...prev.pairs,
            ...(prev.selectedLatin !== null ? { [prev.selectedLatin]: value } : {}),
          },
          selectedLatin: null,
          selectedEnglish: null,
        }));
      } else {
        setMatchingState((prev) => ({
          ...prev,
          selectedEnglish: prev.selectedEnglish === value ? null : value,
        }));
      }
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...userAnswers, answer];
    setUserAnswers(newAnswers);
    setUserAnswer('');
    setMatchingState({ pairs: {}, selectedLatin: null, selectedEnglish: null, randomizedOptions: [] });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = calculateScore(newAnswers);
      saveQuizScore(lessonId, score);
      if (score >= 70) {
        completeLesson(lessonId);
      }
      setShowResults(true);
    }
  };

  const handleMatchingAnswer = () => {
    const question = questions[currentQuestion];
    if ('options' in question && question.type === 'matching' && Array.isArray(question.correctAnswer)) {
      const matchingPairs = Object.entries(matchingState.pairs)
        .map(([latin, english]) => `${latin} - ${english}`)
        .join(', ');
      handleAnswer(matchingPairs);
    }
  };

  const calculateScore = (answers: string[]) => {
    let correct = 0;
    answers.forEach((answer, index) => {
      const question = questions[index];
      if (Array.isArray(question.correctAnswer)) {
        // Type guard to check if it's a matching question with options
        if ('options' in question && question.type === 'matching') {
          // For matching questions, check if all pairs are correct
          const userPairs = answer.split(', ');
          const correctPairs = question.correctAnswer as string[];
          let matchingScore = 0;
          
          userPairs.forEach(userPair => {
            if (correctPairs.some(correctPair => 
              userPair.toLowerCase().trim() === correctPair.toLowerCase().trim()
            )) {
              matchingScore++;
            }
          });
          
          // Award full credit if 80% or more pairs are correct
          if (matchingScore >= Math.ceil(correctPairs.length * 0.8)) {
            correct++;
          }
        } else {
          // For other array-type questions (multiple correct answers)
          if ((question.correctAnswer as string[]).some(correctAns => 
            answer.toLowerCase().trim() === correctAns.toLowerCase().trim()
          )) {
            correct++;
          }
        }
      } else {
        if (answer.toLowerCase().trim() === (question.correctAnswer as string).toLowerCase().trim()) {
          correct++;
        }
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setUserAnswer('');
    setMatchingState({ pairs: {}, selectedLatin: null, selectedEnglish: null, randomizedOptions: [] });
  };

  if (showResults) {
    const score = calculateScore(userAnswers);
    const passed = score >= 70;

    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="text-center mb-6">
          <div className={`mx-auto mb-4 ${passed ? 'text-green-600' : 'text-red-600'}`}>
            {passed ? (
              <CheckCircle className="h-16 w-16 mx-auto" />
            ) : (
              <XCircle className="h-16 w-16 mx-auto" />
            )}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Quiz {passed ? 'Completed!' : 'Incomplete'}
          </h3>

          <div className="text-3xl font-bold mb-2">
            <span className={passed ? 'text-green-600' : 'text-red-600'}>{score}%</span>
          </div>

          <p className="text-gray-600 dark:text-gray-300">
            {passed
              ? 'Excellent work! You may proceed to the next lesson.'
              : 'Keep studying! You need 70% or higher to complete this lesson.'}
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {questions.map((question, index) => {
            const userAns = userAnswers[index];
            let isCorrect = false;

            if (Array.isArray(question.correctAnswer)) {
              if (question.type === 'matching') {
                const userPairs = userAns ? userAns.split(', ') : [];
                const correctPairs = question.correctAnswer;
                let matchingScore = 0;

                userPairs.forEach((userPair) => {
                  if (
                    correctPairs.some(
                      (correctPair) =>
                        userPair.toLowerCase().trim() === correctPair.toLowerCase().trim()
                    )
                  ) {
                    matchingScore++;
                  }
                });

                isCorrect = matchingScore >= Math.ceil(correctPairs.length * 0.8);
              } else {
                isCorrect = question.correctAnswer.some(
                  (correct) => userAns.toLowerCase().trim() === correct.toLowerCase().trim()
                );
              }
            } else {
              isCorrect = userAns.toLowerCase().trim() === question.correctAnswer.toLowerCase().trim();
            }

            return (
              <div key={question.id} className="border dark:border-gray-600 rounded-lg p-4">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  {index + 1}. {question.question}
                </p>

                <div className="flex items-center space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className="text-sm">
                    Your answer: <strong>{userAns}</strong>
                  </span>
                </div>

                {!isCorrect && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Correct answer:{' '}
                    <strong>
                      {Array.isArray(question.correctAnswer)
                        ? question.correctAnswer.join(' or ')
                        : question.correctAnswer}
                    </strong>
                  </p>
                )}

                {question.explanation && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                    {question.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={resetQuiz}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Retry Quiz</span>
          </button>

          {passed && (
            <button
              onClick={onComplete}
              className="flex items-center space-x-2 bg-red-900 hover:bg-red-800 text-white px-6 py-2 rounded-lg transition-colors"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Daily Quiz</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
          <div
            className="bg-red-900 dark:bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{question.question}</h4>

        {question.type === 'multiple-choice' && question.options && (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {question.type === 'matching' && question.options && Array.isArray(question.correctAnswer) && question.options.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Match each Latin word to its English meaning by clicking tiles to pair them:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
                  Latin Words
                </h5>
                {question.correctAnswer.map((pair, index) => {
                  const [latin] = pair.split(' - ');
                  const isSelected = matchingState.selectedLatin === latin;
                  const isPaired = !!matchingState.pairs[latin];
                  return (
                    <button
                      key={index}
                      onClick={() => handleMatchingSelect('latin', latin)}
                      disabled={isPaired}
                      className={`w-full p-4 rounded-lg text-left transition-colors ${
                        isPaired
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800 cursor-not-allowed'
                          : isSelected
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-white border-2 border-blue-500'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                      aria-label={`Select Latin word ${latin}`}
                    >
                      {latin}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-3">
                <h5 className="font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
                  English Meanings
                </h5>
                {matchingState.randomizedOptions.map((option, index) => {
                  const isSelected = matchingState.selectedEnglish === option;
                  const isPaired = Object.values(matchingState.pairs).includes(option);
                  return (
                    <button
                      key={index}
                      onClick={() => handleMatchingSelect('english', option)}
                      disabled={isPaired}
                      className={`w-full p-4 rounded-lg text-left transition-colors ${
                        isPaired
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800 cursor-not-allowed'
                          : isSelected
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-white border-2 border-blue-500'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                      aria-label={`Select English meaning ${option}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleMatchingAnswer}
              disabled={Object.keys(matchingState.pairs).length < question.correctAnswer.length}
              className="bg-red-900 hover:bg-red-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors"
            >
              Submit Matches
            </button>
          </div>
        )}

        {(question.type === 'translation' || question.type === 'recitation') && (
          <div className="space-y-4">
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder={question.type === 'recitation' ? 'Recite the prayer or text here...' : 'Enter your translation here...'}
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-900 dark:focus:ring-red-600 focus:border-transparent dark:bg-gray-700 dark:text-white"
              rows={3}
            />
            <button
              onClick={() => handleAnswer(userAnswer)}
              disabled={!userAnswer.trim()}
              className="bg-red-900 hover:bg-red-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-colors"
            >
              Submit Answer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}