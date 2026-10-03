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
  const projects = document.querySelector('#projects-list');
  const createProjectIcon = (kind) => {
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', kind === 'github'
      ? 'M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.43 7.87 10.96.58.11.79-.25.79-.56v-2.06c-3.2.7-3.87-1.35-3.87-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.34.96.1-.74.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.69.41.35.78 1.03.78 2.08v3.09c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z'
      : 'M14 3h7v7M21 3l-10 10M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6');
    if (kind === 'external') {
      icon.setAttribute('fill', 'none');
      icon.setAttribute('stroke', 'currentColor');
      icon.setAttribute('stroke-width', '1.8');
      icon.setAttribute('stroke-linecap', 'round');
      icon.setAttribute('stroke-linejoin', 'round');
    } else icon.setAttribute('fill', 'currentColor');
    icon.append(path);
    return icon;
  };
  data.projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = `project-card reveal${project.featured ? ' project-card--featured' : ''}`;
    const art = document.createElement('div'); art.className = 'project-card__art';
    if (project.image) {
      const image = document.createElement('img'); image.src = project.image; image.alt = project.imageAlt || `${project.title} project preview`; image.loading = 'lazy';
      art.append(image);
    } else {
      art.setAttribute('aria-hidden', 'true');
      const initials = project.title.split(/\s+/).slice(0, 2).map((word) => word.slice(0, 1)).join('').toUpperCase();
      const monogram = document.createElement('span'); monogram.className = 'project-card__monogram'; monogram.textContent = initials;
      art.append(monogram);
    }
    const content = document.createElement('div'); content.className = 'project-card__content';
    const flags = document.createElement('div'); flags.className = 'project-card__flags';
    if (project.featured) {
      const featuredFlag = document.createElement('span'); featuredFlag.className = 'project-card__flag project-card__flag--featured'; featuredFlag.textContent = 'Featured';
      flags.append(featuredFlag);
    }
    if (project.needsReview) {
      const reviewFlag = document.createElement('span'); reviewFlag.className = 'project-card__flag'; reviewFlag.textContent = 'Needs review';
      flags.append(reviewFlag);
    }
    const title = document.createElement('h3'); title.className = 'project-card__title'; title.textContent = project.title;
    const description = document.createElement('p'); description.className = 'project-card__description'; description.textContent = project.description;
    const tags = document.createElement('ul'); tags.className = 'project-card__tags';
    project.tags.slice(0, 5).forEach((tag) => {
      const item = document.createElement('li'); item.textContent = tag; tags.append(item);
    });
    const actions = document.createElement('div'); actions.className = 'project-card__actions';
    const repoLink = document.createElement('a'); repoLink.className = 'project-card__link'; repoLink.href = project.repoUrl; repoLink.target = '_blank'; repoLink.rel = 'noopener noreferrer';
    repoLink.append(createProjectIcon('github'), document.createTextNode('GitHub'));
    actions.append(repoLink);
    if (project.demoUrl) {
      const demoLink = document.createElement('a'); demoLink.className = 'project-card__link project-card__link--demo'; demoLink.href = project.demoUrl; demoLink.target = '_blank'; demoLink.rel = 'noopener noreferrer';
      demoLink.append(createProjectIcon('external'), document.createTextNode('Live Demo'));
      actions.append(demoLink);
    }
    content.append(flags, title, description, tags, actions);
    card.append(art, content);
    projects.append(card);
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