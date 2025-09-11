// version.js — shows only the version from document.lastModified
(function () {
  const d = new Date(document.lastModified);
  if (isNaN(d)) return;

  const pad = n => String(n).padStart(2, '0');
  const ver = `v${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;

  let el = document.getElementById('page-version');
  if (!el) {
    const footer = document.querySelector('footer');
    if (footer) {
      el = document.createElement('span');
      el.id = 'page-version';
      el.className = 'version-badge';
      footer.appendChild(document.createTextNode(' — '));
      footer.appendChild(el);
    }
  }
  if (el) el.textContent = ver;
})();
