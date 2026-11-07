const menu = document.querySelector('.mobile-nav');
if (menu) {
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.open = false; }));
}

const path = document.querySelector('[data-path]');
if (path) {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        path.classList.add('in');
        io.disconnect();
      }
    }, { threshold: 0.35 });
    io.observe(path);
  } else {
    path.classList.add('in');
  }
}
