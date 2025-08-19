export interface UserProgress {
  completedLessons: number[];
  quizScores: { [lessonId: number]: number };
  currentLesson: number;
  theme: 'light' | 'dark';
}

const STORAGE_KEY = 'ecclesiastical-latin-progress';

export function loadProgress(): UserProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load progress:', error);
  }
  
  return {
    completedLessons: [],
    quizScores: {},
    currentLesson: 1,
    theme: 'light'
  };
}

export function saveProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
}

export function completeLesson(lessonId: number): void {
  const progress = loadProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    progress.currentLesson = Math.min(40, lessonId + 1);
    saveProgress(progress);
  }
}

export function saveQuizScore(lessonId: number, score: number): void {
  const progress = loadProgress();
  progress.quizScores[lessonId] = score;
  saveProgress(progress);
}

export function toggleTheme(): 'light' | 'dark' {
  const progress = loadProgress();
  progress.theme = progress.theme === 'light' ? 'dark' : 'light';
  saveProgress(progress);
  return progress.theme;
}