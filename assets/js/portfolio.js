(() => {
  'use strict';

  const translatedElements = [...document.querySelectorAll('[data-zh]')].map(element => ({
    element,
    english: element.innerHTML,
    chinese: element.dataset.zh,
  }));
  const languageToggle = document.getElementById('language-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  let language = 'en';

  function setLanguage(nextLanguage) {
    language = nextLanguage === 'zh-Hant' ? 'zh-Hant' : 'en';
    document.documentElement.lang = language;
    translatedElements.forEach(({element, english, chinese}) => {
      if (language === 'en') element.innerHTML = english;
      else element.textContent = chinese;
    });
    languageToggle.textContent = language === 'en' ? '繁中' : 'EN';
    languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Traditional Chinese' : 'Switch to English');
    document.title = language === 'en'
      ? 'Ping-Yu Yang · Software Engineer & AI Research'
      : 'Ping-Yu Yang · 軟體工程與 AI 研究';
    document.querySelector('meta[name="description"]').content = language === 'en'
      ? "Ping-Yu Yang's portfolio: software engineering at TSMC, Microsoft, and Logitech, research in semantic communication and deep learning, and selected projects."
      : 'Ping-Yu Yang 的個人網站：TSMC、Microsoft、Logitech 軟體工程經驗，語意通訊與深度學習研究，以及精選專案。';
    navigation.setAttribute('aria-label', language === 'en' ? 'Main navigation' : '主要導覽');
    updateMenuLabel();
    try { localStorage.setItem('ping-yu-language', language); } catch { /* Preferences are optional. */ }
  }

  function updateMenuLabel() {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-label', language === 'en'
      ? (open ? 'Close menu' : 'Open menu')
      : (open ? '關閉選單' : '開啟選單'));
  }

  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    updateMenuLabel();
  }

  languageToggle.addEventListener('click', () => setLanguage(language === 'en' ? 'zh-Hant' : 'en'));
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });
  const desktopViewport = window.matchMedia('(min-width: 761px)');
  desktopViewport.addEventListener('change', event => { if (event.matches) setMenu(false); });

  const navLinks = [...navigation.querySelectorAll('a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  }

  document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
  try { if (localStorage.getItem('ping-yu-language') === 'zh-Hant') setLanguage('zh-Hant'); } catch { /* Use English when storage is unavailable. */ }
})();
