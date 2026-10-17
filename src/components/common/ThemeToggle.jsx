import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full border transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-hq-yellow/50 ${
        isDark
          ? 'bg-[#15161A] text-hq-yellow border-white/15 hover:border-hq-yellow hover:bg-hq-yellow hover:text-hq-black'
          : 'bg-white text-hq-black border-hq-black/15 hover:border-hq-black hover:bg-hq-yellow hover:text-hq-black shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-hq-yellow group-hover:text-hq-black transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-hq-black group-hover:text-hq-black transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="font-mono text-xs uppercase tracking-wider font-semibold">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
}
