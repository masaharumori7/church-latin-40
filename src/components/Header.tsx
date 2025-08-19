import React from 'react';
import { Cross, Sun, Moon, Book, Github } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface HeaderProps {
  onHomeClick: () => void;
}

export function Header({ onHomeClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg border-b-2 border-red-900 dark:border-red-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onHomeClick}
          >
            <Cross className="h-8 w-8 text-red-900 dark:text-red-800" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ecclesiastical Latin
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                40 Days to Sacred Language
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <Book className="h-4 w-4" />
              <span>Ad Majorem Dei Gloriam</span>
            </div>
            
            <a
              href="https://github.com/masaharumori7/church-latin-40"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </a>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}