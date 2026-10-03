(() => {
  const photos = window.portfolioData.photos;
  const grid = document.querySelector('#photo-grid');
  const dialog = document.querySelector('#lightbox');
  const image = dialog.querySelector('.lightbox__image');
  const title = dialog.querySelector('.lightbox__title');
  const position = dialog.querySelector('.lightbox__position');
  const closeButton = dialog.querySelector('.lightbox__close');
  let activeIndex = 0;
  let previousFocus;
  document.querySelectorAll('[data-profile="name"], [data-gallery-name]').forEach((element) => {
    element.textContent = window.portfolioData.profile.name;
  });
  document.querySelector('#photo-count').textContent = `${photos.length} photographs`;
  const update = () => {
    const photo = photos[activeIndex]; image.src = photo.src; image.alt = photo.alt;
    title.textContent = photo.title; position.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
  };
  const open = (index, trigger) => {
    activeIndex = index; previousFocus = trigger; update();
    dialog.classList.add('lightbox--open'); dialog.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open'); closeButton.focus();
  };
  const close = () => {
    dialog.classList.remove('lightbox--open'); dialog.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open'); image.removeAttribute('src'); previousFocus?.focus();
  };
  const move = (step) => { activeIndex = (activeIndex + step + photos.length) % photos.length; update(); };
  photos.forEach((photo, index) => {
    const button = document.createElement('button'); button.className = 'photo-card'; button.type = 'button'; button.setAttribute('aria-label', `Open photograph: ${photo.title}`);
    const thumb = document.createElement('img'); thumb.src = photo.src; thumb.alt = photo.alt; thumb.loading = 'lazy';
    const caption = document.createElement('span'); caption.className = 'photo-card__caption';
    const text = document.createElement('span'); text.textContent = photo.caption;
    const number = document.createElement('span'); number.className = 'photo-card__number'; number.textContent = String(index + 1).padStart(2, '0');
    caption.append(text, number); button.append(thumb, caption); button.addEventListener('click', () => open(index, button)); grid.append(button);
  });
  closeButton.addEventListener('click', close);
  dialog.querySelector('.lightbox__nav--previous').addEventListener('click', () => move(-1));
  dialog.querySelector('.lightbox__nav--next').addEventListener('click', () => move(1));
  dialog.addEventListener('click', (event) => { if (event.target === dialog) close(); });
  document.addEventListener('keydown', (event) => {
    if (!dialog.classList.contains('lightbox--open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'Tab') {
      const controls = [...dialog.querySelectorAll('button')];
      if (event.shiftKey && document.activeElement === controls[0]) { event.preventDefault(); controls.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === controls.at(-1)) { event.preventDefault(); controls[0].focus(); }
    }
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); current.unobserve(entry.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.gallery-heading, .photo-card').forEach((item) => observer.observe(item));
  } else document.querySelectorAll('.gallery-heading, .photo-card').forEach((item) => item.classList.add('is-visible'));
})();