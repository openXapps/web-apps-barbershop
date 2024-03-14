/**
 * On page load or when changing themes, best to add inline in `head` to avoid FOUC
 * @param {string} theme Theme options: dark, light, system
 * @returns Nothing
 */
export function setTheme(theme) {
  const docEl = document.documentElement.classList;

  if (theme === 'dark') {
    docEl.add('dark');
    return;
  }
  
  if (theme === 'light') {
    docEl.remove('dark');
    return;
  }

  if (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    docEl.add('dark');
  }
  return;
}
  
// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')