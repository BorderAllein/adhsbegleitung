/* ADHS-Orientierungstest. Läuft nur im Browser, nichts wird gespeichert oder übertragen. */
(function () {
  var root = document.getElementById('adhstest');
  if (!root) return;
  var A = [
    'Ich mache bei Aufgaben Flüchtigkeitsfehler, weil ich Details übersehe.',
    'Es fällt mir schwer, bei der Arbeit oder in Gesprächen konzentriert zu bleiben.',
    'Ich wirke abwesend, wenn mich jemand direkt anspricht.',
    'Ich bringe Aufgaben nicht zu Ende, weil ich unterwegs die Lust verliere oder abgelenkt werde.',
    'Es fällt mir schwer, Dinge zu organisieren, Abläufe zu planen und Termine einzuhalten.',
    'Ich schiebe Aufgaben auf, die viel Konzentration erfordern, etwa Formulare, Berichte oder Anträge.',
    'Ich verlege oft Dinge, die ich täglich brauche, zum Beispiel Schlüssel, Handy oder Unterlagen.',
    'Äußere Reize oder meine eigenen Gedanken lenken mich leicht ab.',
    'Ich vergesse Alltägliches, etwa Termine, Rückrufe oder Rechnungen.'
  ];
  var B = [
    'Ich zappele, wippe mit den Füßen oder fummle mit den Händen.',
    'Ich stehe auf, wenn man eigentlich sitzen bleiben sollte, zum Beispiel in Besprechungen.',
    'Ich fühle mich innerlich unruhig oder getrieben.',
    'Ich kann meine Freizeit schwer ruhig verbringen.',
    'Ich bin ständig in Bewegung, als würde mich ein Motor antreiben.',
    'Ich rede viel, oft mehr als andere.',
    'Ich platze mit Antworten heraus oder beende die Sätze anderer.',
    'Es fällt mir schwer zu warten, bis ich an der Reihe bin.',
    'Ich unterbreche andere oder mische mich in Gespräche ein.'
  ];
  var C = [
    'Schon als Kind (vor dem 12. Lebensjahr) war ich unaufmerksamer, unruhiger oder impulsiver als andere.',
    'Eltern, Lehrkräfte oder Zeugnisse haben das zurückgemeldet, zum Beispiel „könnte mehr, wenn er oder sie wollte“.',
    'Es gibt Menschen in meiner Familie, bei denen ADHS festgestellt wurde oder vermutet wird.'
  ];
  var D = [
    'Beruf, Ausbildung oder Studium',
    'Partnerschaft, Familie und Freundschaften',
    'Alltag, Haushalt und Finanzen',
    'Selbstwert und Wohlbefinden'
  ];
  var O = [['0', 'Nie oder selten'], ['1', 'Manchmal'], ['2', 'Oft'], ['3', 'Sehr oft']];
  var Y = [['2', 'Ja'], ['1', 'Teils'], ['0', 'Nein']];
  var steps = [
    { id: 'a', h: 'Teil 1 von 4: Aufmerksamkeit und Organisation', p: 'Wie oft hast Du die folgenden Erfahrungen in den letzten sechs Monaten gemacht?', q: A, o: O },
    { id: 'b', h: 'Teil 2 von 4: Unruhe und Impulsivität', p: 'Wie oft trifft das in den letzten sechs Monaten auf Dich zu?', q: B, o: O },
    { id: 'c', h: 'Teil 3 von 4: Kindheit', p: 'Ein Blick zurück. ADHS beginnt in der Kindheit, auch wenn es oft erst spät erkannt wird.', q: C, o: Y },
    { id: 'd', h: 'Teil 4 von 4: Auswirkungen im Alltag', p: 'Beeinträchtigen diese Erfahrungen Dich in folgenden Bereichen?', q: D, o: Y }
  ];
  var cur = 0, ans = {};
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function renderStep() {
    var s = steps[cur];
    var html = '<div class="t-prog"><span style="width:' + Math.round((cur / 4) * 100) + '%"></span></div>';
    html += '<h2 class="t-h">' + s.h + '</h2><p class="t-p">' + s.p + '</p><div class="t-qs">';
    s.q.forEach(function (q, i) {
      var name = s.id + i;
      html += '<fieldset class="t-q"><legend><span>' + (i + 1) + '</span>' + esc(q) + '</legend><div class="t-opts">';
      s.o.forEach(function (o) {
        var id = name + '_' + o[0];
        html += '<label for="' + id + '"><input type="radio" id="' + id + '" name="' + name + '" value="' + o[0] + '"' + (ans[name] === o[0] ? ' checked' : '') + '><span>' + o[1] + '</span></label>';
      });
      html += '</div></fieldset>';
    });
    html += '</div><p class="t-err" id="t-err" role="alert" hidden>Bitte beantworte alle Fragen, damit die Einschätzung stimmt.</p>';
    html += '<div class="t-nav">' + (cur > 0 ? '<button type="button" class="btn btn--o" id="t-back">Zurück</button>' : '<span></span>') + '<button type="button" class="btn" id="t-next">' + (cur === 3 ? 'Ergebnis anzeigen' : 'Weiter') + '</button></div>';
    root.innerHTML = html;
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    root.querySelectorAll('input[type=radio]').forEach(function (r) { r.addEventListener('change', function () { ans[r.name] = r.value; }); });
    document.getElementById('t-next').onclick = function () {
      var ok = s.q.every(function (q, i) { return ans[s.id + i] !== undefined; });
      if (!ok) { document.getElementById('t-err').hidden = false; return; }
      if (cur < 3) { cur++; renderStep(); } else { result(); }
    };
    var b = document.getElementById('t-back'); if (b) b.onclick = function () { cur--; renderStep(); };
  }
  function count(id, n, min) { var c = 0; for (var i = 0; i < n; i++) if (+ans[id + i] >= min) c++; return c; }
  function result() {
    var a = count('a', 9, 2), b = count('b', 9, 2);
    var cs = 0, ds = 0, i; for (i = 0; i < 3; i++) cs += +ans['c' + i]; for (i = 0; i < 4; i++) ds += +ans['d' + i];
    var dY = 0; for (i = 0; i < 4; i++) if (+ans['d' + i] >= 1) dY++;
    var mx = Math.max(a, b), lvl, head, txt;
    if (mx >= 5) { lvl = 'hoch'; head = 'Deutliche Hinweise'; txt = 'Du hast in mindestens einem Bereich fünf oder mehr Aussagen mit „oft“ oder „sehr oft“ beantwortet. Das ist die Größenordnung, ab der Fachleute bei Erwachsenen genauer hinschauen. Ein Gespräch mit einer ADHS-erfahrenen Fachperson ist sinnvoll, um das abzuklären.'; }
    else if (mx >= 3) { lvl = 'mittel'; head = 'Einzelne Hinweise'; txt = 'Einige Aussagen treffen häufig auf Dich zu, die Zahl liegt aber unter der Schwelle von fünf. Das muss nichts bedeuten. Wenn Du darunter leidest, kann ein Gespräch mit einer Fachperson Klarheit bringen.'; }
    else { lvl = 'gering'; head = 'Wenige Hinweise'; txt = 'Nur wenige Aussagen treffen häufig auf Dich zu. Das spricht nicht für ADHS, schließt es aber nicht aus. Wenn Du trotzdem Leidensdruck hast, lohnt sich ein Gespräch mit einer Fachperson.'; }
    var extra = '';
    if (lvl !== 'gering') {
      extra += cs >= 4 ? '<li>Auch Deine Antworten zur Kindheit passen zum Bild, denn ADHS beginnt in der Kindheit.</li>' : '<li>Deine Antworten zur Kindheit sind zurückhaltend. Gerade bei spät erkannter ADHS helfen Zeugnisse oder Gespräche mit Angehörigen, sich zu erinnern.</li>';
      extra += dY >= 2 ? '<li>Du erlebst Beeinträchtigungen in mehreren Lebensbereichen. Für eine Diagnose ist das wichtig.</li>' : '<li>Die Auswirkungen auf Deinen Alltag scheinen begrenzt. Für eine Diagnose müssen die Beschwerden den Alltag spürbar beeinträchtigen.</li>';
    }
    var summary = 'Selbsteinschätzung (Orientierung, keine Diagnose): Unaufmerksamkeit ' + a + ' von 9, Unruhe und Impulsivität ' + b + ' von 9 Aussagen mit „oft“ oder „sehr oft“. Kindheit ' + cs + ' von 6 Punkten. Beeinträchtigung in ' + dY + ' von 4 Lebensbereichen.';
    var html = '<div class="t-res t-res--' + lvl + '"><span class="eyebrow">Deine Orientierung</span><h2>' + head + '</h2><p>' + txt + '</p>';
    html += '<div class="t-score"><div><b>' + a + '/9</b><span>Aufmerksamkeit und Organisation</span></div><div><b>' + b + '/9</b><span>Unruhe und Impulsivität</span></div><div><b>' + cs + '/6</b><span>Kindheit</span></div><div><b>' + dY + '/4</b><span>Lebensbereiche betroffen</span></div></div>';
    if (extra) html += '<ul>' + extra + '</ul>';
    html += '<div class="box box--warn"><b>Wichtig:</b> Das ist kein Diagnoseverfahren. Eine Diagnose stellen nur Fachleute nach ausführlichem Gespräch, Fragebögen und dem Ausschluss anderer Ursachen.</div>';
    html += '<h3>So geht es weiter</h3><ul class="t-next"><li><a href="/artikel/adhs-diagnose-erwachsene/">Wie die Diagnose abläuft</a></li><li><a href="/artikel/adhs-und-krankenkasse/">Wer ADHS abklärt und was die Kasse zahlt</a></li><li><a href="/artikel/adhs-bei-frauen/">ADHS bei Frauen</a> und <a href="/artikel/adhs-bei-erwachsenen/">ADHS bei Erwachsenen</a></li></ul>';
    html += '<p><button type="button" class="btn" id="t-copy">Ergebnis kopieren</button> <a class="btn btn--o" href="https://cogether.de/coach-angie/#termin-buchen" rel="noopener">Kostenloses Erstgespräch mit Angie</a> <button type="button" class="btn btn--o" id="t-redo">Neu starten</button></p><p class="t-note" id="t-ok" hidden>Kopiert. Du kannst den Text zum Arzt- oder Therapiegespräch mitnehmen.</p></div>';
    root.innerHTML = html;
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('t-redo').onclick = function () { ans = {}; cur = 0; renderStep(); };
    document.getElementById('t-copy').onclick = function () {
      var done = function () { document.getElementById('t-ok').hidden = false; };
      if (navigator.clipboard) navigator.clipboard.writeText(summary).then(done, done); else done();
    };
  }
  renderStep();
})();
