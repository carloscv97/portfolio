import useDarkMode from '../hooks/useDarkMode';
import { MoonIcon, SunIcon } from '../icons';

export default function ThemeToggle() {
  const { handleClick, theme } = useDarkMode();

  return (
    <button onClick={handleClick} aria-label="theme-toggle">
      {theme.value === 'dark' ? (
        <SunIcon className="size-8" />
      ) : (
        <MoonIcon className="size-8" />
      )}
    </button>
  );
}
