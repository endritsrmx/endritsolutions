/* Gemeinsam für alle Seiten: Sprache, Smooth Scroll, Header, Menü, Projekt-Karten */
window.SITE = (() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const I = window.I18N;

  /* ---------- Sprache ---------- */
  $$('.lang button').forEach(b => b.addEventListener('click', () => I.set(b.dataset.lang)));

  /* ---------- Smooth Scroll ---------- */
  let lenis = null;
  if (!reduced && window.Lenis) {
    lenis = new Lenis({ lerp: .1, wheelMultiplier: 1, touchMultiplier: 1.4 });
    if (window.gsap) {
      if (window.ScrollTrigger) lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  /* Anker auf derselben Seite weich anspringen (auch "index.html#x" auf der Startseite) */
  const onHome = document.body.classList.contains('page-home');
  $$('a[href*="#"]').forEach(a => {
    const href = a.getAttribute('href');
    const hash = href.slice(href.indexOf('#'));
    const samePage = href.startsWith('#') || (onHome && href.startsWith('index.html#'));
    if (!samePage || hash.length < 2) return;
    a.addEventListener('click', e => {
      const target = $(hash);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      if (lenis) lenis.scrollTo(target, { offset: hash === '#start' ? 0 : -8, duration: 1.2 });
      else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      history.replaceState(null, '', hash);
    });
  });

  /* ---------- Header: Hintergrund ab Scroll, beim Runterscrollen ausblenden ---------- */
  const top = $('#top');
  let lastY = 0;
  function onScroll(y) {
    if (!top) return;
    top.classList.toggle('is-scrolled', y > 12);
    const down = y > lastY + 4, up = y < lastY - 4;
    if (down && y > 480 && !top.classList.contains('menu-open')) top.classList.add('is-hidden');
    else if (up || y < 480) top.classList.remove('is-hidden');
    lastY = y;
  }
  if (lenis) lenis.on('scroll', e => onScroll(e.scroll));
  else addEventListener('scroll', () => onScroll(scrollY), { passive: true });
  onScroll(scrollY);

  /* ---------- Mobiles Menü ---------- */
  const menuBtn = $('.top__menu'), menu = $('#menu');
  function closeMenu() {
    if (!menuBtn || menuBtn.getAttribute('aria-expanded') !== 'true') return;
    menuBtn.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); top.classList.remove('menu-open');
    if (lenis) lenis.start();
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.getAttribute('aria-expanded') !== 'true';
      if (!open) return closeMenu();
      menuBtn.setAttribute('aria-expanded', 'true'); menu.classList.add('is-open'); top.classList.add('menu-open');
      if (lenis) lenis.stop();
    });
    addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    $$('a', menu).forEach(a => a.addEventListener('click', closeMenu));
  }
  if (document.body.classList.contains('page-projects')) {
    const cur = $('[data-nav="projekte"]'); if (cur) cur.setAttribute('aria-current', 'page');
  }

  $$('.year').forEach(y => (y.textContent = new Date().getFullYear()));

  /* ---------- Projekt-Karte ---------- */
  function txt(p, key) {
    return (I.lang === 'en' && p.en && p.en[key]) || p[key] || '';
  }
  function card(p, { asButton = false, eager = false } = {}) {
    const el = document.createElement(asButton ? 'div' : 'a');
    el.className = 'card';
    if (!asButton) el.href = 'projekte.html#' + p.id;
    const cat = I.t('cat')[p.category] || '';
    const inner = `
      <figure class="card__media">
        <img src="${p.cover}" alt="" width="1600" height="1200" ${eager ? '' : 'loading="lazy"'} decoding="async">
        ${p.example ? `<span class="card__tag">${I.t('example')}</span>` : ''}
      </figure>
      <div class="card__cap">
        <h3 class="card__title">${txt(p, 'title')}</h3>
        <p class="card__meta">${cat}, ${p.year}</p>
      </div>
      <p class="card__sum">${txt(p, 'summary')}</p>`;
    if (asButton) {
      el.innerHTML = `<button class="card__btn" type="button" data-id="${p.id}" aria-haspopup="dialog">${inner}</button>`;
    } else el.innerHTML = inner;
    return el;
  }

  I.apply(I.lang);

  return { $, $$, reduced, fine, lenis, card, txt };
})();
