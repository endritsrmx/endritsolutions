/* ==========================================================================
   PROJEKTE
   Neues Projekt = neuen Block { ... } oben in die Liste kopieren.
   Bilder nach assets/projekte/ legen (am besten 1600 × 1200 px, .webp oder .jpg).

   category:  "web" | "it" | "social"
   featured:  true  = wird im Raster gross dargestellt und auf der Startseite gezeigt
   en:        optional, englische Texte (sonst wird Deutsch angezeigt)
   example:   true  = Konzeptprojekt mit fiktiver Marke (zeigt das Etikett „Konzept“)
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
    id: 'mirabelle',
    example: true,
    title: 'Mirabelle – Website für ein Café',
    client: 'Mirabelle Kaffee & Kuchen (fiktive Marke)',
    year: 2026,
    category: 'web',
    featured: true,
    cover: 'assets/projekte/mirabelle-1.webp',
    images: ['assets/projekte/mirabelle-1.webp', 'assets/projekte/mirabelle-2.webp', 'assets/projekte/mirabelle-3.webp'],
    summary: 'Warme Website mit Tagesvitrine, Öffnungszeiten und Online-Reservation.',
    text: 'Konzept für ein Café in der Altstadt: Die Startseite zeigt sofort, was heute in der Vitrine steht und wann offen ist. Reservieren geht in drei Klicks, auf dem Handy genauso wie am Computer.\n\nMarke, Farben und Illustrationen sind eigens für dieses Konzept entstanden.',
    tags: ['Webdesign', 'Branding', 'Reservation'],
    en: {
      title: 'Mirabelle – website for a café',
      summary: 'A warm website with a daily display case, opening hours and online booking.',
      text: 'Concept for an old-town café: the home page shows right away what is in the display case today and when it is open. Booking a table takes three clicks, on a phone or a computer.\n\nBrand, colours and illustrations were created for this concept.'
    }
  },
  {
    id: 'salon-kante',
    example: true,
    title: 'Salon Kante – Social-Media-Auftritt',
    client: 'Salon Kante (fiktive Marke)',
    year: 2026,
    category: 'social',
    featured: true,
    cover: 'assets/projekte/kante-1.webp',
    images: ['assets/projekte/kante-1.webp', 'assets/projekte/kante-2.webp'],
    summary: 'Einheitliches Profil, gestaltete Beiträge und ein Content-Plan für den ganzen Monat.',
    text: 'Konzept für einen Coiffeur: klare Bildsprache mit wenigen Farben, wiederkehrende Formate (Vorher/Nachher, Preise, Pflege-Tipps) und ein Monatsplan, damit jede Woche etwas erscheint. Termine lassen sich direkt über das Profil buchen.',
    tags: ['Instagram', 'Content-Plan', 'Gestaltung'],
    en: {
      title: 'Salon Kante – social media presence',
      summary: 'A consistent profile, designed posts and a content plan for the whole month.',
      text: 'Concept for a hair salon: a clear visual language with few colours, recurring formats (before/after, prices, care tips) and a monthly plan so something goes out every week. Appointments can be booked straight from the profile.'
    }
  },
  {
    id: 'fasertal',
    example: true,
    title: 'Fasertal – Redesign für eine Schreinerei',
    client: 'Schreinerei Fasertal (fiktive Marke)',
    year: 2025,
    category: 'web',
    cover: 'assets/projekte/fasertal-1.webp',
    images: ['assets/projekte/fasertal-1.webp', 'assets/projekte/fasertal-2.webp'],
    summary: 'Aus einer Homepage von 2008 wird eine schnelle, moderne Website.',
    text: 'Konzept: Die alte Seite war unübersichtlich und auf dem Handy kaum lesbar. Die neue Seite sagt in einem Satz, was die Schreinerei macht, und führt direkt zur Offerte. Weniger Text, klare Bereiche, schnell geladen.',
    tags: ['Redesign', 'Webdesign', 'Mobile'],
    en: {
      title: 'Fasertal – redesign for a joinery',
      summary: 'A 2008 homepage turned into a fast, modern website.',
      text: 'Concept: the old site was cluttered and barely readable on a phone. The new one says in one sentence what the joinery does and leads straight to a quote request. Less text, clear sections, fast to load.'
    }
  },
  {
    id: 'linea',
    example: true,
    title: 'Netzwerk und WLAN für ein Architekturbüro',
    client: 'Architekturbüro Linea (fiktive Marke)',
    year: 2025,
    category: 'it',
    cover: 'assets/projekte/linea-1.webp',
    images: ['assets/projekte/linea-1.webp'],
    summary: 'Drei Access Points, volle Abdeckung, Gästenetz und Drucker sauber getrennt.',
    text: 'Konzept: WLAN-Löcher im Atelier und ein Gästenetz, das im gleichen Netz wie der Server hing. Lösung mit drei Access Points, getrennten Netzen für Büro, Gäste und Geräte und einer Übersicht, die jederzeit zeigt, ob alles läuft.',
    tags: ['Netzwerk', 'WLAN', 'Sicherheit'],
    en: {
      title: 'Network and Wi-Fi for an architecture office',
      summary: 'Three access points, full coverage, guest network and printers properly separated.',
      text: 'Concept: Wi-Fi dead spots in the studio and a guest network sharing the server network. Solved with three access points, separate networks for office, guests and devices, and an overview that shows at any time whether everything is running.'
    }
  },
  {
    id: 'nordlicht',
    example: true,
    title: 'Arbeitsplätze und Backup für ein Treuhandbüro',
    client: 'Treuhand Nordlicht (fiktive Marke)',
    year: 2025,
    category: 'it',
    cover: 'assets/projekte/nordlicht-1.webp',
    images: ['assets/projekte/nordlicht-1.webp'],
    summary: 'Vier Geräte eingerichtet, verschlüsselt und jede Nacht automatisch gesichert.',
    text: 'Konzept: Neue Arbeitsplätze, alle auf dem gleichen Stand, mit automatischen Updates und nächtlichem Backup aufs NAS und zusätzlich in eine Schweizer Cloud. Eine Test-Wiederherstellung zeigt, dass die Sicherung im Ernstfall auch funktioniert.',
    tags: ['Einrichtung', 'Backup', 'Updates'],
    en: {
      title: 'Workstations and backup for an accounting firm',
      summary: 'Four devices set up, encrypted and backed up automatically every night.',
      text: 'Concept: new workstations, all on the same level, with automatic updates and nightly backups to a NAS plus a Swiss cloud. A test restore proves the backup actually works when it counts.'
    }
  }
];
