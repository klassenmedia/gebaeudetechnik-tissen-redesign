'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(returnFocus = false) {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Menü öffnen');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
const topics = {
  'Heizungsproblem': 'Hallo Tissen-Team, ich brauche Unterstützung bei einem Heizungsproblem. Mein Ort: … Kurze Beschreibung: …',
  'Neue Heizung / Wärmepumpe': 'Hallo Tissen-Team, ich interessiere mich für eine neue Heizung / Wärmepumpe. Mein Ort: … Baujahr des Hauses: … Bisherige Heizung: …',
  'Bad / Sanitär': 'Hallo Tissen-Team, ich möchte ein Bad- oder Sanitärprojekt besprechen. Mein Ort: … Mein Vorhaben: …',
  'Wartung': 'Hallo Tissen-Team, ich möchte eine Wartung anfragen. Mein Ort: … Hersteller und Modell der Anlage: …',
  'Klima / Lüftung': 'Hallo Tissen-Team, ich interessiere mich für Klima / Lüftung. Mein Ort: … Welche Räume: … Mein Anliegen: …',
  'Solarthermie': 'Hallo Tissen-Team, ich interessiere mich für Solarthermie. Mein Ort: … Bisherige Heizung: … Mein Vorhaben: …'
};
function selectTopic(topic) {
  if (!topics[topic]) return;
  document.querySelectorAll('[data-select]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.select === topic)));
  document.querySelector('#message-preview').textContent = topics[topic];
  document.querySelector('#whatsapp-link').href = 'https://wa.me/491702389177?text=' + encodeURIComponent(topics[topic]);
}
document.querySelectorAll('[data-select]').forEach(b => b.addEventListener('click', () => selectTopic(b.dataset.select)));
document.querySelectorAll('[data-topic]').forEach(a => a.addEventListener('click', () => selectTopic(a.dataset.topic)));
document.querySelector('#year').textContent = new Date().getFullYear();
