// ===== i18n — Language system =====
const i18n = {
  currentLang: ['en', 'gb', 'it', 'fr', 'es', 'de', 'ja', 'ko', 'pt-br'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en',
  languageFiles: {
    en: 'en_us',
    gb: 'en_gb',
    it: 'it_it',
    fr: 'fr_fr',
    es: 'es_es',
    de: 'de_de',
    ja: 'ja_jp',
    ko: 'ko_kr',
    'pt-br': 'pt_br'
  },
  languages: [
    { id: 'en', flag: 'flag-us-svgrepo-com.svg', label: 'English (US)', shortLabel: 'EN', htmlLang: 'en-US' },
    { id: 'gb', flag: 'flag-gb-svgrepo-com.svg', label: 'English (UK)', shortLabel: 'EN', htmlLang: 'en-GB', fallback: 'en' },
    { id: 'it', flag: 'flag-it-svgrepo-com.svg', label: 'Italiano', shortLabel: 'IT', htmlLang: 'it-IT' },
    { id: 'fr', flag: 'flag-fr-svgrepo-com.svg', label: 'Français (France)', shortLabel: 'FR', htmlLang: 'fr-FR' },
    { id: 'es', flag: 'flag-es-svgrepo-com.svg', label: 'Español', shortLabel: 'ES', htmlLang: 'es-ES', fallback: 'en' },
    { id: 'de', flag: 'flag-de-svgrepo-com.svg', label: 'Deutsch', shortLabel: 'DE', htmlLang: 'de-DE', fallback: 'en' },
    { id: 'ja', flag: 'flag-jp-svgrepo-com.svg', label: '日本語', shortLabel: 'JA', htmlLang: 'ja-JP', fallback: 'en' },
    { id: 'ko', flag: 'flag-kr-svgrepo-com.svg', label: '한국어', shortLabel: 'KO', htmlLang: 'ko-KR', fallback: 'en' },
    { id: 'pt-br', flag: 'flag-br-svgrepo-com.svg', label: 'Português (Brasil)', shortLabel: 'PT-BR', htmlLang: 'pt-BR', fallback: 'en' }
  ],
  translations: null,

  ready: null,
  loadedTranslations: {},

  get contentLang() {
    return this.currentLang === 'fr' ? 'fr' : 'en';
  },

  init() {
    if (this.ready) return this.ready;

    this.ready = this.loadTranslations(this.currentLang)
      .then(translations => {
        this.loadedTranslations[this.currentLang] = translations;
        this.translations = translations;
        this.refresh();
      })
      .catch(error => {
        console.error('Unable to load ' + this.currentLang + ' translations.', error);
        this.translations = {};
        this.refresh();
      });

    return this.ready;
  },

  async loadTranslations(lang) {
    const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0', 10);
    const file = this.languageFiles[lang];
    if (!file) {
      throw new Error('Unsupported language: ' + lang);
    }
    const path = '../'.repeat(depth) + 'lang/' + file + '.json';
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status + ' for ' + path);
    }

    const localeTranslations = await response.json();
    if (!localeTranslations || typeof localeTranslations !== 'object' || Array.isArray(localeTranslations)) {
      throw new Error('Invalid translation data in ' + path);
    }

    const language = this.languages.find(item => item.id === lang);
    if (!language || !language.fallback) return localeTranslations;

    const fallback = await this.loadTranslations(language.fallback);
    return { ...fallback, ...localeTranslations };
  },

  createFlag(language) {
    const depth = parseInt(document.querySelector('meta[name="page-depth"]')?.content || '0', 10);
    const image = document.createElement('img');
    image.className = 'lang-flag';
    image.src = '../'.repeat(depth) + 'pages/images/ui/flags/' + language.flag;
    image.alt = '';
    image.setAttribute('aria-hidden', 'true');
    return image;
  },

  refresh() {
    this.applyAll();
    this.buildDropdown();
    this.updateToggleBtn();
    const language = this.languages.find(item => item.id === this.currentLang);
    if (language) document.documentElement.lang = language.htmlLang;
    if (typeof themeManager !== 'undefined') {
      themeManager.buildDropdown();
      themeManager.updateBtn();
    }
    document.dispatchEvent(new Event('langChanged'));
  },

  get(key) {
    if (this.translations && Object.prototype.hasOwnProperty.call(this.translations, key)) {
      return this.translations[key];
    }
    return key;
  },

  applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.get(key);
      if (val !== key) {
        el.innerHTML = val;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.get(key);
      if (val !== key) {
        el.setAttribute('placeholder', val);
      }
    });

    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-label');
      const val = this.get(key);
      if (val !== key) {
        el.setAttribute('aria-label', val);
      }
    });
  },

  async setLanguage(lang) {
    await this.ready;
    const btn = document.getElementById('langToggle');
    if (btn) btn.disabled = true;

    try {
      const translations = this.loadedTranslations[lang] || await this.loadTranslations(lang);
      this.loadedTranslations[lang] = translations;
      this.currentLang = lang;
      localStorage.setItem('lang', lang);
      this.translations = translations;
      this.refresh();
    } catch (error) {
      console.error('Unable to load ' + lang + ' translations.', error);
    } finally {
      if (btn) btn.disabled = false;
    }
  },

  buildDropdown() {
    const dropdown = document.getElementById('langDropdown');
    if (!dropdown) return;

    dropdown.innerHTML = '';
    this.languages.forEach(language => {
      const option = document.createElement('button');
      option.type = 'button';
      option.setAttribute('data-language-id', language.id);
      option.setAttribute('lang', language.htmlLang);
      const label = document.createElement('span');
      label.textContent = language.label;
      option.append(this.createFlag(language), label);
      if (language.id === this.currentLang) option.classList.add('active');
      option.addEventListener('click', () => {
        this.setLanguage(language.id);
        dropdown.classList.remove('visible');
        const trigger = document.getElementById('langToggle');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
      dropdown.appendChild(option);
    });
  },

  updateToggleBtn() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    const language = this.languages.find(item => item.id === this.currentLang);
    if (!language) return;
    btn.replaceChildren();
    const label = document.createElement('span');
    label.textContent = language.shortLabel + ' ▾';
    btn.append(this.createFlag(language), label);
    btn.title = language.label;
    btn.setAttribute('aria-label', language.label);
  }
};

i18n.buildDropdown();
i18n.updateToggleBtn();
i18n.init();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('langToggle');
  const dropdown = document.getElementById('langDropdown');
  const selector = document.querySelector('.lang-selector');
  if (!btn || !dropdown || !selector) return;

  btn.addEventListener('click', event => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('visible');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
  dropdown.addEventListener('click', event => event.stopPropagation());
  document.addEventListener('click', event => {
    if (!selector.contains(event.target)) {
      dropdown.classList.remove('visible');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});
