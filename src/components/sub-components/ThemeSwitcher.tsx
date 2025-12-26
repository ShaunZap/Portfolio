import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        cursor: 'pointer',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-brand-700)',
        transition: 'color 0.3s ease',
        border: '1px solid var(--color-brand-1200)',
      }}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Moon size={24} strokeWidth={1} />
      ) : (
        <Sun size={24} strokeWidth={1} />
      )}
    </button>
  );
};

export default ThemeSwitcher;