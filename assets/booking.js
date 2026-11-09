/* Erstgespräch mit Angie direkt auf dieser Seite buchen (eingebetteter Kalender von cogether.de).
   Ohne JavaScript oder wenn der Kalender nicht lädt, führt der Link weiter zur Buchung bei CoGether. */
(function () {
  var BOOKING_URL = 'https://cogether.de/termin-embed/angie/';
  var FALLBACK = 'https://cogether.de/coach-angie/#termin-buchen';
  var modal = null;
  function utm() {
    var out = {};
    try {
      var q = new URLSearchParams(window.location.search);
      ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (k) { var v = q.get(k); if (v) out[k] = v.slice(0, 100); });
      if (!out.utm_source) { out.utm_source = 'adhsbegleitung.de'; out.utm_medium = 'website'; }
    } catch (e) {}
    return new URLSearchParams(out).toString();
  }
  function build() {
    modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = '<div class="booking-modal__overlay" data-close></div>' +
      '<div class="booking-modal__panel" role="dialog" aria-modal="true" aria-label="Erstgespräch mit Angie buchen">' +
      '<button type="button" class="booking-modal__close" data-close aria-label="Schließen">×</button>' +
      '<iframe class="booking-modal__iframe" title="Terminbuchung mit Angie"></iframe>' +
      '<p class="booking-modal__fb">Der Kalender lädt nicht? <a href="' + FALLBACK + '" rel="noopener">Termin bei CoGether buchen</a></p></div>';
    document.body.appendChild(modal);
    modal.addEventListener('click', function (e) { if (e.target.hasAttribute('data-close')) close(); });
  }
  function open() {
    if (!modal) build();
    var f = modal.querySelector('iframe');
    if (!f.src) f.src = BOOKING_URL + '?' + utm();
    modal.classList.add('open');
    document.body.classList.add('booking-modal-lock');
  }
  function close() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.classList.remove('booking-modal-lock');
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="' + FALLBACK + '"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    open();
  });
})();
