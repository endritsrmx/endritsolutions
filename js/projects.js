/* ==========================================================================
   PROJEKTE
   Neues Projekt = neuen Block { ... } oben in die Liste kopieren.
   Bilder nach assets/projekte/ legen (am besten 1600 × 1200 px, .webp oder .jpg).

   category:  "web" | "it" | "social"
   featured:  true  = wird im Raster gross dargestellt und auf der Startseite gezeigt
   en:        optional, englische Texte (sonst wird Deutsch angezeigt)
   example:   true  = Beispielprojekt (zeigt ein Etikett). Löschen, sobald echte Projekte drin sind.
   ========================================================================== */
window.PROJECTS = [
  {
    id: 'endr-it',
    title: 'endr-it.ch',
    client: 'endrIT Solutions',
    year: 2026,
    category: 'web',
    featured: true,
    cover: 'assets/projekte/endr-it.webp',
    images: ['assets/projekte/endr-it.webp', 'assets/projekte/endr-it-projekte.webp'],
    summary: 'Die eigene Website: One-Page mit Pixel-Intro, gebaut auf dem Raster des Logos.',
    text: 'Logo als Vektor nachgebaut, das Pixelraster als Gestaltungssystem für Icons, Übergänge und Animationen. Schnell geladen, ohne externe Schriften oder Tracking, zweisprachig.',
    tags: ['Webdesign', 'Animation', 'Branding'],
    link: 'https://www.endr-it.ch',
    en: {
      summary: 'My own website: a one-pager with a pixel intro, built on the grid of the logo.',
      text: 'Logo rebuilt as vectors, the pixel grid used as a design system for icons, transitions and motion. Fast, no external fonts or tracking, bilingual.'
    }
  },
  {
    id: 'beispiel-web',
    example: true,
    title: 'Website für ein Café',
    client: 'Beispielkunde',
    year: 2026,
    category: 'web',
    featured: true,
    cover: 'assets/projekte/beispiel-web.svg',
    images: ['assets/projekte/beispiel-web.svg'],
    summary: 'Neue Website mit Speisekarte, Öffnungszeiten und Reservation.',
    text: 'Hier stehen zwei, drei Sätze zum Projekt: Was war die Ausgangslage, was hast du gemacht, was hat es gebracht?',
    tags: ['Webdesign', 'SEO'],
    link: '',
    en: { title: 'Website for a café', summary: 'New website with menu, opening hours and reservations.' }
  },
  {
    id: 'beispiel-netzwerk',
    example: true,
    title: 'Netzwerk und WLAN für ein Büro',
    client: 'Beispielkunde',
    year: 2026,
    category: 'it',
    cover: 'assets/projekte/beispiel-netzwerk.svg',
    images: ['assets/projekte/beispiel-netzwerk.svg'],
    summary: 'Stabiles WLAN in allen Räumen, Gästenetz getrennt.',
    text: 'Hier stehen zwei, drei Sätze zum Projekt.',
    tags: ['Netzwerk', 'WLAN'],
    en: { title: 'Network and Wi-Fi for an office', summary: 'Reliable Wi-Fi in every room, separate guest network.' }
  },
  {
    id: 'beispiel-social',
    example: true,
    title: 'Instagram-Auftritt für einen Coiffeur',
    client: 'Beispielkunde',
    year: 2025,
    category: 'social',
    featured: true,
    cover: 'assets/projekte/beispiel-social.svg',
    images: ['assets/projekte/beispiel-social.svg'],
    summary: 'Profil neu aufgesetzt, Posts geplant und laufend betreut.',
    text: 'Hier stehen zwei, drei Sätze zum Projekt.',
    tags: ['Instagram', 'Content'],
    en: { title: 'Instagram presence for a hair salon', summary: 'Profile rebuilt, posts planned and managed.' }
  },
  {
    id: 'beispiel-it',
    example: true,
    title: 'Arbeitsplätze für ein Treuhandbüro',
    client: 'Beispielkunde',
    year: 2025,
    category: 'it',
    cover: 'assets/projekte/beispiel-it.svg',
    images: ['assets/projekte/beispiel-it.svg'],
    summary: 'Vier PCs eingerichtet, Backups automatisiert.',
    text: 'Hier stehen zwei, drei Sätze zum Projekt.',
    tags: ['Einrichtung', 'Backup'],
    en: { title: 'Workstations for an accounting firm', summary: 'Four PCs set up, backups automated.' }
  },
  {
    id: 'beispiel-redesign',
    example: true,
    title: 'Redesign für einen Handwerksbetrieb',
    client: 'Beispielkunde',
    year: 2025,
    category: 'web',
    cover: 'assets/projekte/beispiel-redesign.svg',
    images: ['assets/projekte/beispiel-redesign.svg'],
    summary: 'Alte Website modernisiert, Ladezeit stark verkürzt.',
    text: 'Hier stehen zwei, drei Sätze zum Projekt.',
    tags: ['Redesign', 'Performance'],
    en: { title: 'Redesign for a trades business', summary: 'Old website modernised, much faster to load.' }
  }
];
