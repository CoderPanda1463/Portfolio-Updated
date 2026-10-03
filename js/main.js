(() => {
  const data = window.portfolioData;
  document.querySelectorAll('[data-profile="name"]').forEach((el) => { el.textContent = data.profile.name; });
  document.querySelectorAll('[data-profile="hometown"]').forEach((el) => { el.textContent = data.profile.hometown; });
  document.querySelector('[data-profile="bio"]').textContent = data.profile.bio;
  document.querySelector('[data-profile="tagline"]').textContent = data.profile.tagline;
  const cvLink = document.querySelector('[data-cv-download]');
  cvLink.href = data.cv.src;
  cvLink.download = data.cv.downloadName;
  cvLink.textContent = data.cv.label;
  const leadership = document.querySelector('#leadership-list');
  data.leadership.forEach((role, index) => {
    const item = document.createElement('div'); item.className = 'leadership__content';
    const number = document.createElement('span'); number.className = 'leadership__index'; number.setAttribute('aria-hidden', 'true'); number.textContent = String(index + 1).padStart(2, '0');
    const title = document.createElement('p'); title.textContent = role;
    item.append(number, title); leadership.append(item);
  });
  const education = document.querySelector('#education-list');
  data.education.forEach((entry, index) => {
    const article = document.createElement('article'); article.className = 'education-item';
    const number = document.createElement('span'); number.className = 'education-item__number'; number.textContent = String(index + 1).padStart(2, '0');
    const title = document.createElement('h3'); title.textContent = entry.title;
    const detail = document.createElement('p'); detail.textContent = entry.detail;
    article.append(number, title, detail); education.append(article);
  });
  const interests = document.querySelector('#interest-list');
  data.interests.forEach((entry, index) => {
    const item = document.createElement('div'); item.className = 'interest-item';
    const number = document.createElement('span'); number.className = 'interest-item__number'; number.textContent = `0${index + 1}`;
    const title = document.createElement('h3'); title.textContent = entry; item.append(number, title); interests.append(item);
  });
  const featured = document.querySelector('#featured-photos');
  data.photos.slice(0, 3).forEach((photo, index) => {
    const link = document.createElement('a'); link.className = `featured-photo featured-photo--${index + 1}`; link.href = 'photography.html';
    const image = document.createElement('img'); image.src = photo.src; image.alt = photo.alt; image.loading = 'lazy';
    const caption = document.createElement('span'); caption.textContent = photo.caption; link.append(image, caption); featured.append(link);
  });
  const reveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); current.unobserve(entry.target); }
    }), { threshold: 0.14 });
    reveal.forEach((item) => observer.observe(item));
  } else reveal.forEach((item) => item.classList.add('is-visible'));
})();