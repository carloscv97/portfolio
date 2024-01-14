import { useSignal } from '@preact/signals';
import { useEffect } from 'preact/hooks';

export default function useDarkMode() {
  const theme = useSignal(localStorage.getItem('theme') ?? 'light');

  const handleClick = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  useEffect(() => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme.value);
  }, [theme.value]);

  return {
    theme,
    handleClick,
  };
}
