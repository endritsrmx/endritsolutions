/* endrIT Solutions – site script (no dependencies) */
(function () {
  "use strict";

  var DICT = {
    de: {
      "nav.services": "Leistungen", "nav.about": "Über mich", "nav.contact": "Kontakt",
      "hero.title": "IT-Support, Websites und Social Media.",
      "hero.body": "Ich bin Endrit Sermaxhaj, Informatiker. Ich helfe Privatpersonen und kleinen Firmen, wenn der Computer streikt, das WLAN nicht will oder die Website in die Jahre gekommen ist.",
      "hero.cta": "Anfrage senden", "hero.cta2": "Leistungen ansehen",
      "hero.meta": "Vor Ort oder per Fernwartung, auf Deutsch oder Englisch.",
      "services.title": "Leistungen",
      "services.lead": "Drei Bereiche, eine Ansprechperson. Sie erklären mir, was Sie brauchen, ich kümmere mich um den Rest.",
      "services.ask": "Anfrage zu dieser Leistung",
      "services.note": "Für Privatpersonen und KMU.",
      "s0.title": "IT-Dienstleistungen", "s0.body": "Hilfe bei Ihnen zu Hause, im Büro oder per Fernwartung.",
      "s0.p0": "IT-Support und Fehlerbehebung", "s0.p1": "Netzwerk und WLAN", "s0.p2": "Geräte und Software einrichten", "s0.p3": "Wartung und Updates",
      "s1.title": "Webdesign & Website-Redesign", "s1.body": "Eine neue Website oder eine Überarbeitung der bestehenden.",
      "s1.p0": "Passt auf Handy, Tablet und Computer", "s1.p1": "Redesign bestehender Websites", "s1.p2": "SEO-Grundlagen", "s1.p3": "<strong>Inklusive 1 Jahr Wartung</strong>",
      "s2.title": "Social-Media-Betreuung", "s2.body": "Für Firmen, die auf Instagram oder TikTok präsent sein wollen, aber keine Zeit dafür haben.",
      "s2.p0": "Instagram und TikTok", "s2.p1": "Profile einrichten und verbessern", "s2.p2": "Beiträge planen und veröffentlichen", "s2.p3": "Laufende Betreuung",
      "seo.title": "Was eine gute Website bringt",
      "seo.text": "Eine schnelle, übersichtliche Website wird bei Google besser gefunden, lädt auch auf dem Handy rasch und macht es einfach, Sie zu kontaktieren.",
      "seo.cta": "Website-Redesign anfragen", "seo.head": "Musterprojekt, erste 6 Monate", "seo.badge": "Beispiel",
      "seo.traffic": "Besucher pro Monat", "seo.growth": "seit Januar",
      "seo.months": ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun"],
      "seo.ranking": "Google-Position", "seo.keyword": "für 3 Suchbegriffe", "seo.speedSub": "Mobile und Desktop",
      "seo.load": "Ladezeit", "seo.loadSub": "vorher 3.2 s",
      "seo.note": "Beispielzahlen zur Veranschaulichung, keine echten Kundendaten.",
      "about.title": "Über mich",
      "about.body": "Ich bin Informatiker und arbeite am liebsten dort, wo Technik und Gestaltung zusammenkommen. Bei mir haben Sie eine feste Ansprechperson, und ich erkläre die Dinge so, dass man sie auch ohne IT-Kenntnisse versteht.",
      "about.facts": "Sitz in Buchs AG. Beratung auf Deutsch und Englisch.",
      "contact.title": "Kontakt",
      "contact.body": "Schreiben Sie mir kurz, worum es geht. Ich melde mich in der Regel innerhalb von 24 Stunden.",
      "contact.name": "Name", "contact.email": "E-Mail", "contact.phone": "Telefon", "contact.location": "Standort",
      "contact.area": "5033 Buchs AG, Schweiz", "contact.mapPlace": "Buchs AG, Schweiz",
      "contact.mapTitle": "endrIT Solutions auf Google Maps", "contact.mapOpen": "In Google Maps öffnen", "contact.mapReview": "Bewertung schreiben",
      "contact.copy": "Kopieren", "contact.copied": "Kopiert",
      "contact.service": "Leistung", "contact.serviceAny": "Allgemeine Anfrage", "contact.message": "Nachricht",
      "contact.send": "Anfrage senden", "contact.sending": "Wird gesendet …",
      "contact.sent": "Danke! Ihre Anfrage ist bei mir angekommen.",
      "contact.fail": "Das Senden hat leider nicht geklappt.", "contact.failLink": "Stattdessen per E-Mail senden",
      "contact.hint": "Die Anfrage geht direkt an mich.",
      "contact.error": "Bitte geben Sie Ihren Namen, eine gültige E-Mail-Adresse und eine Nachricht an.",
      "contact.subject": "Anfrage über endr-it.ch",
      "footer.privacy": "Datenschutz & Impressum",
      "cookie.title": "Bitte die Cookies nicht essen – einfach akzeptieren.",
      "cookie.body": "Keine Sorge, hier wird nichts getrackt: Ich speichere nur Ihre Sprachwahl im Browser.",
      "cookie.more": "Mehr erfahren", "cookie.accept": "Akzeptieren", "cookie.necessary": "Nur notwendige"
    },
    en: {
      "nav.services": "Services", "nav.about": "About", "nav.contact": "Contact",
      "hero.title": "IT support, websites and social media.",
      "hero.body": "I'm Endrit Sermaxhaj, an IT specialist. I help private customers and small businesses when the computer acts up, the Wi-Fi drops out or the website is showing its age.",
      "hero.cta": "Get in touch", "hero.cta2": "View services",
      "hero.meta": "On site or remote, in German or English.",
      "services.title": "Services",
      "services.lead": "Three areas, one person to talk to. You tell me what you need, I take care of the rest.",
      "services.ask": "Ask about this service",
      "services.note": "For private customers and small businesses.",
      "s0.title": "IT services", "s0.body": "Help at your home, in your office or by remote access.",
      "s0.p0": "IT support and troubleshooting", "s0.p1": "Network and Wi-Fi", "s0.p2": "Setting up devices and software", "s0.p3": "Maintenance and updates",
      "s1.title": "Web design & website redesign", "s1.body": "A new website, or a rework of the one you already have.",
      "s1.p0": "Works on phone, tablet and computer", "s1.p1": "Redesign of existing websites", "s1.p2": "SEO basics", "s1.p3": "<strong>1 year of maintenance included</strong>",
      "s2.title": "Social media management", "s2.body": "For businesses that want to be on Instagram or TikTok but don't have the time for it.",
      "s2.p0": "Instagram and TikTok", "s2.p1": "Setting up and improving profiles", "s2.p2": "Planning and publishing posts", "s2.p3": "Ongoing management",
      "seo.title": "What a good website does for you",
      "seo.text": "A fast, well-organised website ranks better on Google, loads quickly on a phone and makes it easy for people to contact you.",
      "seo.cta": "Ask about a redesign", "seo.head": "Sample project, first 6 months", "seo.badge": "Example",
      "seo.traffic": "Visitors per month", "seo.growth": "since January",
      "seo.months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      "seo.ranking": "Google position", "seo.keyword": "for 3 search terms", "seo.speedSub": "Mobile and desktop",
      "seo.load": "Load time", "seo.loadSub": "previously 3.2 s",
      "seo.note": "Sample figures for illustration, not real client data.",
      "about.title": "About me",
      "about.body": "I'm an IT specialist and I enjoy the work where technology and design meet. You deal with one person throughout, and I explain things so they make sense without an IT background.",
      "about.facts": "Based in Buchs AG. Advice in German and English.",
      "contact.title": "Contact",
      "contact.body": "Send me a short note about what you need. I usually reply within 24 hours.",
      "contact.name": "Name", "contact.email": "Email", "contact.phone": "Phone", "contact.location": "Location",
      "contact.area": "5033 Buchs AG, Switzerland", "contact.mapPlace": "Buchs AG, Switzerland",
      "contact.mapTitle": "endrIT Solutions on Google Maps", "contact.mapOpen": "Open in Google Maps", "contact.mapReview": "Write a review",
      "contact.copy": "Copy", "contact.copied": "Copied",
      "contact.service": "Service", "contact.serviceAny": "General enquiry", "contact.message": "Message",
      "contact.send": "Send enquiry", "contact.sending": "Sending …",
      "contact.sent": "Thank you! Your enquiry has reached me.",
      "contact.fail": "Sorry, sending failed.", "contact.failLink": "Send by email instead",
      "contact.hint": "Your enquiry goes straight to me.",
      "contact.error": "Please enter your name, a valid email address and a message.",
      "contact.subject": "Enquiry via endr-it.ch",
      "footer.privacy": "Privacy & legal notice",
      "cookie.title": "Don't eat the cookies. Just accept them.",
      "cookie.body": "Don't worry, there's no tracking here: I only store your language choice in your browser.",
      "cookie.more": "Learn more", "cookie.accept": "Accept", "cookie.necessary": "Necessary only"
    }
  };

  var lang = "de";
  try { if (localStorage.getItem("endrit-lang") === "en") lang = "en"; } catch (e) {}
  function t(key) { return DICT[lang][key]; }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* Language */
  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    try { localStorage.setItem("endrit-lang", lang); } catch (e) {}
    $all("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $all("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $all("[data-i18n-ph]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-ph")); el.placeholder = v; el.setAttribute("aria-label", v);
    });
    $all("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $all("[data-i18n-title]").forEach(function (el) { el.title = t(el.getAttribute("data-i18n-title")); });
    $all("[data-i18n-list]").forEach(function (el) {
      var list = t(el.getAttribute("data-i18n-list"));
      $all("span", el).forEach(function (s, i) { s.textContent = list[i]; });
    });
    $all("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    var map = document.querySelector("[data-map-src]");
    if (map) {
      var src = map.getAttribute("data-map-src").replace("{hl}", lang);
      if (map.getAttribute("src") !== src) map.setAttribute("src", src);
    }
    if (state.fs === "sending") setSendLabel();
  }
  $all("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  /* Mobile menu */
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  function setMenu(open) {
    mobileNav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", function () { setMenu(!mobileNav.classList.contains("is-open")); });
  $all("a", mobileNav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });

  /* Pixel mark in the hero */
  var PIX = [
    "..C....P..",
    ".......P..",
    ".PP...CPP.",
    "..P....P..",
    "..P....C..",
    "..C....P..",
    "..P....P..",
    "..P....P..",
    "CCPP...PPP",
    ".........."
  ].join("");
  var mark = document.querySelector(".pixel-mark");
  var cells = PIX.split("").map(function (ch, i) {
    var s = document.createElement("span");
    if (ch === "P") s.className = "p";
    if (ch === "C") s.className = "c";
    s.style.setProperty("--d", (Math.floor(i / 10) * 40 + (i % 10) * 15) + "ms");
    mark.appendChild(s);
    return s;
  });
  var empties = cells.filter(function (s) { return !s.className; });
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function buildMark() {
    if (mark.classList.contains("is-built")) return;
    mark.classList.add("is-built");
    if (reduced) return;
    setInterval(function () {
      var cell = empties[Math.floor(Math.random() * empties.length)];
      cell.classList.add("spark");
      setTimeout(function () { cell.classList.remove("spark"); }, 1200);
    }, 1800);
  }
  if (window.__esIntroDone) buildMark();
  window.addEventListener("intro:done", buildMark);
  setTimeout(buildMark, 9500);

  /* SEO example: count up once it is visible */
  var dash = document.querySelector(".dashboard");
  function fmt(el, v) {
    var dec = +(el.getAttribute("data-decimals") || 0);
    var s = v.toFixed(dec);
    if (el.getAttribute("data-format") === "thousands") s = s.replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    el.textContent = s;
  }
  function countUp() {
    if (dash.classList.contains("is-counted")) return;
    dash.classList.add("is-counted");
    var nums = $all("[data-count]", dash);
    if (reduced) return;
    var t0 = performance.now(), dur = 1400;
    (function step(now) {
      var k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      nums.forEach(function (el) { fmt(el, +el.getAttribute("data-count") * e); });
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { countUp(); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(dash);
  } else { countUp(); }

  /* Copy buttons */
  $all("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () {
        btn.textContent = t("contact.copied");
        setTimeout(function () { btn.textContent = t("contact.copy"); }, 1600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });
  });

  /* Contact form (FormSubmit) */
  var form = document.querySelector(".contact-form");
  var select = form.querySelector("[name=service]");
  var sendBtn = form.querySelector("[type=submit]");
  var fallback = form.querySelector(".mailto-fallback");
  var state = { fs: "idle" };

  $all("[data-service]").forEach(function (a) {
    a.addEventListener("click", function () { select.value = a.getAttribute("data-service"); });
  });

  function showMsg(which) {
    $all("[data-state]", form).forEach(function (p) { p.hidden = p.getAttribute("data-state") !== which; });
  }
  function setSendLabel() {
    sendBtn.textContent = t(state.fs === "sending" ? "contact.sending" : "contact.send");
    sendBtn.disabled = state.fs === "sending";
  }
  function setFs(fs) { state.fs = fs; setSendLabel(); showMsg(fs === "ok" || fs === "fail" ? fs : null); }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = new FormData(form);
    var name = String(f.get("name") || "").trim();
    var email = String(f.get("email") || "").trim();
    var labels = [t("contact.serviceAny"), t("s0.title"), t("s1.title"), t("s2.title")];
    var label = labels[+select.value || 0];
    var message = String(f.get("message") || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) { showMsg("err"); return; }
    showMsg(null);
    var body = message + "\n\n—\n" + t("contact.name") + ": " + name + "\n" + t("contact.email") + ": " + email + "\n" + t("contact.service") + ": " + label;
    fallback.href = "mailto:info@endr-it.ch?subject=" + encodeURIComponent(t("contact.subject") + ": " + label) + "&body=" + encodeURIComponent(body);
    if (state.fs === "sending") return;
    if (String(f.get("_honey") || "")) { setFs("ok"); return; }
    setFs("sending");
    var fn = name.split(" ").filter(Boolean)[0] || "";
    var ar = "Hallo" + (fn ? " " + fn : "") + ", vielen Dank für deine Anfrage! Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich bei dir – im Normalfall dauert es höchstens 24 Stunden.\n\nFreundliche Grüsse\nEndrit Sermaxhaj – endrIT Solutions · info@endr-it.ch · endr-it.ch\n\n—\n\nHi" + (fn ? " " + fn : "") + ", thank you for your enquiry! We have received your message and will get back to you as soon as possible – normally within 24 hours at most.\n\nKind regards\nEndrit Sermaxhaj – endrIT Solutions";
    fetch("https://formsubmit.co/ajax/info@endr-it.ch", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name: name, email: email, service: label, message: message, _replyto: email, _subject: "Neue Anfrage über endr-it.ch", _template: "table", _captcha: "false", _honey: "", _autoresponse: ar })
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (r.ok && String(d.success) === "true") { setFs("ok"); try { form.reset(); } catch (x) {} }
        else setFs("fail");
      });
    }).catch(function () { setFs("fail"); });
  });

  /* Cookie bar: shown once the intro is gone, takes three bites when dismissed */
  (function () {
    var bar = document.getElementById("cookie-bar");
    if (!bar) return;
    var saved = null;
    try { saved = localStorage.getItem("endrit-cookies"); } catch (e) {}
    if (saved) { bar.parentNode.removeChild(bar); return; }

    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var grid = bar.querySelector(".cookie-pix");
    var chips = { "1,3": 1, "2,5": 1, "3,2": 1, "4,4": 1, "5,1": 1, "5,6": 1, "6,3": 1 };
    var bites = [[0, 7], [1.2, 7.4], [-0.2, 5.6]];
    var pix = [];
    for (var r = 0; r < 8; r++) for (var c = 0; c < 8; c++) {
      var s = document.createElement("span");
      if (chips[r + "," + c]) s.className = "chip";
      if (Math.hypot(r - 3.5, c - 3.5) > 3.6) s.className += " off";
      grid.appendChild(s);
      pix.push({ el: s, r: r, c: c });
    }

    function show() {
      bar.hidden = false;
      requestAnimationFrame(function () { requestAnimationFrame(function () { bar.classList.add("is-on"); }); });
    }
    function remove() { if (bar.parentNode) bar.parentNode.removeChild(bar); }
    function bite(n) {
      var b = bites[n];
      pix.forEach(function (p) { if (Math.hypot(p.r - b[0], p.c - b[1]) <= 1.7) p.el.classList.add("off"); });
    }
    function choose(v) {
      try { localStorage.setItem("endrit-cookies", v); } catch (e) {}
      if (reduced) { remove(); return; }
      bar.classList.add("is-biting");
      var n = 0;
      (function next() {
        bite(n++);
        if (n < bites.length) setTimeout(next, 160);
        else setTimeout(function () { bar.classList.remove("is-on"); setTimeout(remove, 450); }, 380);
      })();
    }
    $all("[data-cookie]", bar).forEach(function (b) {
      b.addEventListener("click", function () { choose(b.getAttribute("data-cookie")); });
    });

    if (window.__esIntroDone || !document.getElementById("es-intro")) setTimeout(show, 400);
    else window.addEventListener("intro:done", function () { setTimeout(show, 400); }, { once: true });
  })();

  document.querySelector(".year").textContent = new Date().getFullYear();
  applyLang(lang);
})();
