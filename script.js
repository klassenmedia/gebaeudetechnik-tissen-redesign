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
  'Heizungsproblem': {title: 'Heizung kalt?', label: 'HEIZUNG', hint: 'Ein Foto vom Display oder Typenschild hilft uns bei der ersten Einschätzung.', message: 'Hallo Tissen-Team, ich brauche Unterstützung bei einem Heizungsproblem.'},
  'Neue Heizung / Wärmepumpe': {title: 'Zeit für neue Wärme.', label: 'MODERNISIERUNG', hint: 'Wärmepumpe oder andere Heizlösung? Wir besprechen, was zu Ihrem Haus passt.', message: 'Hallo Tissen-Team, ich interessiere mich für eine neue Heizung / Wärmepumpe.'},
  'Bad / Sanitär': {title: 'Rund ums Wasser.', label: 'BAD & SANITÄR', hint: 'Eine tropfende Leitung oder ein neues Bad? Beschreiben Sie uns kurz Ihr Anliegen.', message: 'Hallo Tissen-Team, ich brauche Unterstützung im Bereich Bad / Sanitär.'},
  'Wartung': {title: 'Damit alles läuft.', label: 'WARTUNG', hint: 'Nennen Sie uns in WhatsApp den Hersteller und das Modell Ihrer Anlage.', message: 'Hallo Tissen-Team, ich möchte eine Wartung für meine Anlage anfragen.'},
  'Klima / Lüftung': {title: 'Gutes Klima zuhause.', label: 'KLIMA & LÜFTUNG', hint: 'Kühlen, heizen oder lüften? Erzählen Sie uns, um welche Räume es geht.', message: 'Hallo Tissen-Team, ich interessiere mich für Klima / Lüftung.'},
  'Solarthermie': {title: 'Wärme von der Sonne.', label: 'SOLARTHERMIE', hint: 'Wir besprechen, wie Sonnenwärme Ihre Heizung oder Warmwasserbereitung ergänzen kann.', message: 'Hallo Tissen-Team, ich interessiere mich für Solarthermie.'}
};
const keys = Object.keys(topics);
const range = document.querySelector('#request-range');
const locationInput = document.querySelector('#request-location');
let selectedTopic = keys[0];
function updateMessage() {
  const city = locationInput.value.trim();
  const parts = [topics[selectedTopic].message];
  if (city) parts.push('Mein Ort: ' + city);
  parts.push('Ein Foto der Anlage oder meines Vorhabens kann ich in WhatsApp ergänzen.');
  const message = parts.join('\n');
  document.querySelector('#message-preview').textContent = message;
  document.querySelector('#whatsapp-link').href = 'https://wa.me/491702389177?text=' + encodeURIComponent(message);
}
function selectTopic(topic) {
  if (!Object.hasOwn(topics, topic)) return;
  selectedTopic = topic;
  const index = keys.indexOf(topic);
  const number = String(index + 1).padStart(2, '0');
  document.querySelectorAll('[data-select]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.select === topic)));
  document.querySelector('#controller-title').textContent = topics[topic].title;
  document.querySelector('#display-status').textContent = number + ' / ' + topics[topic].label;
  document.querySelector('#topic-hint').textContent = topics[topic].hint;
  document.querySelector('#dial-number').textContent = number;
  document.querySelector('#range-counter').textContent = number + ' / 06';
  document.querySelector('.dial-marker').style.setProperty('--dial-angle', (-125 + index * 50) + 'deg');
  range.value = String(index);
  range.setAttribute('aria-valuetext', topic);
  updateMessage();
}
document.querySelectorAll('[data-select]').forEach(b => b.addEventListener('click', () => selectTopic(b.dataset.select)));
document.querySelectorAll('[data-topic]').forEach(a => a.addEventListener('click', () => selectTopic(a.dataset.topic)));
range.addEventListener('input', () => selectTopic(keys[Number(range.value)]));
locationInput.addEventListener('input', updateMessage);
locationInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') { e.preventDefault(); document.querySelector('#whatsapp-link').focus(); }
});
document.querySelector('#year').textContent = new Date().getFullYear();
selectTopic(selectedTopic);
