/* Startseite: Intro, Pixelfeld, Icons, Projekte-Auszug, Band, Formular */
(() => {
  'use strict';
  const { $, $$, reduced, fine, lenis, card } = window.SITE;
  const I = window.I18N;
  const hasGsap = !!window.gsap;
  const SQ = 13 / 17.75;               // Pixelgrösse im Logo (Anteil der Rasterzelle)
  const OFF = (1 - SQ) / 2;
  const rand = (a, b) => a + Math.random() * (b - a);

  /* ======================= Uhr ======================= */
  const clockEl = $('#clock');
  function tick() {
    const t = new Intl.DateTimeFormat('de-CH', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Zurich' }).format(new Date());
    if (clockEl) clockEl.textContent = I.t('clock').replace('{t}', t);
  }
  tick(); setInterval(tick, 15000); I.onChange(tick);

  /* ======================= Pixel-Grafiken ======================= */
  const ICONS = {
    monitor: ['#######', '#.....#', '#.c.c.#', '#.....#', '#######', '...#...', '.#####.'],
    browser: ['#######', '#c#####', '#.....#', '#.##..#', '#.....#', '#.ccc.#', '#######'],
    phone:   ['.#####.', '.#...#.', '.#c.c#.', '.#ccc#.', '.#.c.#.', '.#...#.', '.#####.']
  };
  const DIGITS = {
    1: ['..#..', '.##..', '#.#..', '..#..', '..#..', '..#..', '####c'],
    2: ['.###.', '#...#', '....#', '...#.', '..#..', '.#...', '####c'],
    3: ['####.', '....#', '....#', '.###.', '....#', '....#', '####c']
  };
  function pixelSVG(map) {
    const w = map[0].length, h = map.length;
    let r = '';
    map.forEach((row, y) => [...row].forEach((ch, x) => {
      if (ch === '.') return;
      r += `<rect ${ch === 'c' ? 'class="c" ' : ''}x="${(x + OFF).toFixed(3)}" y="${(y + OFF).toFixed(3)}" width="${SQ.toFixed(3)}" height="${SQ.toFixed(3)}"/>`;
    }));
    return `<svg viewBox="0 0 ${w} ${h}" aria-hidden="true">${r}</svg>`;
  }
  $$('.service').forEach(s => { $('.service__icon', s).innerHTML = pixelSVG(ICONS[s.dataset.icon]); });
  $$('.step__num').forEach(s => { s.innerHTML = pixelSVG(DIGITS[s.dataset.digit]); });

  /* ======================= Projekte-Auszug ======================= */
  const teaser = $('#workTeaser');
  function renderTeaser() {
    if (!teaser || !window.PROJECTS) return;
    const list = [...PROJECTS].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)).slice(0, 3);
    teaser.innerHTML = '';
    list.forEach(p => teaser.appendChild(card(p)));
  }
  renderTeaser(); I.onChange(renderTeaser);

  /* ======================= Tech-Band (nahtlose Schleife) ======================= */
  const track = $('#bandTrack');
  if (track) {
    const list = $('.band__list', track);
    const inner = document.createElement('div');
    inner.className = 'band__inner';
    track.appendChild(inner);
    inner.appendChild(list);
    const clone = list.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    inner.appendChild(clone);
  }

  /* ======================= Formular (FormSubmit + Captcha-Fenster) ======================= */
  const form = $('#form');
  const modal = $('#fsModal'), frame = $('#fsFrame');
  if (form) {
    const status = $('#formStatus');
    const hid = n => form.querySelector(`input[type=hidden][name="${n}"]`);
    let armed = false;
    form.addEventListener('submit', e => {
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const msg = form.elements.message.value.trim();
      $$('.is-invalid', form).forEach(x => x.classList.remove('is-invalid'));
      if (!name || !email || !msg) {
        e.preventDefault();
        [['name', name], ['email', email], ['message', msg]].forEach(([n, v]) => { if (!v) form.elements[n].classList.add('is-invalid'); });
        status.textContent = I.t('errEmpty');
        (form.querySelector('.is-invalid') || form.elements.name).focus();
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        e.preventDefault(); form.elements.email.classList.add('is-invalid'); form.elements.email.focus();
        status.textContent = I.t('errMail'); return;
      }
      const checked = form.querySelector('input[name="topic"]:checked');
      hid('service').value = checked ? checked.nextElementSibling.textContent : '';
      hid('_replyto').value = email;
      const first = name.split(' ').filter(Boolean)[0];
      hid('_autoresponse').value = I.t('autoresponse').replace('{n}', first ? ' ' + first : '');
      hid('_next').value = new URL('gesendet.html', location.href).href;
      status.textContent = I.t('sending');
      // Formular schickt normal ins iframe im Fenster, dort erscheint das Captcha von FormSubmit
      armed = true;
      modal.classList.add('is-loading');
      if (!modal.open) modal.showModal();
      if (lenis) lenis.stop();
    });
    frame.addEventListener('load', () => { if (armed) modal.classList.remove('is-loading'); });
    function closeModal(sent) {
      armed = false;
      if (modal.open) modal.close();
      try { frame.src = 'about:blank'; } catch (x) {}
      if (lenis) lenis.start();
      if (sent) { form.reset(); status.textContent = I.t('okSent'); }
      else status.textContent = I.t('capCancel');
    }
    $('#fsClose').addEventListener('click', () => closeModal(false));
    modal.addEventListener('cancel', e => { e.preventDefault(); closeModal(false); });
    addEventListener('message', e => {
      if (e.origin !== location.origin || !e.data || e.data.type !== 'endrit-form-sent') return;
      closeModal(true);
    });
    // Rückkehr ohne Fenster (z. B. ohne JavaScript im iframe): ?gesendet=1
    const q = new URLSearchParams(location.search);
    if (q.get('gesendet') === '1') {
      status.textContent = I.t('okSent');
      history.replaceState(null, '', location.pathname + '#kontakt');
    }
  }
  $$('[data-pick]').forEach(a => a.addEventListener('click', () => {
    const r = form && form.querySelector(`input[value="${a.dataset.pick}"]`);
    if (r) r.checked = true;
  }));

  /* ======================= Pixelfeld im Hero ======================= */
  const field = (() => {
    const cv = $('#field');
    if (!cv) return null;
    const ctx = cv.getContext('2d');
    const VIOLET = [62, 2, 176], CYAN = [45, 215, 236];
    let W = 0, H = 0, dpr = 1, cell = 22, cols = 0, rows = 0;
    let base, energy, tint, running = false, visible = true, alpha = 1;
    let last = performance.now(), lastTwinkle = 0;

    // deterministischer Zufall, damit die "Wolke" immer gleich aussieht
    const hash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };

    function resize() {
      const r = cv.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = W < 700 ? 18 : 22;
      cols = Math.ceil(W / cell); rows = Math.ceil(H / cell);
      base = new Float32Array(cols * rows); energy = new Float32Array(cols * rows); tint = new Uint8Array(cols * rows);
      const ax = W < 700 ? .8 : .8, ay = W < 700 ? .16 : .34, rad = W < 700 ? .55 : .34;
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const nx = x / cols, ny = y / rows * (H / W);
        const d = Math.hypot(nx - ax, ny - ay * (H / W)) / rad;
        const h = hash(x, y);
        const i = y * cols + x;
        if (h < Math.pow(Math.max(0, 1 - d), 1.6) * .62) base[i] = h < .03 ? -1 : .07 + hash(y, x) * .16; // -1 = Cyan-Pixel
      }
      draw();
    }
    function textZone(x, y) { // links unten steht Text: Pixel dort dämpfen
      if (y < 84) return 0;   // Header frei halten
      if (W < 700) return y > H * .38 ? .25 : 1;
      return x < W * .56 && y > H * .3 ? .22 : 1;
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const s = cell * SQ, o = (cell - s) / 2;
      for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
        const i = y * cols + x, b = base[i], e = energy[i];
        if (!b && e < .02) continue;
        const px = x * cell, py = y * cell, z = textZone(px, py);
        let a, col;
        if (e >= .02) { a = Math.min(1, (b > 0 ? b : 0) + e) * z; col = tint[i] ? CYAN : VIOLET; }
        else if (b < 0) { a = .55 * z; col = CYAN; }
        else { a = b * z; col = VIOLET; }
        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${(a * alpha).toFixed(3)})`;
        ctx.fillRect(px + o, py + o, s, s);
      }
    }
    function loop(now) {
      if (!running) return;
      const dt = Math.min(64, now - last); last = now;
      const k = Math.pow(.9, dt / 16.7);
      let active = false;
      for (let i = 0; i < energy.length; i++) if (energy[i] > .01) { energy[i] *= k; active = true; } else energy[i] = 0;
      if (now - lastTwinkle > 160 && !reduced) { // seltenes Funkeln in der Wolke
        lastTwinkle = now;
        for (let n = 0; n < 6; n++) {
          const i = (Math.random() * base.length) | 0;
          if (base[i]) { energy[i] = .7; tint[i] = Math.random() < .5 ? 1 : 0; break; }
        }
        active = true;
      }
      if (active && visible) draw();
      requestAnimationFrame(loop);
    }
    function poke(cx, cy, radius = 2.6) {
      const gx = cx / cell, gy = cy / cell;
      const r = Math.ceil(radius);
      for (let y = Math.floor(gy) - r; y <= gy + r; y++) for (let x = Math.floor(gx) - r; x <= gx + r; x++) {
        if (x < 0 || y < 0 || x >= cols || y >= rows) continue;
        const d = Math.hypot(x + .5 - gx, y + .5 - gy);
        if (d > radius) continue;
        const i = y * cols + x, v = 1 - d / radius;
        if (v > energy[i]) { energy[i] = v; tint[i] = Math.random() < .18 ? 1 : 0; }
      }
    }
    const hero = $('.hero');
    let px = -1, py = -1;
    hero.addEventListener('pointermove', e => {
      const r = cv.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      // Zwischenschritte, damit die Spur bei schnellen Bewegungen nicht abreisst
      if (px >= 0) {
        const steps = Math.min(12, Math.ceil(Math.hypot(x - px, y - py) / (cell * .7)));
        for (let s = 1; s <= steps; s++) poke(px + (x - px) * s / steps, py + (y - py) * s / steps, e.pointerType === 'touch' ? 3.2 : 2.6);
      } else poke(x, y);
      px = x; py = y;
    }, { passive: true });
    hero.addEventListener('pointerleave', () => { px = py = -1; });
    hero.addEventListener('pointerdown', e => {
      const r = cv.getBoundingClientRect(); poke(e.clientX - r.left, e.clientY - r.top, 4.5);
    }, { passive: true });

    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(cv);
    let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
    resize();
    return {
      start() { if (running || reduced) return; running = true; last = performance.now(); requestAnimationFrame(loop); },
      setAlpha(v) { alpha = v; draw(); }
    };
  })();

  /* ======================= Ohne GSAP: alles sichtbar ======================= */
  const intro = $('#intro');
  if (!hasGsap) {
    document.documentElement.classList.remove('intro-on');
    if (intro) intro.remove();
    if (field) field.start();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* ======================= Hero-Auftritt ======================= */
  const heroLines = $$('.hero__title .line > span');
  function heroEnter(delay = 0) {
    const tl = gsap.timeline({ delay });
    if (reduced) { if (field) field.start(); return tl; }
    tl.from(heroLines, { yPercent: 108, duration: 1, ease: 'expo.out', stagger: .09 }, 0)       // Lead
      .from('.hero__sub', { y: 14, opacity: 0, duration: .7, ease: 'power3.out' }, .14)          // Support
      .from('.hero__actions', { y: 10, opacity: 0, duration: .6, ease: 'power3.out' }, .22)      // Support
      .from('.hero__meta', { opacity: 0, duration: .6, ease: 'power1.out' }, .3)                 // Deko: nur Fade
      .add(() => field && field.start(), 0);
    if (field) { const o = { a: 0 }; tl.to(o, { a: 1, duration: 1.1, ease: 'power1.out', onUpdate: () => field.setAlpha(o.a) }, 0); }
    return tl;
  }

  /* ======================= Intro ======================= */
  const playIntro = intro && document.documentElement.classList.contains('intro-on');
  if (!playIntro) {
    if (intro) intro.remove();
    heroEnter(.05);
  } else {
    try { sessionStorage.setItem('endrit-intro', '1'); } catch (e) {}
    if (lenis) lenis.stop();
    scrollTo(0, 0);

    const logoWrap = $('#introLogo');
    const stage = $('.intro__stage');
    const svg = $('svg', logoWrap);
    const ends = $$('.lg-end', svg);
    const pxs = $$('.lg-px', svg);
    const cyans = $$('.lg-c', svg);
    const tm = $('.lg-tm', svg);
    const tag = $('#introTag');
    const headerLogo = $('.top__logo');

    gsap.set([...pxs, ...ends], { transformBox: 'fill-box', transformOrigin: '50% 50%' });

    const tl = gsap.timeline({ defaults: { overwrite: 'auto' } });

    // 1) "End" wird Zeile für Zeile gedruckt (7 Pixelzeilen), Buchstaben leicht versetzt
    ends.forEach((el, i) => {
      tl.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: .62, ease: 'steps(7)' }, .08 + i * .1);
    });
    // 2) "rit": Pixel fliegen aus dem Raum ein, von links nach rechts, Abstände werden kürzer
    tl.from(pxs, {
      x: () => rand(-22, 22), y: () => rand(-14, 14), rotation: () => rand(-180, 180), scale: () => rand(.3, 1.8), opacity: 0,
      duration: .95, ease: 'expo.out',
      stagger: { each: .018, ease: 'power2.in' }
    }, .05);
    // 3) Cyan-Pixel flackern auf, wenn alles sitzt (Akzent landet mit dem Ende)
    tl.to(cyans, { opacity: .15, duration: .06, repeat: 3, yoyo: true, ease: 'steps(1)', stagger: .03 }, 1.08)
      .from([tm, tag], { opacity: 0, duration: .45, ease: 'power1.out' }, 1.0)
      .from(tag, { letterSpacing: '.6em', duration: .9, ease: 'expo.out' }, 1.0);

    // 4) Bildschirm löst sich in Pixel auf, Logo fliegt in den Header
    const cv = $('#introDissolve');
    const dctx = cv.getContext('2d');
    let cells = [], CW = 0, CH = 0, cs = 28, dd = 1;
    function prepDissolve() {
      dd = Math.min(devicePixelRatio || 1, 2);
      CW = innerWidth; CH = innerHeight;
      cv.width = CW * dd; cv.height = CH * dd; dctx.setTransform(dd, 0, 0, dd, 0, 0);
      cs = CW < 700 ? 22 : 30;
      const cx = CW / 2, cy = CH / 2, maxD = Math.hypot(cx, cy);
      cells = [];
      for (let y = 0; y < CH; y += cs) for (let x = 0; x < CW; x += cs) {
        cells.push({ x, y, t: Math.hypot(x + cs / 2 - cx, y + cs / 2 - cy) / maxD * .72 + Math.random() * .28 });
      }
    }
    function drawDissolve(p) {
      dctx.clearRect(0, 0, CW, CH);
      dctx.fillStyle = '#0A051E';
      for (const c of cells) {
        const k = (c.t - p) / .07;
        if (k <= 0) continue;
        const s = cs * Math.min(1, k);
        const o = (cs - s) / 2;
        dctx.fillRect(c.x + o, c.y + o, s + (k >= 1 ? .5 : 0), s + (k >= 1 ? .5 : 0));
      }
    }
    const dis = { p: 0 };
    let flight;
    tl.add(() => {
      prepDissolve(); drawDissolve(0);
      cv.style.display = 'block'; intro.style.background = 'transparent';
      // FLIP: vom Intro-Logo zur Header-Position
      const a = logoWrap.getBoundingClientRect(), b = headerLogo.getBoundingClientRect();
      flight = gsap.to(logoWrap, { x: b.left - a.left, y: b.top - a.top, scale: b.width / a.width, duration: .95, ease: 'expo.inOut' });
      gsap.fromTo(stage, { '--logo-main': '#F2F4F4' }, { '--logo-main': '#3E02B0', duration: .5, delay: .3, ease: 'power1.inOut' });
    }, 1.75)
      .to(tag, { opacity: 0, y: -6, duration: .25, ease: 'power1.in' }, 1.75)
      .to($('#introSkip'), { opacity: 0, duration: .2 }, 1.75)
      .to(dis, { p: 1, duration: .95, ease: 'power2.inOut', onUpdate: () => drawDissolve(dis.p) }, 1.8)
      .add(heroEnter(), 2.05)
      .add(finish, 2.75);

    let done = false;
    function finish() {
      if (done) return; done = true;
      document.documentElement.classList.remove('intro-on');
      gsap.set(headerLogo, { opacity: 1 });
      intro.remove();
      if (lenis) lenis.start();
      ScrollTrigger.refresh();
    }
    function skip() {
      if (done) return;
      tl.progress(1); if (flight) flight.progress(1);
      finish();
    }
    $('#introSkip').addEventListener('click', skip);
    addEventListener('keydown', e => { if (e.key === 'Escape') skip(); }, { once: true });
  }

  /* ======================= Scroll: Pixel setzen sich zusammen ======================= */
  if (!reduced) {
    $$('.service__icon svg, .step__num svg').forEach(svg => {
      const rects = $$('rect', svg);
      gsap.from(rects, {
        x: () => rand(-2.5, 2.5), y: () => rand(-2.5, 2.5), opacity: 0, duration: .7, ease: 'expo.out',
        stagger: { each: .025, from: 'random' },
        scrollTrigger: { trigger: svg, start: 'top 85%', once: true }
      });
    });
    // Hover: Pixel springen kurz aus dem Raster
    if (fine) $$('.service').forEach(s => {
      const rects = $$('.service__icon rect', s);
      s.addEventListener('mouseenter', () => {
        gsap.fromTo(rects, { x: 0, y: 0 }, {
          keyframes: [{ x: () => rand(-.6, .6), y: () => rand(-.6, .6), duration: .12, ease: 'power2.out' }, { x: 0, y: 0, duration: .35, ease: 'expo.out' }],
          stagger: { each: .008, from: 'random' }, overwrite: true
        });
      });
    });
    // Projekt-Karten: Bild deckt sich von unten auf (eine Geste für die Gruppe)
    ScrollTrigger.batch('.work__grid .card__media img', {
      start: 'top 92%', once: true,
      onEnter: els => gsap.fromTo(els, { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.08 }, {
        clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.1, ease: 'expo.out', stagger: .12, clearProps: 'clipPath,transform'
      })
    });
  }
  addEventListener('load', () => ScrollTrigger.refresh());
})();
