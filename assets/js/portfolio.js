(() => {
  'use strict';
  const translatedElements = [...document.querySelectorAll('[data-zh]')].map(element => ({
    element, english: element.innerHTML, chinese: element.dataset.zh,
  }));
  const languageToggle = document.getElementById('language-toggle');
  const titleEnglish = document.body.dataset.titleEn;
  const titleChinese = document.body.dataset.titleZh;
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
    document.title = language === 'en' ? titleEnglish : titleChinese;
    document.querySelector('.navigation').setAttribute('aria-label', language === 'en' ? 'Main navigation' : '主要導覽');
    document.querySelector('.footer-navigation').setAttribute('aria-label', language === 'en' ? 'Footer navigation' : '頁尾導覽');
    document.querySelectorAll('a[download]').forEach(link => {
      const label = language === 'en' ? 'Download CV' : '下載履歷';
      link.setAttribute('aria-label', label);
      link.setAttribute('title', label);
    });
    try { localStorage.setItem('ping-yu-language', language); } catch { /* Optional preference. */ }
  }
  languageToggle.addEventListener('click', () => setLanguage(language === 'en' ? 'zh-Hant' : 'en'));
  document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
  try { if (localStorage.getItem('ping-yu-language') === 'zh-Hant') setLanguage('zh-Hant'); } catch { /* English also works without browser storage. */ }
})();
