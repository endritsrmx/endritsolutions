/* Projektseite: Raster, Filter (mit Flip-Animation), Detail-Dialog */
(() => {
  'use strict';
  const { $, $$, reduced, lenis, card, txt } = window.SITE;
  const I = window.I18N;
  const DATA = window.PROJECTS || [];
  const grid = $('#grid'), empty = $('#empty');
  const hasFlip = !!(window.gsap && window.Flip);
  if (hasFlip) gsap.registerPlugin(Flip);

  let filter = 'all';
  const items = new Map();   // id -> <li>

  /* Rasterrhythmus: [gross | mittel], [drittel ×3], [mittel | gross], [drittel ×3] … */
  const ROWS = [['is-wide', 'is-mid'], ['', '', ''], ['is-mid', 'is-wide'], ['', '', '']];
  function layout(list) {
    const out = []; let r = 0, i = 0;
    while (i < list.length) {
      let row = ROWS[r % ROWS.length];
      const left = list.length - i;
      if (left < row.length) row = left === 1 ? ['is-full'] : ['is-wide', 'is-mid']; // Reste sauber füllen
      row.forEach(cls => { if (i < list.length) out.push([list[i++], cls]); });
      r++;
    }
    return out;
  }

  function build() {
    grid.innerHTML = ''; items.clear();
    DATA.forEach(p => {
      const li = document.createElement('li');
      li.dataset.id = p.id; li.dataset.cat = p.category;
      li.appendChild(card(p, { asButton: true }));
      items.set(p.id, li);
      grid.appendChild(li);
    });
  }

  function apply(animate) {
    const visible = DATA.filter(p => filter === 'all' || p.category === filter);
    const state = animate && hasFlip && !reduced ? Flip.getState(grid.children) : null;
    const oldH = grid.offsetHeight;
    items.forEach(li => { li.hidden = true; li.className = ''; });
    layout(visible).forEach(([p, cls]) => {
      const li = items.get(p.id);
      li.hidden = false; if (cls) li.className = cls;
      grid.appendChild(li); // Reihenfolge der Daten beibehalten
    });
    empty.hidden = visible.length > 0;
    if (state) {
      // Höhe weich anpassen, damit nichts darunter springt
      const newH = grid.offsetHeight;
      gsap.fromTo(grid, { height: oldH }, { height: newH, duration: .6, ease: 'power3.inOut', clearProps: 'height' });
      Flip.from(state, {
        duration: .6, ease: 'power3.inOut', absolute: true, nested: true, scale: false,
        onEnter: els => gsap.fromTo(els, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .45, ease: 'power3.out', delay: .12 }),
        onLeave: els => gsap.to(els, { opacity: 0, duration: .18, ease: 'power1.out' })
      });
    }
  }

  function counts() {
    $$('#filters button').forEach(b => {
      const f = b.dataset.filter;
      const n = f === 'all' ? DATA.length : DATA.filter(p => p.category === f).length;
      $('sup', b).textContent = n;
      b.hidden = n === 0 && f !== 'all';
    });
  }

  $$('#filters button').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.filter === filter) return;
    filter = b.dataset.filter;
    $$('#filters button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    apply(true);
  }));

  /* ---------- Detail-Dialog ---------- */
  const sheet = $('#sheet');
  let lastFocus = null;
  function open(id, push = true) {
    const p = DATA.find(x => x.id === id);
    if (!p || !sheet) return;
    lastFocus = document.activeElement;
    const imgs = (p.images && p.images.length ? p.images : [p.cover]);
    const main = $('#sheetImg');
    main.src = imgs[0]; main.alt = txt(p, 'title');
    const th = $('#sheetThumbs');
    th.innerHTML = ''; th.classList.toggle('has-many', imgs.length > 1);
    if (imgs.length > 1) imgs.forEach((src, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.setAttribute('aria-label', `${i + 1} / ${imgs.length}`);
      if (i === 0) b.setAttribute('aria-current', 'true');
      b.innerHTML = `<img src="${src}" alt="" loading="lazy">`;
      b.addEventListener('click', () => {
        main.src = src; $$('button', th).forEach(x => x.removeAttribute('aria-current')); b.setAttribute('aria-current', 'true');
      });
      th.appendChild(b);
    });
    $('#sheetCat').textContent = (I.t('cat')[p.category] || '') + (p.example ? ` (${I.t('example')})` : '');
    $('#sheetTitle').textContent = txt(p, 'title');
    $('#sheetMeta').innerHTML =
      (p.client ? `<dt>${I.t('client')}</dt><dd>${p.client}</dd>` : '') +
      `<dt>${I.t('year')}</dt><dd>${p.year}</dd>` +
      (p.tags && p.tags.length ? `<dt>${I.t('service')}</dt><dd>${p.tags.join(', ')}</dd>` : '');
    $('#sheetText').innerHTML = txt(p, 'text').split(/\n\n+/).map(t => `<p>${t}</p>`).join('');
    const link = $('#sheetLink');
    link.hidden = !p.link; if (p.link) link.href = p.link;
    sheet.classList.remove('is-closing');
    sheet.showModal();
    sheet.scrollTop = 0;
    if (lenis) lenis.stop();
    if (push) history.replaceState(null, '', '#' + p.id);
  }
  function close() {
    if (!sheet.open || sheet.classList.contains('is-closing')) return;
    if (reduced) return finishClose();
    sheet.classList.add('is-closing');
    sheet.addEventListener('animationend', finishClose, { once: true });
  }
  function finishClose() {
    sheet.classList.remove('is-closing');
    sheet.close();
  }
  if (sheet) {
    sheet.addEventListener('close', () => {
      if (lenis) lenis.start();
      history.replaceState(null, '', location.pathname);
      if (lastFocus) lastFocus.focus();
    });
    sheet.addEventListener('cancel', e => { e.preventDefault(); close(); });   // Esc
    sheet.addEventListener('click', e => { if (e.target === sheet) close(); }); // Klick neben das Fenster
    $('#sheetClose').addEventListener('click', close);
  }
  grid.addEventListener('click', e => {
    const b = e.target.closest('.card__btn');
    if (b) open(b.dataset.id);
  });

  /* ---------- Start ---------- */
  build(); counts(); apply(false);
  I.onChange(() => { build(); apply(false); });

  if (window.gsap && !reduced) {
    gsap.from('.pf__title, .pf__lead, .pf__filters', { y: 18, opacity: 0, duration: .8, ease: 'expo.out', stagger: .07 });
    gsap.from([...grid.children].filter(li => !li.hidden).slice(0, 6), { y: 28, opacity: 0, duration: .9, ease: 'expo.out', stagger: { each: .07, ease: 'power1.in' }, delay: .15 });
  }
  if (location.hash.length > 1) open(decodeURIComponent(location.hash.slice(1)), false);
})();
