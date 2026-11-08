/* Probador de fuentes (solo desarrollo). Se activa con ?fuentes en la URL. Quitar antes de publicar. */
(function () {
  // TEMPORAL: se muestra siempre mientras se prueban fuentes
  var SERIF = ['Noto Serif', 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', 'Lora', 'Source Serif 4', 'DM Serif Display', 'Fraunces', 'Newsreader', 'EB Garamond', 'Bitter', 'Merriweather'];
  var SANS = ['Manrope', 'Inter', 'DM Sans', 'Plus Jakarta Sans', 'Outfit', 'Sora', 'Work Sans', 'IBM Plex Sans', 'Figtree', 'Montserrat', 'Poppins', 'Nunito Sans'];
  var loaded = {};
  function load(name) {
    if (loaded[name] || name === 'Noto Serif' || name === 'Manrope') return;
    loaded[name] = 1;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css?family=' + encodeURIComponent(name).replace(/%20/g, '+') + ':400,500,700,800,400i&display=swap';
    document.head.appendChild(l);
  }
  function apply(v, name, fallback) {
    load(name);
    document.documentElement.style.setProperty(v, "'" + name + "'," + fallback);
  }
  var box = document.createElement('div');
  box.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:9999;background:#fff;color:#111;border:1px solid #bbb;border-radius:10px;padding:12px 14px;font:13px Arial,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.35);width:250px';
  function row(label, list, v, fb) {
    var w = document.createElement('label');
    w.style.cssText = 'display:block;margin-bottom:8px;font-weight:700';
    w.textContent = label;
    var s = document.createElement('select');
    s.style.cssText = 'display:block;width:100%;margin-top:4px;padding:5px;font:13px Arial';
    list.forEach(function (n) { var o = document.createElement('option'); o.textContent = n; s.appendChild(o); });
    s.addEventListener('change', function () { apply(v, s.value, fb); });
    w.appendChild(s);
    box.appendChild(w);
    return s;
  }
  var t = document.createElement('div');
  t.textContent = 'Probar fuentes';
  t.style.cssText = 'font-weight:800;margin-bottom:8px';
  box.appendChild(t);
  row('Titulares (serif)', SERIF, '--serif', "Georgia,'Times New Roman',serif");
  row('Interfaz y texto (sans)', SANS, '--sans', 'Arial,sans-serif');
  document.body.appendChild(box);
})();
