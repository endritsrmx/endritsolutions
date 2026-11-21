/* Texte DE / EN – hier anpassen */
window.I18N = (() => {
  const T = {
    de: {
      skipLink: 'Zum Inhalt', skip: 'Überspringen', menu: 'Menü',
      nav1: 'Leistungen', nav2: 'Projekte', nav3: 'Über mich', nav4: 'Kontakt',
      h1a: 'Technik, die', h1b: 'einfach läuft.',
      heroSub: 'IT-Support, Websites und Social Media für Private und KMU in Buchs AG und Umgebung. Vor Ort oder per Fernwartung.',
      cta: 'Anfrage senden', ctaProjects: 'Projekte ansehen',
      replyV: 'Antwort meist innert 24 Stunden', clock: 'Buchs AG, {t} Uhr',
      servicesTitle: 'Drei Bereiche. Eine Ansprechperson.',
      s1t: 'IT-Support', s2t: 'Webdesign', s3t: 'Social Media',
      s1p: 'Der Computer streikt, das WLAN spinnt, der Drucker will nicht. Ich komme vorbei oder schalte mich per Fernwartung dazu.',
      s1a: 'Fehlersuche und Support', s1b: 'Netzwerk und WLAN', s1c: 'Geräte und Software einrichten', s1d: 'Wartung und Updates',
      s2p: 'Neue Website oder die alte auf Vordermann gebracht. Schnell, sauber auf jedem Bildschirm und so gebaut, dass Google sie findet.',
      s2a: 'Responsive für Handy, Tablet, Desktop', s2b: 'Redesign bestehender Seiten', s2c: 'SEO-Grundlagen', s2d: 'Ein Jahr Wartung inklusive',
      s3p: 'Für Betriebe, die gute Arbeit machen, aber keine Zeit für Instagram und TikTok haben.',
      s3a: 'Profile aufsetzen und verbessern', s3b: 'Posts planen und veröffentlichen', s3c: 'Laufende Betreuung',
      ask: 'Dazu anfragen',
      workTitle: 'Ausgewählte Projekte', workAll: 'Alle Projekte',
      stepsTitle: 'So läuft’s ab.',
      st1: 'Melde dich', st1p: 'Per Formular, Mail oder Telefon. Beschreib kurz, was nicht läuft oder was du vorhast.',
      st2: 'Wir klären es', st2p: 'Ich schaue mir die Lage an und sage dir ehrlich, was es braucht und was nicht.',
      st3: 'Es läuft', st3p: 'Ich löse es vor Ort oder per Fernwartung und erkläre dir, was ich gemacht habe.',
      role: 'Informatiker aus Buchs AG',
      about1: 'Am liebsten arbeite ich dort, wo Technik und Gestaltung sich treffen. Du hast bei mir eine feste Ansprechperson, vom ersten Anruf bis zum letzten Update.',
      about2: 'Beratung auf Deutsch oder Englisch, vor Ort oder per Fernwartung.',
      cTitle: 'Was kann ich für dich tun?', mail: 'E-Mail', phone: 'Telefon', where: 'Standort', reply: 'Antwort',
      fTopic: 'Worum geht’s?', tIt: 'IT-Support', tWeb: 'Website', tSocial: 'Social Media', tOther: 'Etwas anderes',
      fName: 'Name', fMail: 'E-Mail', fMsg: 'Nachricht', subject: 'Anfrage',
      errEmpty: 'Bitte Name, E-Mail und Nachricht ausfüllen.', errMail: 'Diese E-Mail-Adresse sieht unvollständig aus.',
      okMailto: 'Dein Mailprogramm öffnet sich mit der fertigen Anfrage. Nur noch senden.',
      okSent: 'Danke! Deine Anfrage ist angekommen. Ich melde mich meist innert 24 Stunden.',
      errSend: 'Senden hat nicht geklappt. Schreib mir bitte direkt an info@endr-it.ch.',
      sending: 'Wird gesendet …',
      capTitle: 'Kurz bestätigen, dass du kein Roboter bist', capSub: 'Ein Klick noch, dann ist deine Anfrage unterwegs.', capLoading: 'Wird geladen …',
      capCancel: 'Nicht gesendet. Du kannst es jederzeit nochmals versuchen.',
      autoresponse: 'Hallo{n}, vielen Dank für deine Anfrage! Ich habe deine Nachricht erhalten und melde mich so schnell wie möglich, im Normalfall innerhalb von 24 Stunden. Freundliche Grüsse, Endrit Sermaxhaj, endrIT Solutions',
      bandTitle: 'Plattformen und Werkzeuge, mit denen ich arbeite',
      legal: 'Datenschutz & Impressum', review: 'Bewertung schreiben',
      pfTitle: 'Projekte', pfLead: 'Eine Auswahl an Websites, IT-Einrichtungen und Social-Media-Auftritten.',
      fAll: 'Alle', pfEmpty: 'In dieser Kategorie ist noch nichts online. Schau bald wieder vorbei.',
      pfCta: 'Dein Projekt als nächstes?', close: 'Schliessen', visit: 'Projekt ansehen',
      example: 'Beispiel', client: 'Kunde', year: 'Jahr', service: 'Leistung', open: 'Details',
      cat: { web: 'Website', it: 'IT-Support', social: 'Social Media' }
    },
    en: {
      skipLink: 'Skip to content', skip: 'Skip', menu: 'Menu',
      nav1: 'Services', nav2: 'Projects', nav3: 'About', nav4: 'Contact',
      h1a: 'Tech that', h1b: 'just works.',
      heroSub: 'IT support, websites and social media for people and small businesses in Buchs AG and around. On site or remote.',
      cta: 'Send a request', ctaProjects: 'See projects',
      replyV: 'Usually replies within 24 hours', clock: 'Buchs AG, {t}',
      servicesTitle: 'Three areas. One person to call.',
      s1t: 'IT support', s2t: 'Web design', s3t: 'Social media',
      s1p: 'The computer quits, the Wi-Fi acts up, the printer refuses. I come by or connect remotely.',
      s1a: 'Troubleshooting and support', s1b: 'Network and Wi-Fi', s1c: 'Device and software setup', s1d: 'Maintenance and updates',
      s2p: 'A new website, or your old one brought up to date. Fast, clean on every screen and built so Google finds it.',
      s2a: 'Responsive on phone, tablet, desktop', s2b: 'Redesign of existing sites', s2c: 'SEO basics', s2d: 'One year of maintenance included',
      s3p: 'For businesses that do great work but have no time for Instagram and TikTok.',
      s3a: 'Set up and improve profiles', s3b: 'Plan and publish posts', s3c: 'Ongoing management',
      ask: 'Ask about this',
      workTitle: 'Selected projects', workAll: 'All projects',
      stepsTitle: 'How it works.',
      st1: 'Get in touch', st1p: 'By form, email or phone. Briefly describe what isn’t working or what you have in mind.',
      st2: 'We sort it out', st2p: 'I look at the situation and tell you honestly what it needs and what it doesn’t.',
      st3: 'It works', st3p: 'I fix it on site or remotely and explain what I did.',
      role: 'IT specialist in Buchs AG',
      about1: 'I work best where technology and design meet. You get one fixed contact, from the first call to the last update.',
      about2: 'Advice in German or English, on site or remotely.',
      cTitle: 'What can I do for you?', mail: 'Email', phone: 'Phone', where: 'Location', reply: 'Reply',
      fTopic: 'What’s it about?', tIt: 'IT support', tWeb: 'Website', tSocial: 'Social media', tOther: 'Something else',
      fName: 'Name', fMail: 'Email', fMsg: 'Message', subject: 'Request',
      errEmpty: 'Please fill in name, email and message.', errMail: 'That email address looks incomplete.',
      okMailto: 'Your mail app opens with the request ready. Just hit send.',
      okSent: 'Thanks! Your request arrived. I usually reply within 24 hours.',
      errSend: 'Sending failed. Please write to info@endr-it.ch directly.',
      sending: 'Sending …',
      capTitle: 'Quickly confirm you\u2019re not a robot', capSub: 'One more click and your request is on its way.', capLoading: 'Loading …',
      capCancel: 'Not sent. You can try again any time.',
      autoresponse: 'Hi{n}, thank you for your enquiry! I have received your message and will get back to you as soon as possible, normally within 24 hours. Kind regards, Endrit Sermaxhaj, endrIT Solutions',
      bandTitle: 'Platforms and tools I work with',
      legal: 'Privacy & legal notice', review: 'Write a review',
      pfTitle: 'Projects', pfLead: 'A selection of websites, IT setups and social media work.',
      fAll: 'All', pfEmpty: 'Nothing online in this category yet. Check back soon.',
      pfCta: 'Your project next?', close: 'Close', visit: 'View project',
      example: 'Example', client: 'Client', year: 'Year', service: 'Service', open: 'Details',
      cat: { web: 'Website', it: 'IT support', social: 'Social media' }
    }
  };

  const subs = [];
  let lang = 'de';
  try { lang = localStorage.getItem('endrit-lang') || 'de'; } catch (e) {}
  if (!T[lang]) lang = 'de';

  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = T[l][el.dataset.i18n];
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    subs.forEach(fn => fn(l));
  }
  function set(l) { try { localStorage.setItem('endrit-lang', l); } catch (e) {} apply(l); }

  return {
    t: k => T[lang][k],
    get lang() { return lang; },
    apply, set,
    onChange: fn => subs.push(fn)
  };
})();
