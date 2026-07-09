/* Shared site behaviour — nav, icons, reveal, mobile menu */
(function () {
  function initIcons() { if (window.lucide) window.lucide.createIcons(); }

  function initNav() {
    var nav = document.querySelector('.nav');
    if (nav) {
      var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 8); };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    var burger = document.querySelector('.nav__burger');
    var links = document.querySelector('.nav__links');
    if (burger && links) {
      burger.addEventListener('click', function () {
        var open = links.classList.toggle('is-open-mobile');
        links.style.display = open ? 'flex' : '';
      });
    }
  }

  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (e) { e.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  function boot() { initIcons(); initNav(); initReveal(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  window.__eeInitIcons = initIcons;
})();
