# endrIT Solutions – Website

Den ganzen Ordner auf den Webspace hochladen. Fertig.
Kein Build-Schritt, alles liegt lokal: Schriften, GSAP, Lenis. Es wird nichts an Google oder andere Server übertragen.

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite (One-Page) |
| `projekte.html` | Portfolio mit Raster, Filter und Detailansicht |
| `datenschutz.html` | Datenschutz & Impressum |
| `CNAME` | Domain endr-it.ch für GitHub Pages (nicht löschen) |
| `js/projects.js` | **Deine Projekte** (hier neue eintragen) |
| `js/i18n.js` | Alle Texte auf Deutsch und Englisch |
| `css/style.css` | Design, Farben ganz oben unter „Tokens“ |
| `assets/logo.svg` | Dein Logo als Vektor (für Briefpapier, Social Media usw.) |
| `assets/logo-hell.svg` | Logo für dunkle Hintergründe |

## Formular

Anfragen gehen wie bisher über FormSubmit an info@endr-it.ch. Beim Senden öffnet sich ein Fenster mit dem
Captcha von FormSubmit; danach erhält der Kunde automatisch eine Eingangsbestätigung.
`gesendet.html` meldet der Seite, dass die Anfrage angekommen ist (nicht löschen).

## Noch zu tun

- **Beispielprojekte** in `js/projects.js` durch echte ersetzen (siehe unten).

## Neues Projekt eintragen

In `js/projects.js` einen Block kopieren und anpassen:

```js
{
  id: 'baeckerei-muster',            // kurz, ohne Leerzeichen (wird auch für den Link verwendet)
  title: 'Website Bäckerei Muster',
  client: 'Bäckerei Muster',
  year: 2026,
  category: 'web',                   // 'web' | 'it' | 'social'
  featured: true,                    // gross im Raster + auf der Startseite
  cover: 'assets/projekte/baeckerei.webp',
  images: ['assets/projekte/baeckerei.webp', 'assets/projekte/baeckerei-2.webp'],
  summary: 'Ein Satz für die Karte.',
  text: 'Zwei, drei Sätze für die Detailansicht.\n\nNeuer Absatz mit Leerzeile.',
  tags: ['Webdesign', 'SEO'],
  link: 'https://www.baeckerei-muster.ch',
  en: { title: 'Website for Bakery Muster', summary: '…', text: '…' }   // optional
},
```

Bilder am besten 1600 × 1200 px als `.webp` oder `.jpg` nach `assets/projekte/`.
Das Raster ordnet sich automatisch an (gross/mittel, dann drei nebeneinander, dann gespiegelt).
Jedes Projekt hat einen eigenen Link: `projekte.html#id`.

## Tech-Band

Die Liste steht in `index.html` unter „TECH-BAND“. Einträge sind als Schrift gesetzt.
Wenn du echte Logos verwenden willst: SVG nach `assets/logos/` legen und den Text ersetzen,
z. B. `<li><img src="assets/logos/microsoft.svg" alt="Microsoft"></li>`.
Achtung: Viele Firmen erlauben ihr Logo nur mit Bewilligung oder als Partner. Vorher die Markenrichtlinien prüfen.

## Was wo animiert

- **Intro** (einmal pro Besuch, überspringbar mit Klick oder Esc): Die Pixel von „rit“ fliegen ein,
  „End“ wird Zeile für Zeile gedruckt, Cyan-Pixel blinken auf. Danach fliegt das Logo in den Header
  und der Bildschirm löst sich in Pixel auf.
- **Hero**: Pixelfeld, das der Maus folgt (auf dem Handy dem Finger).
- **Leistungen und Ablauf**: Pixel-Icons und Pixel-Ziffern setzen sich beim Scrollen zusammen.
- **Projekte**: Filter mit fliessender Neuanordnung, Detailansicht als Dialog.
- **Tech-Band**: läuft endlos von rechts nach links, hält bei Mausberührung an.
- Bei „Bewegung reduzieren“ im Betriebssystem fallen alle Bewegungen weg.
