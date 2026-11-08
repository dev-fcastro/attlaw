(function () {
  var root = document.documentElement;

  /* Menú móvil accesible */
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu-principal');
  if (toggle && menu) {
    var setMenu = function (open, returnFocus) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
      if (!open && returnFocus) toggle.focus();
    };
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    window.matchMedia('(min-width: 981px)').addEventListener('change', function () { setMenu(false); });
  }

  /* Navbar: logo oculto arriba, visible al bajar y se oculta de nuevo al volver arriba */
  var header = document.querySelector('.site-header');
  var navLogo = document.querySelector('.brand img');
  var heroLogo = document.querySelector('.hero-logo');
  var heroSec = document.querySelector('.hero');
  // Animación ligada al scroll: al bajar el logo se encoge y se coloca en el navbar; al subir, lo contrario.
  var nav0 = null, start = null, dist = 1;
  var measure = function () {
    navLogo.style.transform = 'none';
    nav0 = navLogo.getBoundingClientRect();
    var b = heroLogo.getBoundingClientRect();
    start = { left: b.left + window.scrollX, top: b.top + window.scrollY, width: b.width };
    dist = Math.max(120, start.top - nav0.top); // scroll necesario para llegar al navbar
  };
  var update = function () {
    var p = Math.min(1, Math.max(0, window.scrollY / dist));
    var k = 1 - p;
    var dx = (start.left - window.scrollX - nav0.left) * k;
    var dy = (start.top - nav0.top) * k;
    var s = 1 + (start.width / nav0.width - 1) * k;
    navLogo.style.transform = p >= 1 ? 'none' : 'translate(' + dx + 'px,' + dy + 'px) scale(' + s + ')';
    header.classList.toggle('is-scrolled', p >= 1);
  };
  if (header && navLogo && heroLogo) {
    var init = function () { measure(); update(); };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', init);
    window.addEventListener('load', init);
    init();
  }

  /* Entrada del hero */
  var hero = document.querySelector('.hero');
  if (hero) requestAnimationFrame(function () { requestAnimationFrame(function () { hero.classList.add('is-in'); }); });

  /* Revelado al hacer scroll (el contenido es visible si no hay JS) */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* Formulario de contacto: sin backend, abre el cliente de correo */
  var form = document.getElementById('form-contacto');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      // TODO: sustituir por un envío real (backend o servicio de formularios) y por el correo definitivo.
      var body = 'Nombre: ' + (d.get('nombre') || '') + '\n' +
        'Despacho: ' + (d.get('despacho') || '') + '\n' +
        'Correo: ' + (d.get('email') || '') + '\n\n' +
        (d.get('mensaje') || '');
      window.location.href = 'mailto:contacto@attlaw.example?subject=' +
        encodeURIComponent('Solicitud de demo ATTLAW') + '&body=' + encodeURIComponent(body);
    });
  }
})();
