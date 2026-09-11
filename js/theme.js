// ===== Theme system =====
const themeManager = {
  themes: [
    { id: 'dark',  icon: '🌙', labelKey: 'theme.dark' },
    { id: 'ice-spikes', icon: '❄️', labelKey: 'theme.ice_spikes' },
    { id: 'ocean', icon: '🌊', labelKey: 'theme.ocean' },
    { id: 'redstone', icon: '🟥', labelKey: 'theme.redstone' },
    { id: 'lush-cave', icon: '🍃', labelKey: 'theme.lush_cave' },
    { id: 'deep-dark', icon: '🌑', labelKey: 'theme.deep_dark' },
    { id: 'nether', icon: '🔥', labelKey: 'theme.nether' },
    { id: 'end',   icon: '🔮', labelKey: 'theme.end' }
  ],

  current: localStorage.getItem('theme') || 'dark',

  init() {
    this.apply(this.current);
    this.buildDropdown();
    this.updateBtn();

    const btn = document.getElementById('themeBtn');
    const dropdown = document.getElementById('themeDropdown');
    if (btn && dropdown) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('visible');
      });
      document.addEventListener('click', () => {
        dropdown.classList.remove('visible');
      });
      dropdown.addEventListener('click', (e) => e.stopPropagation());
    }
  },

  apply(themeId) {
    document.documentElement.setAttribute('data-theme', themeId);
    this.current = themeId;
    localStorage.setItem('theme', themeId);
  },

  buildDropdown() {
    const dropdown = document.getElementById('themeDropdown');
    if (!dropdown) return;

    dropdown.innerHTML = '';
    this.themes.forEach(t => {
      const btn = document.createElement('button');
      btn.setAttribute('data-theme-id', t.id);
      const label = (typeof i18n !== 'undefined') ? i18n.get(t.labelKey) : t.id;
      btn.innerHTML = t.icon + ' <span data-i18n="' + t.labelKey + '">' + label + '</span>';
      if (t.id === this.current) btn.classList.add('active');
      btn.addEventListener('click', () => {
        this.apply(t.id);
        this.updateBtn();
        dropdown.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        dropdown.classList.remove('visible');
      });
      dropdown.appendChild(btn);
    });
  },

  updateBtn() {
    const btn = document.getElementById('themeBtn');
    if (!btn) return;
    const theme = this.themes.find(t => t.id === this.current);
    if (theme) {
      btn.textContent = theme.icon;
      const label = (typeof i18n !== 'undefined') ? i18n.get(theme.labelKey) : theme.id;
      btn.title = label;
    }
  }
};

// Apply theme ASAP to avoid flash
(function() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', () => {
  themeManager.init();
});
