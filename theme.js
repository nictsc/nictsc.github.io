/**
 * theme.js
 * Handles light/dark mode toggle.
 * - Reads saved preference from localStorage on load
 * - Falls back to system preference (prefers-color-scheme)
 * - Saves choice to localStorage on toggle
 */

const html = document.documentElement;
const btn  = document.getElementById('themeToggle');

// Apply theme on load
const saved      = localStorage.getItem('nc-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial    = saved || (prefersDark ? 'dark' : 'light');

html.setAttribute('data-theme', initial);
btn.textContent = initial === 'dark' ? '☀️' : '🌙';

// Toggle on click
btn.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', next);
  btn.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('nc-theme', next);
});
