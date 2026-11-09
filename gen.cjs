const fs = require('fs');
const path = require('path');
const root = __dirname + '/';
const wr = (f, t) => { fs.mkdirSync(path.dirname(root + f), { recursive: true }); fs.writeFileSync(root + f, t); };
const B = 'https://adhsbegleitung.de';
const DATE = '2026-11-09';
const BOOK = 'https://cogether.de/coach-angie/#termin-buchen';
const esc = (s) => s.replace(/&(?!amp;)/g, '&amp;');

const NAV = [['/begleitung/', 'Begleitung'], ['/adhs-verstehen/', 'ADHS verstehen'], ['/alltag/', 'Alltag'], ['/beziehungen/', 'Angehörige'], ['/eltern/', 'Eltern'], ['/podcast/', 'Podcast'], ['/faq/', 'Fragen']];

function page({ path: p, title, desc, h1, lede, crumb, body, schema = [], noindex = false, hero = false }) {
  const url = B + (p === '/' ? '/' : p);
  const graph = [
    { '@type': 'Organization', '@id': 'https://cogether.de/#organization', name: 'CoGether', url: 'https://cogether.de/' },
    { '@type': 'WebSite', '@id': B + '/#website', url: B + '/', name: 'ADHS Begleitung mit Angie', inLanguage: 'de-DE' },
    { '@type': 'Person', '@id': B + '/#angie', name: 'Angie', jobTitle: 'Mentorin, Co- und Wegbegleiterin bei CoGether', description: 'Begleitet Menschen mit ADHS, Angehörige und Eltern. Langjährige Führungserfahrung, Schulung von Führungspersonal, zahlreiche Weiterbildungen, Podcast „Gedankenkotze“.', worksFor: { '@id': 'https://cogether.de/#organization' } },
    { '@type': 'WebPage', '@id': url + '#webpage', url, name: title, inLanguage: 'de-DE', dateModified: DATE, isPartOf: { '@id': B + '/#website' } },
    ...schema,
  ];
  if (p !== '/') graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Start', item: B + '/' }, { '@type': 'ListItem', position: 2, name: crumb || h1, item: url }] });
  const head = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ''}<meta property="og:locale" content="de_DE"><meta property="og:type" content="website"><meta property="og:site_name" content="ADHS Begleitung mit Angie">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${B}/assets/img/Coach-Angie.jpeg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0a0e14">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="canonical" href="${url}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/adhs.css?v=2">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
<script src="/assets/adhs.js?v=1" defer></script>
</head>
<body>
<a class="skip" href="#main">Zum Inhalt springen</a>
<header class="hd"><div class="wrap hd__in">
  <a class="brand" href="/"><span class="brand__mark">A</span><span><b>ADHS Begleitung</b><small>mit Angie</small></span></a>
  <button class="burger" id="burger" aria-label="Menü" aria-expanded="false" aria-controls="nav"><i></i><i></i><i></i></button>
  <nav class="nav" id="nav" aria-label="Hauptnavigation">
    ${NAV.map(([h, l]) => `<a href="${h}"${p === h ? ' aria-current="page"' : ''}>${l}</a>`).join('\n    ')}
    <button class="calm-toggle" id="calm" type="button" aria-pressed="false" title="Animationen und Bewegung ausschalten">Ruhemodus</button>
    <a class="btn" href="${BOOK}" style="padding:.85rem 1.2rem;font-size:.76rem">Erstgespräch</a>
  </nav>
</div></header>
<main id="main">
`;
  const ph = hero ? '' : `<section class="ph"><div class="wrap">
  <nav class="crumbs" aria-label="Brotkrumen"><a href="/">Start</a><span>/</span>${esc(crumb || h1)}</nav>
  <h1>${h1}</h1>
  ${lede ? `<p class="lede">${lede}</p>` : ''}
</div></section>
`;
  const foot = `</main>
<footer class="ft"><div class="wrap">
  <div class="ft__g">
    <div><a class="brand" href="/"><span class="brand__mark">A</span><span><b style="color:#fff">ADHS Begleitung</b><small>mit Angie</small></span></a><p style="margin-top:1rem;max-width:34ch">Begleitung für Menschen mit ADHS, für Angehörige und Eltern. Online, ehrlich, in Deinem Tempo.</p></div>
    <div><h4>Seiten</h4><a href="/begleitung/">Begleitung</a><a href="/ueber-angie/">Über Angie</a><a href="/adhs-verstehen/">ADHS verstehen</a><a href="/alltag/">Alltag</a></div>
    <div><h4>Für Dich</h4><a href="/beziehungen/">Partner und Angehörige</a><a href="/eltern/">Eltern</a><a href="/podcast/">Podcast Gedankenkotze</a><a href="/faq/">Fragen</a></div>
    <div><h4>Rechtliches</h4><a href="/kontakt/">Kontakt</a><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="https://cogether.de/">Teil von CoGether</a></div>
  </div>
  <p class="ft__sos"><b>Wichtig:</b> Begleitung und Coaching ersetzen keine Diagnostik und keine ärztliche oder psychotherapeutische Behandlung. Bei akuter Krise erreichst Du die Telefonseelsorge kostenlos unter <b>116 123</b>, im Notfall den Notruf <b>112</b>.</p>
  <div class="ft__b"><span>© <span id="y"></span> BA Entertainment · CoGether</span><span>Zuletzt aktualisiert: 09.11.2026</span></div>
</div></footer>
<script>document.getElementById('y').textContent=new Date().getFullYear();</script>
</body>
</html>
`;
  wr(p === '/' ? 'index.html' : p.slice(1) + 'index.html', head + ph + body + foot);
  return url;
}

const cta = (h = 'Lern Angie in einem kostenlosen Erstgespräch kennen.', t = 'Unverbindlich, online per Video, ohne Druck. Du erzählst, was Dich beschäftigt, und wir schauen, ob es passt.') => `<section class="sec sec--tight"><div class="wrap"><div class="band"><div><h2>${h}</h2><p>${t}</p></div><div class="row"><a class="btn" href="${BOOK}">Erstgespräch buchen</a></div></div></div></section>`;
const faqBlock = (arr) => `<div class="faq">${arr.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
const FAQ_HOME = [
  ['Ist ADHS-Begleitung eine Therapie?', 'Nein. Begleitung und Coaching sind keine Psychotherapie und keine ärztliche Behandlung. Angie stellt keine Diagnosen und behandelt keine Erkrankungen. Wenn Du therapeutische oder medizinische Unterstützung brauchst, benennt sie diese Grenze klar.'],
  ['Brauche ich eine ADHS-Diagnose?', 'Nein. Du kannst mit einer Diagnose, mit einem Verdacht oder ganz ohne kommen. Eine Diagnose stellen können nur dafür qualifizierte Fachleute, zum Beispiel Fachärztinnen und Fachärzte oder Psychotherapeutinnen und Psychotherapeuten.'],
  ['Wie läuft das Erstgespräch ab?', 'Du buchst online einen freien Termin. Im Gespräch per Video erzählst Du, was Dich beschäftigt. Ihr schaut gemeinsam, ob Angies Begleitung zu Dir passt. Es ist kostenlos und unverbindlich.'],
  ['Was kostet die Begleitung?', 'Das Erstgespräch ist kostenlos. Ein Einzeltermin mit Angie (60 Minuten, persönliches Handout, Learning Unit und eigener Bereich) kostet 149 €. Längere Begleitungen über 3 oder 6 Monate findest Du mit aktuellen Preisen bei CoGether.'],
  ['Ist das auch etwas für Angehörige und Eltern?', 'Ja, Du kannst als Partnerin, Partner, Angehöriger oder Elternteil ein Erstgespräch buchen. Es geht dann um Dich: um Dein Erleben, Deine Grenzen und Deine Kraft. Kinder und Jugendliche gehören in kinder- und jugendpsychiatrische beziehungsweise therapeutische Hände.'],
];
const FAQ_ALL = [
  ...FAQ_HOME,
  ['Muss ich mich im Gespräch erklären?', 'Nein. Angie sagt selbst: Du musst bei ihr nicht funktionieren, keine richtigen Antworten haben und nicht erst erklären, warum etwas für Dich so schwer ist. Ihr fangt dort an, wo Du gerade stehst.'],
  ['Läuft alles online?', 'Ja. Die Gespräche finden per Video statt, sodass Du von zu Hause teilnehmen kannst.'],
  ['Was ist der Unterschied zwischen Coaching und Therapie bei ADHS?', 'Therapie behandelt Erkrankungen und wird von dafür ausgebildeten Fachleuten geleistet. Coaching ist eine alltagsnahe Begleitung: Struktur, Selbstführung, Gefühle, Beziehungen. Es kann Behandlung sinnvoll ergänzen, aber nicht ersetzen.'],
  ['Wie kann ich ADHS abklären lassen?', 'Wende Dich an Fachleute, die sich mit ADHS bei Erwachsenen auskennen, etwa Fachärztinnen und Fachärzte für Psychiatrie, Neurologie oder Psychosomatik oder entsprechend erfahrene Psychotherapeutinnen und Psychotherapeuten. Ausführliche Gespräche, Fragebögen und eine körperliche Untersuchung gehören dazu.'],
  ['Gibt es eine Gruppe?', 'Ja. UNGEFILTERT ist Angies Gruppenbegleitung für Menschen, die sich selbst wieder besser verstehen und im Alltag weniger übergehen möchten. Mehr dazu findest Du bei CoGether.'],
];

/* ========== START ========== */
page({
  path: '/', hero: true,
  title: 'ADHS Begleitung mit Angie | Erwachsene, Angehörige, Eltern',
  desc: 'ADHS-Begleitung mit Angie: Alltag, Gefühle, Beziehungen. Für Erwachsene, Angehörige und Eltern. Online, ehrlich, ohne Diagnose-Etikett. Erstgespräch kostenlos.',
  schema: [{ '@type': 'FAQPage', mainEntity: FAQ_HOME.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }],
  body: `<section class="hero"><div class="wrap hero__grid">
  <div>
    <span class="tag">ADHS Begleitung · online</span>
    <h1>Dein Kopf ist nicht kaputt. Er braucht <em>eine andere Bedienungsanleitung.</em></h1>
    <p class="lede">Angie begleitet Menschen mit ADHS, ihre Partner und Angehörigen und Eltern. Aus eigenem Alltag mit AD(H)S, mit viel Erfahrung und ohne Schema F. Keine Diagnose, keine Therapie, kein „Du musst nur …“.</p>
    <div class="row"><a class="btn" href="${BOOK}">Kostenloses Erstgespräch</a><a class="btn btn--g" href="#laut">Was ist gerade am lautesten?</a></div>
    <div class="facts"><span><b>Online</b>per Video</span><span><b>1:1</b>persönlich</span><span><b>ab 149 €</b>Einzeltermin</span><span><b>0 €</b>Erstgespräch</span></div>
  </div>
  <div class="portrait">
    <span class="chip chip--1">Wo ist mein Handy?</span><span class="chip chip--2">Mail antworten</span><span class="chip chip--3">seit 3 Wochen offen</span><span class="chip chip--4">warum schon 17 Uhr?</span><span class="chip chip--5">ich wollte doch …</span>
    <div class="portrait__frame"><img src="/assets/img/Coach-Angie.jpeg" alt="Angie, Mentorin und Wegbegleiterin für ADHS-Begleitung" width="421" height="530" fetchpriority="high"><div class="portrait__cap"><b>Angie</b>Mentorin · Wegbegleiterin</div></div>
    <span class="chip chip--one">Jetzt: ein Schritt.</span>
  </div>
</div></section>

<section class="sec sec--tight"><div class="wrap">
  <div class="head"><span class="tag">Drei Eingänge</span><h2 class="h2">Wer bist Du gerade?</h2></div>
  <div class="grid g3">
    <a class="card" href="/begleitung/"><span class="num">01</span><h3>Ich habe ADHS oder vermute es</h3><p>Du willst Deinen Alltag, Deine Gefühle und Deinen Umgang mit Dir selbst besser verstehen, ohne dass eine Diagnose Dich definiert.</p><span class="more">Zur Begleitung →</span></a>
    <a class="card" href="/beziehungen/"><span class="num">02</span><h3>Jemand, den ich liebe, hat ADHS</h3><p>Du bist Partnerin, Partner oder Angehöriger und willst verstehen, was los ist, ohne Dich dabei selbst zu verlieren.</p><span class="more">Für Angehörige →</span></a>
    <a class="card" href="/eltern/"><span class="num">03</span><h3>Mein Kind hat ADHS</h3><p>Du trägst viel Verantwortung. Hier geht es um Dich als Elternteil: um Kraft, Grenzen und gute Orientierung.</p><span class="more">Für Eltern →</span></a>
  </div>
</div></section>

<section class="sec sec--alt" id="laut"><div class="wrap">
  <div class="head"><span class="tag">Kein Test. Kein Ergebnis.</span><h2 class="h2">Was ist gerade am lautesten?</h2><p class="lede">Such Dir den Moment aus, der Dir heute am nächsten ist. Du bekommst einen Gedanken dazu und einen kleinen Versuch für heute. Nichts davon wird gespeichert.</p></div>
  <div class="loud" id="loud">
    <div class="loud__chips" role="group" aria-label="Moment auswählen">
      <button type="button" data-k="zeit" aria-pressed="false">Zeit rennt oder steht</button>
      <button type="button" data-k="reize" aria-pressed="false">Alles ist zu laut</button>
      <button type="button" data-k="gefuehle" aria-pressed="false">Gefühle mit voller Wucht</button>
      <button type="button" data-k="starten" aria-pressed="false">Anfangen fällt schwer</button>
      <button type="button" data-k="chaos" aria-pressed="false">Chaos auf Tisch und im Kopf</button>
      <button type="button" data-k="beziehung" aria-pressed="false">Missverständnisse mit anderen</button>
    </div>
    <div class="loud__out" id="loud-out" aria-live="polite"></div>
  </div>
  <p class="note">Das ist keine Diagnose und kein Selbsttest. Wenn Du wissen willst, ob Du ADHS hast, hilft eine fachliche Abklärung.</p>
</div></section>

<section class="sec"><div class="wrap split">
  <div>
    <span class="tag">Dafür steht Angie</span>
    <p class="quote">Ich zeige Dir nicht meinen Weg. <em>Wir finden Deinen.</em></p>
  </div>
  <div class="prose">
    <p>Angie glaubt nicht daran, dass Menschen repariert werden müssen. Sie glaubt auch nicht, dass es für jeden dieselbe Lösung gibt. Manchmal braucht es keinen weiteren Menschen, der erklärt, was man falsch macht, sondern einen, der sagt: „Ich sehe Dich. Lass uns gemeinsam schauen, was gerade passiert.“</p>
    <ul class="list"><li><b>Verstehen statt bewerten.</b> Hinter Denken, Fühlen und Handeln steckt mehr als „Ich kriege es einfach nicht hin“.</li><li><b>Du musst nicht funktionieren.</b> Keine perfekten Erklärungen, keine richtigen Antworten.</li><li><b>Erfahrung statt Patentrezepte.</b> Angie teilt, was bei ihr geholfen hat, als Angebot und nicht als Anleitung.</li></ul>
    <p style="margin-top:1.4rem"><a class="btn btn--g" href="/ueber-angie/">Angie kennenlernen</a></p>
  </div>
</div></section>

<section class="sec sec--alt"><div class="wrap">
  <div class="head"><span class="tag">Themen</span><h2 class="h2">Wo ADHS im Alltag zuschlägt</h2></div>
  <div class="grid g4">
    <a class="card" href="/alltag/#zeitblindheit"><span class="num">ZEIT</span><h3>Zeitblindheit</h3><p>Warum Termine, Fristen und „gleich“ so schwer zu greifen sind.</p></a>
    <a class="card" href="/alltag/#reizueberflutung"><span class="num">REIZE</span><h3>Reizüberflutung</h3><p>Wenn Geräusche, Licht und Gespräche gleichzeitig reinkommen.</p></a>
    <a class="card" href="/alltag/#gefuehle"><span class="num">GEFÜHLE</span><h3>Intensive Gefühle</h3><p>Schnell, stark und manchmal schneller als das Einordnen.</p></a>
    <a class="card" href="/alltag/#starten"><span class="num">START</span><h3>Anfangen und Dranbleiben</h3><p>Warum Wissen allein selten reicht, und was hilft.</p></a>
  </div>
</div></section>

<section class="sec"><div class="wrap narrow">
  <div class="head"><span class="tag">Häufige Fragen</span><h2 class="h2">Kurz beantwortet</h2></div>
  ${faqBlock(FAQ_HOME)}
</div></section>

${cta()}
<section class="sec sec--tight"><div class="wrap narrow"><p class="note" style="text-align:center">Hinweis: Mentoring und Begleitung ersetzen keine medizinische oder psychotherapeutische Behandlung. Angie stellt keine Diagnosen und behandelt keine psychischen Erkrankungen.</p></div></section>
`,
});

/* ========== BEGLEITUNG ========== */
page({
  path: '/begleitung/', crumb: 'Begleitung',
  title: 'ADHS-Begleitung mit Angie: 1:1 online, ab 149 €',
  desc: 'ADHS-Begleitung 1:1 online mit Angie: 60 Minuten, persönliches Handout, Learning Unit und eigener Bereich. Erstgespräch kostenlos. Keine Diagnose, keine Therapie.',
  h1: 'Begleitung, in der Du nicht funktionieren musst.', lede: 'Angie begleitet Dich 1:1 online. Persönlich, ehrlich und ohne Schema F, mit Erfahrung aus eigenem Alltag mit AD(H)S.',
  schema: [{ '@type': 'Service', name: 'ADHS-Begleitung 1:1 mit Angie', provider: { '@id': B + '/#angie' }, areaServed: 'DE', serviceType: 'Mentoring und Begleitung (Coaching) für Menschen mit ADHS', offers: { '@type': 'Offer', price: '149', priceCurrency: 'EUR', description: 'Einzeltermin: 60 Minuten 1:1, persönliches Premium-Handout, Learning Unit, eigener Bereich bei CoGether' } }],
  body: `<section class="sec"><div class="wrap split">
  <div class="prose">
    <h2 style="margin-top:0">Wie die Begleitung aussieht</h2>
    <p>Du bringst, was Dich gerade beschäftigt: Gedankenchaos, Überforderung, Erschöpfung, Streit zu Hause, das Gefühl, „zu viel“ und trotzdem nie genug zu sein. Angie hört zu, fragt nach und sagt Dir auch, wenn ihr etwas auffällt. Sie teilt Wissen und eigene Erfahrungen, immer als Angebot.</p>
    <ul class="list"><li><b>Erst verstehen.</b> Bevor etwas verändert wird, geht es darum, zu verstehen, was los ist. Nicht nur das Problem, sondern Dich.</li><li><b>Erfahrungen und Perspektiven teilen.</b> Was Angie selbst ausprobiert und gelernt hat, darf Teil der Arbeit sein. Deine Erfahrung wird dadurch nicht überschrieben.</li><li><b>Herausfinden, was zu Dir passt.</b> Ihr probiert nicht, bis Du in eine Methode passt. Ihr schaut, was zu Deinem Leben passt.</li></ul>
    <h2>Themen, bei denen Angie besonders gut begleitet</h2>
    <ul><li>ADHS und Neurodivergenz: Dein Erleben besser verstehen, ohne dass eine Diagnose Dich definiert</li><li>Überforderung und Reizüberflutung</li><li>Gedankenchaos und innere Unruhe</li><li>Grenzen und Bedürfnisse früher wahrnehmen</li><li>Beziehungen, Nähe und wiederkehrende Konflikte</li><li>Selbstwert, Selbstakzeptanz und Vertrauen in Dich selbst</li></ul>
  </div>
  <div>
    <div class="card" style="margin-bottom:1.3rem"><span class="num">EINZELTERMIN</span><h3 style="font-size:2.4rem">149 €</h3><p>Alles aus einem Termin:</p><ul class="list"><li>60 Minuten 1:1 mit Angie, ohne festes Schema</li><li>Dein persönliches Premium-Handout zu Deiner Stunde</li><li>Eine persönliche Learning Unit zur Vertiefung</li><li>Dein eigener Bereich bei CoGether</li><li>Austausch zwischen den Terminen über Deinen Bereich</li></ul><p style="margin-top:1.4rem"><a class="btn" href="${BOOK}">Erstgespräch buchen</a></p></div>
    <div class="card"><span class="num">LÄNGER BEGLEITET</span><h3>3 oder 6 Monate</h3><p>Wenn Du länger mit Angie arbeiten möchtest, gibt es Begleitungen über 3 oder 6 Monate, auch in Raten. Die aktuellen Preise stehen bei CoGether.</p><p style="margin-top:1rem"><a class="btn btn--g" href="https://cogether.de/coach-angie/">Aktuelle Pakete ansehen</a></p></div>
  </div>
</div></section>

<section class="sec sec--alt"><div class="wrap">
  <div class="head"><span class="tag">So läuft es ab</span><h2 class="h2">Von der ersten Nachricht bis zum nächsten Schritt</h2></div>
  <div class="grid g3">
    <div class="card"><span class="num">01</span><h3>Kostenloses Erstgespräch</h3><p>Du wählst online einen freien Termin. Im Video-Gespräch erzählst Du, was Dich beschäftigt, und ihr schaut, ob es passt.</p></div>
    <div class="card"><span class="num">02</span><h3>Dein Fokus</h3><p>Ihr legt fest, wo Du beginnst: bei Struktur, Gefühlen, Beziehungen oder bei dem, was gerade am meisten drückt.</p></div>
    <div class="card"><span class="num">03</span><h3>Ausprobieren und anpassen</h3><p>Kleine Experimente im Alltag, Reflexion im Gespräch. Was nicht passt, wird verworfen.</p></div>
  </div>
</div></section>

<section class="sec"><div class="wrap split">
  <div class="card"><h3>Was Du bei Angie findest</h3><ul class="list"><li>Zuhören ohne Bewertung</li><li>Erfahrung aus eigenem Alltag mit AD(H)S</li><li>Struktur und Klarheit aus langjähriger Führungs- und Schulungserfahrung</li><li>Ehrlichkeit, auch wenn etwas unbequem ist</li></ul></div>
  <div class="card"><h3>Was Du bei ihr nicht findest</h3><ul class="list list--no"><li>Eine Diagnose oder ein Etikett</li><li>Therapie oder medizinische Behandlung</li><li>Positives Denken auf Knopfdruck</li><li>Eine Mentorin, die alles besser weiß</li></ul></div>
</div></section>

<section class="sec sec--alt"><div class="wrap narrow"><div class="head"><span class="tag">Häufige Fragen</span><h2 class="h2">Zur Begleitung</h2></div>${faqBlock(FAQ_ALL.slice(0, 7))}</div></section>
${cta()}`,
});

/* ========== ÜBER ANGIE ========== */
page({
  path: '/ueber-angie/', crumb: 'Über Angie',
  title: 'Über Angie: Mentorin, Wegbegleiterin, Stimme von Gedankenkotze',
  desc: 'Angie begleitet Menschen mit ADHS aus eigenem Alltag. Jahrelange Führungserfahrung, Schulung von Führungspersonal, viele Weiterbildungen, Podcast Gedankenkotze.',
  h1: 'Ich weiß, wie anstrengend es ist, ständig gegen sich selbst zu kämpfen.', lede: 'Angie ist Mentorin, Co- und Wegbegleiterin bei CoGether und die Stimme des ADHS-Podcasts Gedankenkotze.',
  body: `<section class="sec"><div class="wrap split">
  <div class="portrait" style="width:min(340px,100%)"><div class="portrait__frame"><img src="/assets/img/gedankenkotze.jpeg" alt="Angie im Porträt in warmem Abendlicht" width="362" height="493"><div class="portrait__cap"><b>Angie</b>Mentorin · Wegbegleiterin</div></div></div>
  <div class="prose">
    <p>Angie kennt vieles von dem, worüber sie spricht, nicht nur aus Büchern. Sie weiß, wie es ist, sich jahrelang zu fragen, warum man nicht einfach so funktioniert wie andere. Gedankenchaos, Überforderung und das Gefühl, zu viel wahrzunehmen, sind ihr aus dem eigenen Leben vertraut.</p>
    <p>Daraus ist ihre Art der Begleitung entstanden: Sie begleitet nicht, weil sie alle Antworten hat. Sie begleitet, weil sie weiß, wie es sich anfühlt, wenn man selbst gerade keine mehr findet.</p>
    <h2>Erfahrung, die trägt</h2>
    <p>Angie hat über viele Jahre in Führungspositionen gearbeitet, Führungspersonal geschult und sich in zahlreichen Weiterbildungen fortgebildet. Diese Erfahrung gibt ihrer Begleitung Struktur, Klarheit und ein feines Gespür dafür, was im Alltag wirklich funktioniert.</p>
    <blockquote class="callout"><b>„Wenn jemand dadurch nicht ganz so lange alleine durch diesen ganzen Scheiß laufen muss, bedeutet mir das unglaublich viel.“</b> Angie</blockquote>
    <h2>Dafür steht sie</h2>
    <ul><li>Verstehen statt bewerten</li><li>Du musst nicht funktionieren</li><li>Erfahrungen statt Patentrezepte</li><li>Dein Weg bleibt Dein Weg</li></ul>
    <p style="margin-top:1.6rem"><a class="btn" href="${BOOK}">Erstgespräch mit Angie</a></p>
  </div>
</div></section>
<section class="sec sec--alt"><div class="wrap">
  <div class="head"><span class="tag">Lern sie kennen</span><h2 class="h2">Hör erst einmal rein</h2><p class="lede">Du musst kein Erstgespräch buchen, um herauszufinden, wie Angie denkt. Im Podcast und auf Instagram bekommst Du einen guten Eindruck.</p></div>
  <div class="grid g2">
    <a class="card" href="/podcast/"><span class="num">PODCAST</span><h3>Gedankenkotze</h3><p>Leben mit AD(H)S: unverstellt und direkt aus dem Alltag.</p><span class="more">Zum Podcast →</span></a>
    <a class="card" href="https://www.instagram.com/emotionale_pusteblume/" rel="noopener"><span class="num">INSTAGRAM</span><h3>Emotionale Pusteblume</h3><p>Gedanken, Alltagsmomente und Impulse zu Selbstwert, Bedürfnissen und emotionaler Klarheit.</p><span class="more">@emotionale_pusteblume →</span></a>
  </div>
</div></section>
${cta()}`,
});

/* ========== ADHS VERSTEHEN ========== */
const FAQ_V = [
  ['Was ist ADHS bei Erwachsenen?', 'ADHS ist eine neurologische Entwicklungsbesonderheit, die sich häufig schon in der Kindheit zeigt und im Erwachsenenalter weiterbestehen kann. Typisch sind Schwierigkeiten mit Aufmerksamkeit, Impulskontrolle und innerer Unruhe, die sich bei jedem Menschen anders äußern.'],
  ['Wer kann ADHS diagnostizieren?', 'Erwachsene wenden sich dafür an Fachleute, die sich mit ADHS auskennen, etwa Fachärztinnen und Fachärzte für Psychiatrie, Neurologie oder Psychosomatik oder erfahrene Psychotherapeutinnen und Psychotherapeuten. Coaching kann keine Diagnose stellen.'],
  ['Kann ich mich selbst testen?', 'Selbsttests im Netz können ein Anlass sein, sich fachlich abklären zu lassen. Sie ersetzen eine Diagnostik nicht. Eine Diagnose entsteht aus ausführlichen Gesprächen, Fragebögen und einer körperlichen Untersuchung.'],
  ['Ist ADHS nur eine Kinderkrankheit?', 'Nein. ADHS kann bis ins Erwachsenenalter bestehen. Viele Erwachsene erfahren erst spät davon, oft über ihre Kinder oder über eine Phase großer Überforderung.'],
  ['Wird ADHS bei Frauen häufiger übersehen?', 'Es gibt Hinweise darauf, dass ADHS bei Frauen und Mädchen oft später erkannt wird, unter anderem weil sich die Anzeichen anders zeigen können, zum Beispiel als innere Unruhe, Verträumtheit oder starke Anpassung nach außen.'],
];
page({
  path: '/adhs-verstehen/', crumb: 'ADHS verstehen',
  title: 'ADHS verstehen: Erwachsene, Anzeichen, Abklärung | Angie',
  desc: 'ADHS bei Erwachsenen verständlich erklärt: typische Anzeichen, warum es spät erkannt wird, wie die Abklärung läuft und was Begleitung leisten kann und was nicht.',
  h1: 'ADHS verstehen, ohne Etikett und ohne Drama.', lede: 'Orientierung für Erwachsene: Was ADHS sein kann, wie sich die Abklärung ungefähr anfühlt und was Begleitung im Alltag leisten kann.',
  schema: [{ '@type': 'FAQPage', mainEntity: FAQ_V.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }],
  body: `<section class="sec"><div class="wrap narrow prose">
  <p>ADHS steht für Aufmerksamkeitsdefizit-Hyperaktivitätsstörung. Der Name führt in die Irre, denn es geht weniger um ein Defizit an Aufmerksamkeit als um Schwierigkeiten, Aufmerksamkeit, Impulse und Aktivität zu steuern. Viele Erwachsene erleben das als inneren Motor, der nie ganz ausgeht: Der Kopf springt, die Gedanken überholen sich, und selbst auf dem Sofa fühlt sich Ruhe nicht nach Ruhe an.</p>
  <div class="callout"><b>Wichtig:</b> Diese Seite informiert, sie diagnostiziert nicht. ADHS äußert sich bei jedem Menschen anders. Die folgenden Punkte sind typische Beobachtungen, die nicht bei allen vorkommen müssen.</div>
  <h2>Woran Erwachsene ADHS im Alltag merken können</h2>
  <ul><li><b>Aufmerksamkeit:</b> Dinge werden angefangen und nicht beendet, Details gehen verloren, Gespräche rauschen vorbei, Wichtiges wird vergessen.</li><li><b>Innere Unruhe:</b> Bei Erwachsenen zeigt sich Hyperaktivität oft nicht als Herumrennen, sondern als Rastlosigkeit, Gedankenkarussell oder das Gefühl, ständig „unter Strom“ zu stehen.</li><li><b>Impulsivität:</b> Spontane Entscheidungen, Dazwischenreden, Käufe oder Zusagen, die man später bereut.</li><li><b>Zeitgefühl:</b> Zu spät kommen, Fristen unterschätzen, Aufgaben bis zum letzten Moment verschieben.</li><li><b>Gefühle:</b> Schnelle, starke Reaktionen, Frustration, Scham und das Gefühl, „zu viel“ zu sein.</li><li><b>Reize:</b> Geräusche, Licht und Gespräche gleichzeitig sind schnell zu viel.</li></ul>
  <h2>Warum ADHS oft spät erkannt wird</h2>
  <p>Viele Erwachsene haben jahrelang gelernt, sich anzupassen. Sie funktionieren nach außen und bezahlen es innen mit Erschöpfung. Besonders bei Frauen und Mädchen wird ADHS Hinweisen zufolge häufiger später erkannt, weil es sich anders zeigen kann: weniger als Zappeln, mehr als Verträumtheit, Überforderung oder starke Anpassung. Manche erfahren erst durch ihre Kinder davon oder in einer Lebensphase, in der die eigenen Strategien nicht mehr reichen.</p>
  <h2>Wie die Abklärung ungefähr abläuft</h2>
  <p>Wenn Du den Verdacht hast, ADHS zu haben, wende Dich an Fachleute, die sich mit ADHS bei Erwachsenen auskennen, etwa Fachärztinnen und Fachärzte für Psychiatrie, Neurologie oder Psychosomatik oder erfahrene Psychotherapeutinnen und Psychotherapeuten. In der Regel gehören ausführliche Gespräche, oft auch mit Bezugspersonen, Fragebögen und eine körperliche Untersuchung dazu. Geprüft wird unter anderem, ob Symptome schon in der Kindheit bestanden haben und ob andere Ursachen infrage kommen.</p>
  <p>Wartezeiten sind in vielen Regionen lang. Das ist frustrierend, aber kein Grund, Dein Erleben so lange auszuhalten.</p>
  <h2>Was Begleitung leisten kann</h2>
  <ul><li>Dein Erleben einordnen und in Worte fassen</li><li>Alltagsstrategien finden, die zu Deinem Kopf passen</li><li>Intensive Gefühle früher bemerken</li><li>Grenzen und Bedürfnisse klarer wahrnehmen</li><li>Beziehungen entlasten</li></ul>
  <h2>Was Begleitung nicht leisten kann</h2>
  <ul><li>ADHS diagnostizieren oder ausschließen</li><li>Medikamente empfehlen oder ersetzen</li><li>Psychotherapie ersetzen, zum Beispiel bei Depression oder Angststörung</li><li>Schnelle Lösungen versprechen</li></ul>
  <div class="callout"><b>Gut zu wissen:</b> Keine Diagnose definiert Dich. Sie kann aber helfen, Dein Erleben besser zu verstehen und die Begleitung passender zu gestalten.</div>
  <h2>Gute Anlaufstellen für verlässliche Informationen</h2>
  <ul><li><a href="https://adhs-deutschland.de/" rel="noopener">ADHS Deutschland e. V.</a>: Selbsthilfe, Informationen und Gruppen</li><li><a href="https://www.gesundheitsinformation.de/" rel="noopener">gesundheitsinformation.de</a>: unabhängige Patienteninformationen</li></ul>
  <div class="head" style="margin-top:3rem"><span class="tag">Häufige Fragen</span><h2 class="h2" style="margin-top:0">Kurz erklärt</h2></div>
  ${faqBlock(FAQ_V)}
</div></section>
${cta('Du möchtest Dein Erleben nicht allein sortieren?')}`,
});

/* ========== ALLTAG ========== */
page({
  path: '/alltag/', crumb: 'Alltag',
  title: 'ADHS im Alltag: Zeitblindheit, Reize, Gefühle, Struktur | Angie',
  desc: 'ADHS im Alltag verständlich: Zeitblindheit, Reizüberflutung, intensive Gefühle, Anfangen und Struktur. Kleine Versuche, die zu Deinem Kopf passen.',
  h1: 'ADHS im Alltag: weniger Kampf, mehr Passung.', lede: 'Standard-Tipps scheitern oft, weil sie für ein anderes Gehirn gemacht sind. Hier findest Du Ideen, die Du ausprobieren und anpassen kannst.',
  body: `<section class="sec"><div class="wrap narrow prose">
  <div class="callout"><b>Hinweis:</b> Das sind Anregungen aus der Alltagsbegleitung, keine medizinische Beratung. Probier aus, was passt, und verwirf, was nicht passt.</div>
  <h2 id="zeitblindheit">Zeitblindheit: Wenn Zeit nur „jetzt“ oder „nicht jetzt“ ist</h2>
  <p>Viele Menschen mit ADHS berichten, dass sie Zeit schlecht fühlen können. Fünf Minuten sind lang oder kurz, zwei Stunden sind weg, bevor man es merkt. Das führt zu Verspätungen, zu knapp geplanten Aufgaben und zu der Scham, „es einfach nicht auf die Reihe zu kriegen“.</p>
  <ul><li>Mach Zeit sichtbar: eine große Uhr, ein Sanduhr-Timer oder eine App mit Balken.</li><li>Plane rückwärts vom Termin: Wann muss ich los? Wann muss ich anfangen, mich fertig zu machen?</li><li>Rechne Puffer ein, am besten mehr als Du denkst.</li><li>Teile große Aufgaben in sichtbare Blöcke mit Anfang und Ende.</li></ul>
  <h2 id="reizueberflutung">Reizüberflutung: Wenn alles gleichzeitig reinkommt</h2>
  <p>Geräusche, Licht, Gespräche, Benachrichtigungen: Wenn alles gleich viel Aufmerksamkeit fordert, ist der Kopf schnell voll. Danach folgt oft Erschöpfung oder Gereiztheit. Das hat nichts mit Schwäche zu tun, sondern mit zu vielen offenen Kanälen.</p>
  <ul><li>Nimm bewusst einen Kanal raus: Kopfhörer, Licht dimmen, Handy in einen anderen Raum.</li><li>Plane Erholung vor und nach reizintensiven Terminen ein.</li><li>Sag früh Bescheid, wenn Du eine Pause brauchst, bevor es zu viel wird.</li></ul>
  <h2 id="gefuehle">Intensive Gefühle: Schnell, stark, manchmal zu schnell</h2>
  <p>Viele erleben Ärger, Freude, Scham oder Frust mit voller Wucht und manchmal schneller, als sie sie einordnen können. Danach folgt oft die Frage, warum man „schon wieder“ so reagiert hat. Das Gefühl ist nicht das Problem. Meist hilft es, früher zu bemerken, was kommt.</p>
  <ul><li>Benenne das Gefühl in einem Satz, bevor Du handelst: „Gerade ist da Ärger.“</li><li>Gönn Dir zwei Minuten Abstand, bevor Du antwortest oder entscheidest.</li><li>Notiere am Abend, was Dich getriggert hat, ohne es zu bewerten.</li></ul>
  <h2 id="starten">Anfangen und Dranbleiben</h2>
  <p>Du weißt, was zu tun ist, und kommst trotzdem nicht in Gang. Das hat selten mit Faulheit zu tun. Häufig fehlt ein erster, kleiner und konkreter Schritt, der sich machbar anfühlt.</p>
  <ul><li>Mach den ersten Schritt lächerlich klein: Datei öffnen, Teller in die Spüle, einen Satz schreiben.</li><li>Stell einen Fünf-Minuten-Timer. Wenn Du danach aufhörst, ist das in Ordnung.</li><li>Such Dir Gesellschaft: Body-Doubling, also zusammen mit jemandem arbeiten, der anwesend ist, hilft vielen.</li><li>Belohne den Anfang, nicht nur das Ergebnis.</li></ul>
  <h2 id="struktur">Struktur, die zu Deinem Kopf passt</h2>
  <p>Ordnungssysteme scheitern oft, weil sie auf Disziplin setzen, nicht auf Sichtbarkeit. Was aus den Augen ist, ist oft aus dem Sinn.</p>
  <ul><li>Dinge bekommen einen festen Platz dort, wo Du sie benutzt.</li><li>Wichtiges bleibt sichtbar: Haken, offene Boxen, Zettel an der Tür.</li><li>Weniger Systeme sind besser als viele. Ein Kalender, eine Liste.</li><li>Routinen an bestehende Gewohnheiten koppeln: nach dem Kaffee, vor dem Zähneputzen.</li></ul>
  <h2>Und wenn all das allein nicht reicht?</h2>
  <p>Dann ist das kein Zeichen, dass Du etwas falsch machst. Oft hilft es, mit jemandem zu schauen, was zu Deinem Leben passt. Angie begleitet Dich dabei, ohne Schema F.</p>
</div></section>
${cta('Lass uns gemeinsam schauen, was bei Dir passt.')}`,
});

/* ========== BEZIEHUNGEN ========== */
const FAQ_B = [
  ['Mein Partner hat ADHS: Ist das der Grund für unsere Konflikte?', 'ADHS kann Konflikte verstärken, etwa durch vergessene Absprachen oder unterbrochene Gespräche. Meist tragen beide Seiten ihren Anteil. Es geht nicht darum, jemanden an den Pranger zu stellen, sondern darum, einander besser zu verstehen.'],
  ['Wie spreche ich meinen Partner auf ADHS an?', 'Beschreibe konkret, was Du erlebst, und frage nach, wie es bei ihm oder ihr ist. Vermeide Sätze wie „Du hast bestimmt ADHS“. Eine Abklärung ist eine Entscheidung, die der Mensch selbst trifft.'],
  ['Kann ich als Angehörige ein Erstgespräch buchen?', 'Ja. Es geht dann um Dich: um Dein Erleben, Deine Grenzen und Deine Kraft.'],
];
page({
  path: '/beziehungen/', crumb: 'Partner und Angehörige',
  title: 'ADHS in der Beziehung: Partner und Angehörige | Angie',
  desc: 'Wenn jemand, den Du liebst, ADHS hat: Missverständnisse verstehen, Grenzen setzen, nicht ausbrennen. Orientierung und Begleitung für Partner und Angehörige.',
  h1: 'Wenn jemand, den Du liebst, ADHS hat.', lede: 'Du willst verstehen, was los ist, ohne Dich dabei selbst zu verlieren. Hier findest Du Orientierung und einen Ort für Deine Fragen.',
  schema: [{ '@type': 'FAQPage', mainEntity: FAQ_B.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }],
  body: `<section class="sec"><div class="wrap narrow prose">
  <p>ADHS betrifft nie nur einen Menschen. In Partnerschaften, Freundschaften und Familien entstehen Muster: Der eine vergisst, die andere erinnert. Der eine fühlt sich ständig kritisiert, die andere ständig überfordert. Wenn niemand erklärt, was im Kopf passiert, sind Missverständnisse vorprogrammiert.</p>
  <h2>Typische Muster, die entlasten, wenn man sie kennt</h2>
  <ul><li><b>Vergessene Absprachen</b> sind selten Desinteresse. Häufig ist es ein Gedächtnis- und Aufmerksamkeitsthema.</li><li><b>Unterbrechen und Abschweifen</b> kann Ausdruck von innerem Tempo sein, nicht von mangelndem Respekt.</li><li><b>Starke Reaktionen</b> kommen oft schnell und gehen schnell. Danach folgt häufig Scham.</li><li><b>Rollenverschiebung:</b> Wer immer erinnert, plant und organisiert, wird zum „Elternteil“ in der Beziehung. Das belastet beide.</li></ul>
  <h2>Was Angehörigen oft hilft</h2>
  <ul><li>Konkret sagen, was Du brauchst, in einem Satz und ohne Vorwurf: „Mir hilft es, wenn Du mir das aufschreibst.“</li><li>Gemeinsame Systeme für Termine, Haushalt und Finanzen, die für beide funktionieren.</li><li>Eigene Grenzen ernst nehmen. Du bist nicht dafür zuständig, jemandes ADHS auszugleichen.</li><li>Für Dich selbst sorgen: Austausch, Pausen, eigene Begleitung.</li></ul>
  <div class="callout"><b>Dein Erleben zählt.</b> Als Partnerin, Partner oder Angehöriger darfst Du erschöpft, wütend oder traurig sein. Das macht Dich nicht zu einem schlechten Menschen.</div>
  <h2>Gute Anlaufstellen</h2>
  <ul><li><a href="https://adhs-deutschland.de/" rel="noopener">ADHS Deutschland e. V.</a> mit Selbsthilfegruppen</li><li><a href="https://gemeinsam-adhs-begegnen.de/" rel="noopener">gemeinsam-adhs-begegnen.de</a> mit Alltagsratgebern</li></ul>
  <div class="head" style="margin-top:3rem"><span class="tag">Häufige Fragen</span><h2 class="h2" style="margin-top:0">Kurz beantwortet</h2></div>
  ${faqBlock(FAQ_B)}
</div></section>
${cta('Du brauchst auch einen Ort für Dich?', 'Im Erstgespräch geht es um Dein Erleben, Deine Grenzen und Deine Kraft. Online, unverbindlich, ohne Druck.')}`,
});

/* ========== ELTERN ========== */
const FAQ_E = [
  ['Begleitet Angie auch Kinder mit ADHS?', 'Nein. Angies Begleitung richtet sich an Erwachsene. Für Kinder und Jugendliche sind kinder- und jugendpsychiatrische, therapeutische und pädagogische Fachleute zuständig.'],
  ['Wo finde ich Informationen zu ADHS bei Kindern?', 'Verlässliche Informationen bieten zum Beispiel ADHS Deutschland e. V., adhs.info und gesundheitsinformation.de. Sprich außerdem mit der Kinderärztin oder dem Kinderarzt und mit Fachleuten, die sich mit ADHS auskennen.'],
  ['Kann ich als Elternteil ein Erstgespräch buchen?', 'Ja. Es geht dann um Dich als Elternteil, um Deine Kraft, Deine Grenzen und Dein Erleben.'],
];
page({
  path: '/eltern/', crumb: 'Eltern',
  title: 'Eltern von Kindern mit ADHS: Kraft, Grenzen, Orientierung',
  desc: 'Eltern von Kindern mit ADHS tragen viel. Orientierung, gute Anlaufstellen und ein Raum für Dich als Elternteil. Keine Beratung zu Kindern, kein Therapieersatz.',
  h1: 'Mein Kind hat ADHS, und ich bin müde.', lede: 'Du trägst viel Verantwortung. Hier geht es um Dich als Elternteil: um Kraft, Grenzen und gute Orientierung.',
  schema: [{ '@type': 'FAQPage', mainEntity: FAQ_E.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }],
  body: `<section class="sec"><div class="wrap narrow prose">
  <p>Ein Kind mit ADHS großzuziehen kann sehr anstrengend sein. Viele Eltern berichten, dass sie neben der Sorge um ihr Kind oft überfordert sind, gereizt reagieren und sich danach schlecht fühlen. Das ist verbreitet und kein Zeichen von Versagen. Oft kommen Blicke von außen dazu, die das Verhalten des Kindes für einen Erziehungsfehler halten.</p>
  <div class="callout"><b>Klare Grenze:</b> Auf dieser Seite geht es um Dich als Elternteil. Angie begleitet Erwachsene. Für die Abklärung und Begleitung Deines Kindes sind kinder- und jugendpsychiatrische, therapeutische und pädagogische Fachleute zuständig.</div>
  <h2>Was Eltern entlasten kann</h2>
  <ul><li><b>Auf die eigenen Bedürfnisse achten.</b> Du kannst nur geben, was Du hast. Pausen sind Voraussetzung, kein Luxus.</li><li><b>Hilfe annehmen.</b> Entlastung durch Familie und Freunde, Elternschulungen und Beratung helfen vielen.</li><li><b>Mit den Fachleuten im Gespräch bleiben.</b> Ein guter Kontakt zu Ärztinnen, Ärzten, Therapeutinnen und Schule erleichtert den Alltag.</li><li><b>Dich erinnern:</b> Dein Kind verhält sich nicht absichtlich so. Es kann sich in manchen Momenten schlechter steuern als andere.</li></ul>
  <h2>Wenn ADHS in der Familie liegt</h2>
  <p>ADHS tritt in Familien häufiger auf. Manche Eltern erkennen sich im Verhalten ihres Kindes wieder und erfahren erst dadurch von ihrer eigenen ADHS. Wenn Dir das bekannt vorkommt, kannst Du Dich selbst fachlich abklären lassen. Du musst Dich dafür nicht rechtfertigen.</p>
  <h2>Gute Anlaufstellen</h2>
  <ul><li><a href="https://www.adhs.info/fuer-eltern-und-angehoerige/" rel="noopener">adhs.info: für Eltern und Angehörige</a></li><li><a href="https://adhs-deutschland.de/" rel="noopener">ADHS Deutschland e. V.</a></li><li><a href="https://www.gesundheitsinformation.de/den-alltag-mit-adhs-bewaeltigen-infos-fuer-eltern.html" rel="noopener">gesundheitsinformation.de: Infos für Eltern</a></li></ul>
  <div class="head" style="margin-top:3rem"><span class="tag">Häufige Fragen</span><h2 class="h2" style="margin-top:0">Kurz beantwortet</h2></div>
  ${faqBlock(FAQ_E)}
</div></section>
${cta('Du brauchst auch jemanden, der Dich hält?', 'Im Erstgespräch geht es um Dich als Elternteil. Online, unverbindlich und ohne Bewertung.')}`,
});

/* ========== PODCAST ========== */
page({
  path: '/podcast/', crumb: 'Podcast',
  title: 'Gedankenkotze: ADHS-Podcast von Angie',
  desc: 'Gedankenkotze ist Angies Podcast über das Leben mit AD(H)S: unverstellt und direkt aus dem Alltag. Alle Folgen auf gedankenkotze.de und bei Spotify.',
  h1: 'Gedankenkotze: Leben mit AD(H)S.', lede: 'Angies Podcast, unverstellt und direkt aus dem Alltag. Hör rein und schau, ob Dir ihre Art zu denken liegt.',
  body: `<section class="sec"><div class="wrap split">
  <div class="portrait" style="width:min(340px,100%)"><div class="portrait__frame"><img src="/assets/img/Angie-1.jpeg" alt="Angie mit Kopfhörern am Mikrofon bei einer Podcast-Aufnahme" width="375" height="490"><div class="portrait__cap"><b>Gedankenkotze</b>Der ADHS-Podcast</div></div></div>
  <div class="prose">
    <p>In Gedankenkotze spricht Angie über das, was im Kopf passiert, wenn man mit AD(H)S lebt: über Chaos, Scham, Überforderung, Beziehungen und die kleinen Siege dazwischen. Ohne Fachsprache, ohne Filter und ohne den Anspruch, alles richtig zu machen.</p>
    <div class="row" style="margin-top:1.6rem"><a class="btn" href="https://gedankenkotze.de/" rel="noopener">Alle Folgen auf gedankenkotze.de</a><a class="btn btn--g" href="https://open.spotify.com/show/0J8pt5j1CY8cmqYdGvmWgO" rel="noopener">Auf Spotify öffnen</a></div>
    <p class="note">Die Folgen sind persönliche Erfahrungen und ersetzen keine Diagnostik und keine Behandlung.</p>
  </div>
</div></section>
${cta()}`,
});

/* ========== FAQ ========== */
page({
  path: '/faq/', crumb: 'Fragen',
  title: 'Fragen zur ADHS-Begleitung mit Angie | Häufige Fragen',
  desc: 'Antworten auf häufige Fragen: Therapie oder Coaching, Diagnose nötig, Ablauf, Kosten, Angehörige und Eltern, Abklärung von ADHS.',
  h1: 'Gut zu wissen.', lede: 'Die wichtigsten Fragen zur Begleitung, zur Abgrenzung von Therapie und zur Abklärung von ADHS.',
  schema: [{ '@type': 'FAQPage', mainEntity: FAQ_ALL.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }],
  body: `<section class="sec"><div class="wrap narrow">${faqBlock(FAQ_ALL)}</div></section>${cta('Deine Frage ist nicht dabei?', 'Stell sie im kostenlosen Erstgespräch, oder schreib an info@cogether.de.')}`,
});

/* ========== KONTAKT ========== */
page({
  path: '/kontakt/', crumb: 'Kontakt',
  title: 'Kontakt und Erstgespräch mit Angie | ADHS Begleitung',
  desc: 'Buche Dein kostenloses Erstgespräch mit Angie online oder schreib an info@cogether.de.',
  h1: 'Sag Hallo.', lede: 'Der leichteste Weg: ein kostenloses Erstgespräch. Online, unverbindlich, ohne Druck.',
  body: `<section class="sec"><div class="wrap"><div class="grid g2">
  <div class="card"><span class="num">ERSTGESPRÄCH</span><h3>Termin direkt buchen</h3><p>Du wählst einen freien Termin im Kalender von Angie. Das Gespräch findet per Video statt.</p><p style="margin-top:1.4rem"><a class="btn" href="${BOOK}">Erstgespräch buchen</a></p></div>
  <div class="card"><span class="num">E-MAIL</span><h3>Schreib uns</h3><p>Lieber erst schriftlich? Schreib an info@cogether.de. Wir melden uns persönlich.</p><p style="margin-top:1.4rem"><a class="btn btn--g" href="mailto:info@cogether.de?subject=ADHS%20Begleitung">info@cogether.de</a></p></div>
</div><p class="note">Bei akuter Krise: Telefonseelsorge 116 123 (kostenlos), Notruf 112.</p></div></section>`,
});

/* ========== IMPRESSUM / DATENSCHUTZ ========== */
page({
  path: '/impressum/', crumb: 'Impressum', noindex: false,
  title: 'Impressum | ADHS Begleitung mit Angie',
  desc: 'Impressum und Anbieterkennzeichnung gemäß § 5 DDG.',
  h1: 'Impressum', lede: 'Angaben gemäß § 5 DDG.',
  body: `<section class="sec"><div class="wrap narrow prose">
  <h2 style="margin-top:0">Anbieter</h2><p>BA Entertainment<br>Alleestraße 15<br>42781 Haan<br>Deutschland</p>
  <h2>Kontakt</h2><p>E-Mail: info@cogether.de<br>Website: adhsbegleitung.de</p>
  <h2>Vertretungsberechtigte Person</h2><p>S. Ulrich</p>
  <h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE352483219</p>
  <p class="note">Hinweis: Begleitung und Coaching ersetzen keine medizinische oder psychotherapeutische Behandlung.</p>
</div></section>`,
});
page({
  path: '/datenschutz/', crumb: 'Datenschutz',
  title: 'Datenschutz | ADHS Begleitung mit Angie',
  desc: 'Datenschutzhinweise für adhsbegleitung.de.',
  h1: 'Datenschutz', lede: 'Kurz und verständlich: Diese Seite setzt keine Tracking-Cookies und verwendet keine Analyse- oder Werbedienste.',
  body: `<section class="sec"><div class="wrap narrow prose">
  <h2 style="margin-top:0">Verantwortliche Stelle</h2><p>BA Entertainment, Alleestraße 15, 42781 Haan, E-Mail: info@cogether.de</p>
  <h2>Hosting und Server-Logdaten</h2><p>Diese Seite wird als statische Website über GitHub Pages ausgeliefert. Beim Aufruf verarbeitet der Hoster technisch notwendige Daten (zum Beispiel IP-Adresse, Zeitpunkt, aufgerufene Seite), um die Seite auszuliefern und die Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
  <h2>Schriftarten</h2><p>Die Schriftarten (Inter, JetBrains Mono, Space Grotesk) werden von Google Fonts geladen. Dabei wird Deine IP-Adresse an Google übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen findest Du in der Datenschutzerklärung von Google.</p>
  <h2>Ruhemodus</h2><p>Wenn Du den Ruhemodus aktivierst, speichert Dein Browser diese Einstellung lokal (localStorage). Die Information verlässt Dein Gerät nicht.</p>
  <h2>Terminbuchung und Kontakt</h2><p>Für die Buchung eines Erstgesprächs wirst Du zu cogether.de weitergeleitet. Dort gelten die <a href="https://cogether.de/datenschutz/">Datenschutzhinweise von CoGether</a>. Wenn Du uns per E-Mail schreibst, verarbeiten wir Deine Angaben zur Bearbeitung Deiner Anfrage.</p>
  <h2>Deine Rechte</h2><p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Du kannst Dich bei einer Datenschutz-Aufsichtsbehörde beschweren. Schreib dazu an info@cogether.de.</p>
</div></section>`,
});

/* ========== Sitemap, robots, llms, favicon, CNAME ========== */
const urls = ['/', '/begleitung/', '/ueber-angie/', '/adhs-verstehen/', '/alltag/', '/beziehungen/', '/eltern/', '/podcast/', '/faq/', '/kontakt/', '/impressum/', '/datenschutz/'];
wr('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${B}${u}</loc><lastmod>${DATE}</lastmod><priority>${u === '/' ? '1.0' : ['/begleitung/', '/adhs-verstehen/', '/alltag/'].includes(u) ? '0.9' : '0.7'}</priority></url>`).join('\n')}\n</urlset>\n`);
wr('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${B}/sitemap.xml\n`);
wr('llms.txt', `# ADHS Begleitung mit Angie\n\n> Begleitung für Menschen mit ADHS, für Partner, Angehörige und Eltern. Online, 1:1, mit Angie (Mentorin, Co- und Wegbegleiterin bei CoGether, Stimme des Podcasts Gedankenkotze). Coaching und Begleitung, keine Diagnostik, keine Therapie. Herausgeber: BA Entertainment, Alleestraße 15, 42781 Haan. Kontakt: info@cogether.de. Zuletzt aktualisiert: 09.11.2026.\n\n## Seiten\n\n${urls.map((u) => `- ${B}${u}`).join('\n')}\n\n## Verwandt\n\n- Podcast: https://gedankenkotze.de/\n- CoGether: https://cogether.de/\n`);
wr('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb454"/><stop offset="1" stop-color="#ff9a3c"/></linearGradient></defs><path d="M0 0h50l14 14v50H14L0 50z" fill="url(#g)"/><text x="32" y="45" text-anchor="middle" font-family="Arial" font-weight="700" font-size="34" fill="#1a1006">A</text></svg>`);
wr('CNAME', 'adhsbegleitung.de\n');
wr('404.html', `<!doctype html><meta charset="utf-8"><title>Seite nicht gefunden</title><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/assets/adhs.css"><body><main class="wrap" style="padding:6rem 0"><span class="tag">404</span><h1 class="h2">Diese Seite gibt es nicht.</h1><p class="lede" style="margin:1rem 0 2rem">Kein Drama. Hier geht es zurück.</p><a class="btn" href="/">Zur Startseite</a></main></body>`);
console.log('Seiten:', urls.length);
