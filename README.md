# Gebäudetechnik Tissen — Website-Entwurf

Ein schlanker, mobil optimierter Onepager für Heizung, Sanitär, Bäder, Klima und Solarthermie in Bad Oeynhausen. Designvorschau, kein bereits freigegebener Unternehmens-Relaunch.

## Anschauen und bearbeiten

`index.html` direkt öffnen oder in diesem Ordner `python3 -m http.server 8765` starten. Kein Paketmanager, Build-Prozess, CMS oder kostenpflichtiger Website-Dienst erforderlich. Statisches HTML, CSS und wenige KB JavaScript. Läuft auch unter einem GitHub-Pages-Unterpfad.

- `index.html`: Texte, Kontaktdaten, strukturierte Unternehmensdaten
- `styles.css`: Gestaltung und responsive Layouts
- `script.js`: mobile Navigation und WhatsApp-Themenwahl
- `assets/`: lokal ausgelieferte Bilder und Favicon
- `robots.txt`: Crawling erlaubt, damit das HTML-noindex gelesen werden kann

Telefon: +49 170 2389177. WhatsApp: dieselbe Nummer, wie im bestehenden Website-Plugin hinterlegt. Nachrichten werden erst in WhatsApp durch den Besucher selbst abgeschickt. Der Link öffnet den externen Dienst. Kein WhatsApp-SDK, Tracking, Remote-Font, Karten-Embed oder Cookie-Speicher im Entwurf. Telefon, E-Mail und der allgemeine WhatsApp-Link funktionieren ohne JavaScript; die Themenwahl ist eine progressive Ergänzung.

## Veröffentlichung

GitHub Pages: Branch `main`, Ordner `/`. `.nojekyll` schaltet Jekyll-Verarbeitung aus. Quellcode und Assets sind öffentlich; keine Geheimnisse oder Kundendaten im Repository.

Die Vorschau hat absichtlich `noindex,follow`; canonical zeigt die bestehende Unternehmensdomain. Das ist eine Vorschau-Schutzmaßnahme, kein Zugriffsschutz. Für den echten Relaunch auf der Unternehmensdomain: noindex entfernen, Canonical und Schema-URLs prüfen, produktive Sitemap mit tatsächlich vorhandenen Leistungsseiten erstellen und in Search Console einreichen. Nicht lediglich diesen Onepager über alle bestehenden URLs kopieren.

## Vor produktivem Einsatz

1. Geschäftsdaten, Erreichbarkeit und konkretes Einsatzgebiet mit dem Betrieb bestätigen.
2. Original-Logo und bestehende Fotos: Rechte für neue Website und öffentliches Repository bestätigen. Dieses Repository erteilt keine Lizenz an fremden Marken oder Stockfotos.
3. Originale Projektfotos und Teamfoto ergänzen; das Titelmotiv ist ein gekennzeichnetes KI-Symbolbild und kein reales Tissen-Projekt.
4. Verlinkte Impressums- und Datenschutzseiten durch zur finalen Website und Hosting-Situation passende Rechtstexte ersetzen. Die bisherigen Texte werden bewusst nicht als geprüft oder aktuell übernommen.
5. WhatsApp auf einem echten Kundenhandy einschließlich tatsächlichem Empfang bei Tissen testen. In dieser Umsetzung wurden Links und Nachrichtenvorlagen geprüft, keine Testnachricht an den Betrieb gesendet.
6. Vorhandene Leistungsseiten erhalten/überarbeiten. Redirects nur bei tatsächlichen URL-Änderungen auf inhaltlich passende Ziele setzen.
7. PageSpeed-/Core-Web-Vitals-Felddaten und Search Console nach dem Launch prüfen. Keine Ranking- oder Conversion-Garantie.

## Bildherkunft

- `assets/logo.png`: https://gebaeudetechnik-tissen.de/wp-content/uploads/2024/06/Logo-500.png — unverändertes Firmenlogo.
- `assets/heizung.webp`: optimierte Fassung von https://gebaeudetechnik-tissen.de/wp-content/uploads/2024/10/Heizung.jpg — keine Behauptung, dass es sich um eine dokumentierte eigene Referenzinstallation handelt.
- `assets/bad.webp`: optimierte Fassung von https://gebaeudetechnik-tissen.de/wp-content/uploads/2024/10/Badsanierung.jpg — ebenfalls Beispielbild aus dem Bestand.
- `assets/hero.webp`: für diesen Entwurf mit OpenAI Imagegen erstelltes Symbolbild eines Hauses mit Wärmepumpe.
- Favicon und UI-Symbole: als SVG für diesen Entwurf erstellt, kein externes Icon-Paket.
- Schrift: lokale Systemschriften, keine Downloads und keine externen Schriftlizenzen erforderlich.
- Kundenstimme Andreas Redikop: kurzer Auszug aus der öffentlich sichtbaren bisherigen Startseite, abgerufen am 01.10.2026. Kein erfundener Bewertungsdurchschnitt und kein AggregateRating-Markup.

## Überarbeitung: Anfrageregler

Die zweite Version stellt die Anfrage direkt in den Einstieg. Sechs Tasten und ein tastaturbedienbarer Schieberegler steuern denselben Zustand. Display, Auswahl, Hinweis und WhatsApp-Vorlage bleiben synchron. Der optionale Ort wird ausschließlich im DOM gehalten, nicht in Cookies oder Web Storage gespeichert; erst der Klick auf den WhatsApp-Link überträgt ihn als Bestandteil der URL an WhatsApp. Der Besucher schickt die Nachricht anschließend dort selbst ab. Keine Uploads, keine automatische Diagnose und keine Nachrichtenzustellung durch die Website.

Inspiriert von der im Auftrag als Referenz genannten Tissen-Landingpage; die Umsetzung wurde im bestehenden Entwurf neu aufgebaut. Das Hausmotiv bleibt als nachgelagerter Bildband erhalten.

## Überarbeitung 3: regionale Sichtbarkeit und Vertrauen

H1, Leistungsüberschriften, regionale FAQ und sichtbarer Inhaber überarbeitet. JSON-LD verbindet Unternehmen (HVACBusiness/Plumber), Inhaber, Website, Webpage und sechs Services über IDs. Alle Angaben stammen aus sichtbaren Geschäftsdaten; keine erfundenen Ratings. Die Vorschau bleibt noindex. Türkise Lichtflächen und CSS-Perspektive ergänzen den Anfrageregler ohne neue Abhängigkeiten. Bewegungsreduktion schaltet Übergänge und Transformationen ab.

Recherche: sechs regionale Wettbewerber, öffentliche Websites und offizielle Suchmaschinen-Dokumentationen, Stand 01.10.2026. Der ausführliche Maßnahmenplan liegt im separaten Nutzer-Output `Wettbewerb-und-Sichtbarkeit.md`; er ist nicht Teil dieser öffentlichen Unternehmensvorschau.
