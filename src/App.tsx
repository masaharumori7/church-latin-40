import React, { useState } from 'react';
import { Header } from './components/Header';
import { CourseOverview } from './components/CourseOverview';
import { Lesson } from './components/Lesson';
import { ThemeProvider } from './components/ThemeProvider';
import { loadProgress } from './utils/storage';

type View = 'overview' | 'lesson';

function App() {
  const [currentView, setCurrentView] = useState<View>('overview');
  const [currentLessonId, setCurrentLessonId] = useState(1);

  const handleLessonSelect = (lessonId: number) => {
    setCurrentLessonId(lessonId);
    setCurrentView('lesson');
  };

  const handleBackToOverview = () => {
    setCurrentView('overview');
  };

  const handleNextLesson = () => {
    const progress = loadProgress();
    const nextLesson = Math.min(40, currentLessonId + 1);
    
    if (nextLesson <= progress.currentLesson) {
      setCurrentLessonId(nextLesson);
    } else {
      setCurrentView('overview');
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonId > 1) {
      setCurrentLessonId(currentLessonId - 1);
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header onHomeClick={handleBackToOverview} />
        
        <main>
          {currentView === 'overview' ? (
            <CourseOverview onLessonSelect={handleLessonSelect} />
          ) : (
            <Lesson
              lessonId={currentLessonId}
              onBack={handleBackToOverview}
              onNext={handleNextLesson}
              onPrevious={handlePreviousLesson}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                "Oremus pro invicem" - Let us pray for one another
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Created with devotion for the greater glory of God and the enrichment of Catholic faithful.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;