import React from 'react';
import { useTheme } from '../ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {isDark ? '🌙' : '☀️'}
        </div>
      </div>
    </button>
  );
}

export default ThemeToggle;
