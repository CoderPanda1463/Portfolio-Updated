(() => {
  const root = document.documentElement;
  const toggles = document.querySelectorAll('.theme-toggle');
  const updateLabels = () => toggles.forEach((button) => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', `Switch to ${next} theme`);
    button.title = `Switch to ${next} theme`;
  });
  updateLabels();
  toggles.forEach((button) => button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('fuad-portfolio-theme', root.dataset.theme);
    updateLabels();
  }));
  const menuToggle = document.querySelector('.site-nav__menu-toggle');
  const menu = document.querySelector('.site-nav__menu');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      menu.classList.toggle('site-nav__menu--open', open);
    });
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
        menu.classList.remove('site-nav__menu--open');
      }
    });
  }
})();