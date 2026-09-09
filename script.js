(() => {
  const storageKey = 'sbspots-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let manualTheme = null;
  let toggle = null;

  try {
    const savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      manualTheme = savedTheme;
    }
  } catch {
    // Storage may be unavailable for local files or restricted browsers.
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeColor.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
    if (toggle) {
      toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  // Set the theme before the stylesheet and body load to avoid a light flash.
  applyTheme(manualTheme || (systemTheme.matches ? 'dark' : 'light'));

  systemTheme.addEventListener('change', (event) => {
    if (manualTheme === null) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.querySelector('.theme-toggle');
    applyTheme(root.dataset.theme);

    toggle.addEventListener('click', () => {
      manualTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(manualTheme);
      try {
        window.localStorage.setItem(storageKey, manualTheme);
      } catch {
        // Keep the choice for this visit even if it cannot be persisted.
      }
    });
    toggle.disabled = false;
  });
})();
