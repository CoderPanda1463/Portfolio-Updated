(() => {
  const { profile, links } = window.portfolioData;
  const details = document.querySelector('#contact-details');
  const socials = document.querySelector('#social-links');
  const contactLink = (label, href, value) => {
    const link = document.createElement('a');
    link.className = 'contact-item'; link.href = href;
    const name = document.createElement('span'); name.className = 'contact-item__label'; name.textContent = label;
    const text = document.createElement('span'); text.className = 'contact-item__value'; text.textContent = value;
    link.append(name, text); return link;
  };
  details.append(contactLink('Email', `mailto:${profile.email}`, profile.email), contactLink('Phone', `tel:${profile.phone}`, profile.phone), contactLink('WhatsApp', profile.whatsappLink, profile.whatsapp));
  Object.entries(links).forEach(([label, href]) => {
    const link = document.createElement('a'); link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = label; socials.append(link);
  });
})();