const fs = require('fs');
const path = require('path');
const root = __dirname + '/';
const { A, CATS, GLOSS } = require('./content/articles.cjs');
const wr = (f, t) => { fs.mkdirSync(path.dirname(root + f), { recursive: true }); fs.writeFileSync(root + f, t); };
const B = 'https://adhsbegleitung.de';
const DATE = '2026-11-09';
const BOOK = 'https://cogether.de/coach-angie/#termin-buchen';
const esc = (s) => s.replace(/&(?!amp;)/g, '&amp;').replace(/"/g, '&quot;');
const hasLogo = fs.existsSync(root + 'assets/img/logo.svg') ? 'svg' : fs.existsSync(root + 'assets/img/logo.png') ? 'png' : null;
const catBy = Object.fromEntries(CATS.map((c) => [c.slug, c]));
const artsOf = (slug) => A.filter((a) => a.cat === slug);
const artBy = Object.fromEntries(A.map((a) => [a.slug, a]));
const SEARCH_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

const NAV = [['/thema/erkennen/', 'ADHS erkennen'], ['/thema/diagnose/', 'Diagnose'], ['/thema/behandlung/', 'Behandlung'], ['/thema/alltag/', 'Alltag'], ['/glossar/', 'Glossar']];

function layout({ p, title, desc, schema = [], noindex = false, body }) {
  const url = B + p;
  const graph = [
    { '@type': 'Organization', '@id': B + '/#org', name: 'ADHS Begleitung', url: B + '/', parentOrganization: { '@type': 'Organization', name: 'BA Entertainment', address: { '@type': 'PostalAddress', streetAddress: 'Alleestraße 15', postalCode: '42781', addressLocality: 'Haan', addressCountry: 'DE' } } },
    { '@type': 'WebSite', '@id': B + '/#website', url: B + '/', name: 'ADHS Begleitung', inLanguage: 'de-DE', publisher: { '@id': B + '/#org' }, potentialAction: { '@type': 'SearchAction', target: B + '/?q={q}', 'query-input': 'required name=q' } },
    ...schema,
  ];
  const logo = hasLogo ? `<img src="/assets/img/logo.${hasLogo}" alt="ADHS Begleitung">` : `<span class="logo__m">A</span><span><b>ADHS Begleitung</b><small>Wissen, Orientierung, Begleitung</small></span>`;
  const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">\n' : '<meta name="robots" content="index, follow, max-image-preview:large">\n'}<meta property="og:locale" content="de_DE"><meta property="og:type" content="website"><meta property="og:site_name" content="ADHS Begleitung">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#1d4ed8">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="canonical" href="${url}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css?v=3">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
<script src="/assets/site.js?v=1" defer></script>
</head>
<body>
<a class="skip" href="#main">Zum Inhalt springen</a>
<div class="top"><div class="wrap"><span>Informationsangebot. Keine ärztliche Beratung, keine Diagnose, keine Therapie.</span><span>Telefonseelsorge kostenlos: 116 123</span></div></div>
<header class="hd"><div class="wrap hd__in">
  <a class="logo" href="/" aria-label="ADHS Begleitung, Startseite">${logo}</a>
  <button class="burger" id="burger" aria-label="Menü" aria-expanded="false" aria-controls="nav"><i></i><i></i><i></i></button>
  <nav class="nav" id="nav" aria-label="Hauptnavigation">
    ${NAV.map(([h, l]) => `<a href="${h}"${p === h ? ' aria-current="page"' : ''}>${l}</a>`).join('\n    ')}
    <button class="srch-b" id="srch-b" type="button" aria-label="Suche">${SEARCH_ICON}</button>
    <a class="cta" href="/begleitung/">Begleitung</a>
  </nav>
</div></header>
<main id="main">
${body}
</main>
<footer class="ft"><div class="wrap">
  <div class="ft__g">
    <div><div class="logo" style="color:#fff;margin-bottom:1rem"><span class="logo__m">A</span><span><b style="color:#fff">ADHS Begleitung</b></span></div><p style="max-width:36ch">Verständliche Informationen zu ADHS, mit Quellen. Dazu persönliche Begleitung mit Angie.</p></div>
    <div><h4>Themen</h4>${CATS.map((c) => `<a href="/thema/${c.slug}/">${c.name}</a>`).join('')}</div>
    <div><h4>Angebot</h4><a href="/begleitung/">Begleitung mit Angie</a><a href="/glossar/">Glossar</a><a href="/redaktion/">Redaktion und Quellen</a><a href="/kontakt/">Kontakt</a></div>
    <div><h4>Rechtliches</h4><a href="/impressum/">Impressum</a><a href="/datenschutz/">Datenschutz</a><a href="https://cogether.de/">Teil von CoGether</a></div>
  </div>
  <p class="ft__sos"><b>Wichtig:</b> Die Inhalte dienen der Information und ersetzen keine Diagnose, keine ärztliche und keine psychotherapeutische Behandlung. Bei akuter Krise erreichst Du die Telefonseelsorge kostenlos unter <b>116 123</b>, im Notfall den Notruf <b>112</b>.</p>
  <div class="ft__b"><span>© <span id="y"></span> BA Entertainment · ADHS Begleitung</span><span>Stand: 09.11.2026</span></div>
</div></footer>
<script>document.getElementById('y').textContent=new Date().getFullYear();</script>
</body>
</html>
`;
  wr(p === '/' ? 'index.html' : p.slice(1) + 'index.html', html);
}
const crumbs = (arr) => `<nav class="crumbs" aria-label="Brotkrumen">${arr.map(([h, l], i) => (i < arr.length - 1 ? `<a href="${h}">${l}</a><span>/</span>` : esc(l))).join('')}</nav>`;
const bcSchema = (arr) => ({ '@type': 'BreadcrumbList', itemListElement: arr.map(([h, l], i) => ({ '@type': 'ListItem', position: i + 1, name: l, item: B + h })) });
const card = (a) => `<a class="art" href="/artikel/${a.slug}/"><span class="art__c">${catBy[a.cat].name}</span><h3>${esc(a.title)}</h3><p>${esc(a.short.split('. ')[0])}.</p><small>${a.readMin} Min. Lesezeit</small></a>`;
const faqHtml = (arr) => `<div class="faq">${arr.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
const band = (h, t, btn = 'Persönliche Begleitung ansehen', href = '/begleitung/') => `<section class="sec"><div class="wrap"><div class="band"><div><h2>${h}</h2><p>${t}</p></div><a class="btn" href="${href}">${btn}</a></div></div></section>`;

/* ---------- START ---------- */
const topQ = ['adhs-diagnose-erwachsene', 'adhs-bei-frauen', 'nachteilsausgleich-adhs', 'coaching-oder-therapie-bei-adhs', 'zeitblindheit-adhs', 'adhs-und-schlaf'].map((s) => artBy[s]);
layout({
  p: '/', title: 'ADHS verständlich erklärt: Wissen, Diagnose, Alltag | ADHS Begleitung',
  desc: 'Klare, quellenbasierte Antworten zu ADHS bei Erwachsenen: erkennen, Diagnose, Behandlung, Alltag. Dazu persönliche Begleitung mit Angie.',
  schema: [{ '@type': 'CollectionPage', '@id': B + '/#webpage', url: B + '/', name: 'ADHS Begleitung', dateModified: DATE, inLanguage: 'de-DE' }],
  body: `<section class="hero"><div class="wrap">
  <span class="eyebrow">Wissen und Begleitung</span>
  <h1>ADHS verständlich erklärt. Klar, sachlich, mit Quellen.</h1>
  <p class="lede">Antworten auf die Fragen, die Erwachsene mit ADHS, ihre Angehörigen und Eltern wirklich stellen: von der Diagnose bis zum Alltag.</p>
  <div class="search" id="suche">${SEARCH_ICON}<input id="q" type="search" placeholder="Wonach suchst Du? Zum Beispiel Diagnose, Frauen, Schlaf" aria-label="Suche" autocomplete="off"><div class="search__res" id="qres"></div></div>
  <div class="trust"><span>Jede Aussage mit Quelle</span><span>Keine Werbung, keine Pharma-Partner</span><span>Keine Diagnose, keine Heilversprechen</span></div>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec__h"><div><h2>Themen</h2><p>Acht Bereiche, klar gegliedert. Wähle den, der zu Deiner Frage passt.</p></div></div>
  <div class="grid g4">${CATS.map((c) => { const n = artsOf(c.slug).length; return `<a class="cat" href="/thema/${c.slug}/"><span class="cat__i">${c.icon}</span><h3>${c.name}</h3><p>${c.desc}</p><small>${n ? n + (n === 1 ? ' Artikel' : ' Artikel') : 'Folgt in Kürze'}</small></a>`; }).join('')}</div>
</div></section>

<section class="sec sec--soft"><div class="wrap">
  <div class="sec__h"><div><h2>Häufige Fragen</h2><p>Die Fragen, die wir am häufigsten beantworten.</p></div></div>
  <ul class="qlist">${topQ.map((a) => `<li><a href="/artikel/${a.slug}/">${esc(a.title)}</a></li>`).join('')}</ul>
</div></section>

<section class="sec"><div class="wrap">
  <div class="sec__h"><div><h2>Zuletzt aktualisiert</h2></div></div>
  <div class="grid g3">${A.slice(0, 6).map(card).join('')}</div>
</div></section>

<section class="sec sec--soft"><div class="wrap grid g2" style="align-items:center;gap:3rem">
  <div class="prose"><span class="eyebrow">Unser Anspruch</span><h2 style="font-size:2rem;margin-bottom:1rem">Qualität vor Menge</h2><p>Jeder Artikel nennt seine Quellen. Zahlen übernehmen wir nur, wenn wir sie belegen können. Wir geben keine medizinischen Empfehlungen und ersetzen weder Diagnostik noch Behandlung.</p><p><a class="btn btn--o" href="/redaktion/">Redaktion und Quellen</a></p></div>
  <div class="cat" style="cursor:default"><span class="cat__i">A</span><h3>Persönliche Begleitung mit Angie</h3><p>Wenn Wissen allein nicht reicht: Angie begleitet Menschen mit ADHS, Angehörige und Eltern, online und 1:1. Das Erstgespräch ist kostenlos.</p><p style="margin-top:1.2rem"><a class="btn" href="/begleitung/">Zur Begleitung</a></p></div>
</div></section>`,
});

/* ---------- THEMEN-HUBS ---------- */
for (const c of CATS) {
  const list = artsOf(c.slug);
  const bc = [['/', 'Start'], [`/thema/${c.slug}/`, c.name]];
  layout({
    p: `/thema/${c.slug}/`, noindex: !list.length,
    title: `${c.name}: Artikel und Antworten | ADHS Begleitung`, desc: c.desc,
    schema: [bcSchema(bc), { '@type': 'CollectionPage', url: `${B}/thema/${c.slug}/`, name: c.name, inLanguage: 'de-DE' }],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>${c.name}</h1><p class="lede">${c.desc}</p></div></section>
<section class="sec"><div class="wrap">${list.length ? `<div class="grid g3">${list.map(card).join('')}</div>` : `<div class="box"><b>Folgt in Kürze.</b> Dieser Bereich ist in Vorbereitung. Wir veröffentlichen Artikel erst, wenn alle Aussagen mit Quellen belegt sind.</div>`}
<h2 style="font-size:1.4rem;margin:3rem 0 1rem">Weitere Themen</h2><div class="grid g4">${CATS.filter((x) => x.slug !== c.slug).slice(0, 4).map((x) => `<a class="cat" href="/thema/${x.slug}/"><h3>${x.name}</h3><p>${x.desc}</p></a>`).join('')}</div></div></section>`,
  });
}

/* ---------- ARTIKEL ---------- */
for (const a of A) {
  const c = catBy[a.cat];
  const bc = [['/', 'Start'], [`/thema/${c.slug}/`, c.name], [`/artikel/${a.slug}/`, a.title]];
  const rel = a.related.map((s) => artBy[s]).filter(Boolean);
  layout({
    p: `/artikel/${a.slug}/`, title: `${a.title} | ADHS Begleitung`, desc: a.desc,
    schema: [bcSchema(bc),
      { '@type': 'Article', headline: a.title, description: a.desc, inLanguage: 'de-DE', datePublished: DATE, dateModified: DATE, author: { '@id': B + '/#org' }, publisher: { '@id': B + '/#org' }, mainEntityOfPage: `${B}/artikel/${a.slug}/`, about: 'ADHS', citation: a.sources.map((s) => s.u) },
      { '@type': 'FAQPage', mainEntity: a.faq.map(([q, an]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: an } })) }],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<span class="eyebrow">${c.name}</span><h1>${esc(a.title)}</h1><div class="meta"><span><b>Redaktion</b> ADHS Begleitung</span><span>Aktualisiert: 09.11.2026</span><span>${a.readMin} Min. Lesezeit</span></div></div></section>
<div class="wrap layout">
  <article class="prose">
    <div class="short"><b>Kurz gesagt</b><p>${esc(a.short)}</p></div>
    ${a.sections.map(([id, h, html]) => `<h2 id="${id}">${esc(h)}</h2>${html}`).join('\n')}
    <h2 id="fragen">Häufige Fragen</h2>
    ${faqHtml(a.faq)}
    <h2 id="quellen">Quellen</h2>
    <div class="src"><ol>${a.sources.map((s) => `<li><a href="${s.u}" rel="noopener" target="_blank">${esc(s.t)}</a></li>`).join('')}</ol><p>Alle Angaben beziehen sich auf den Stand der Quellen am 09.11.2026.</p></div>
    <div class="author"><img src="/assets/img/Coach-Angie.jpeg" alt="Angie" width="84" height="84"><div><h4>Redaktion ADHS Begleitung</h4><p>Die Artikel werden aus den genannten Fachquellen erstellt. Persönliche Begleitung bietet Angie an, Mentorin und Wegbegleiterin bei CoGether.</p></div></div>
    <p class="disc">Dieser Artikel dient der Information. Er ersetzt keine Diagnose, keine ärztliche und keine psychotherapeutische Behandlung. Bei akuter Krise: Telefonseelsorge 116 123 (kostenlos), Notruf 112.</p>
    ${rel.length ? `<h2 style="margin-top:3rem">Weiterlesen</h2><div class="grid g2" style="margin-top:1rem">${rel.map(card).join('')}</div>` : ''}
  </article>
  <aside><div class="toc"><b>Inhalt</b>${a.sections.map(([id, h]) => `<a href="#${id}">${esc(h)}</a>`).join('')}<a href="#fragen">Häufige Fragen</a><a href="#quellen">Quellen</a></div>
  <div class="side-cta"><h4>Du willst das nicht allein sortieren?</h4><p>Angie begleitet Dich 1:1 online. Das Erstgespräch ist kostenlos.</p><a class="btn" href="/begleitung/">Zur Begleitung</a></div></aside>
</div>`,
  });
}

/* ---------- GLOSSAR ---------- */
{
  const bc = [['/', 'Start'], ['/glossar/', 'Glossar']];
  layout({ p: '/glossar/', title: 'ADHS-Glossar: Begriffe von A bis Z | ADHS Begleitung', desc: 'Wichtige Begriffe rund um ADHS verständlich erklärt: von Komorbidität bis Psychoedukation.', schema: [bcSchema(bc), { '@type': 'DefinedTermSet', name: 'ADHS-Glossar', hasDefinedTerm: GLOSS.map(([t, d]) => ({ '@type': 'DefinedTerm', name: t, description: d })) }],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>ADHS-Glossar</h1><p class="lede">Die wichtigsten Begriffe, kurz und sachlich erklärt.</p></div></section><section class="sec"><div class="wrap"><div class="gloss">${GLOSS.slice().sort((x, y) => x[0].localeCompare(y[0], 'de')).map(([t, d]) => `<div id="${t.toLowerCase().replace(/[^a-z]/g, '')}"><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div></div></section>` });
}

/* ---------- BEGLEITUNG ---------- */
{
  const bc = [['/', 'Start'], ['/begleitung/', 'Begleitung mit Angie']];
  layout({ p: '/begleitung/', title: 'Begleitung mit Angie: ADHS, Alltag, Selbstführung | ADHS Begleitung', desc: 'Persönliche Begleitung 1:1 online mit Angie für Menschen mit ADHS, Angehörige und Eltern. Einzeltermin 149 €, Erstgespräch kostenlos. Keine Diagnose, keine Therapie.',
    schema: [bcSchema(bc), { '@type': 'Service', name: 'ADHS-Begleitung 1:1 mit Angie', provider: { '@id': B + '/#org' }, areaServed: 'DE', serviceType: 'Mentoring und Begleitung (Coaching)', offers: { '@type': 'Offer', price: '149', priceCurrency: 'EUR', description: '60 Minuten 1:1, persönliches Handout, Learning Unit, eigener Bereich bei CoGether' } }],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>Begleitung mit Angie</h1><p class="lede">Wenn Wissen allein nicht reicht: persönliche Begleitung, online und 1:1. Für Menschen mit ADHS, Angehörige und Eltern.</p></div></section>
<section class="sec"><div class="wrap layout" style="padding:0">
  <div class="prose">
    <h2 style="margin-top:0">Worum es geht</h2>
    <p>Angie ist Mentorin, Co- und Wegbegleiterin bei CoGether und Stimme des Podcasts „Gedankenkotze“. Sie begleitet aus eigenem Alltag mit AD(H)S, mit langjähriger Führungserfahrung, Erfahrung in der Schulung von Führungspersonal und zahlreichen Weiterbildungen.</p>
    <p>Sie hört zu, fragt nach, teilt Wissen und eigene Erfahrungen als Angebot und sagt Dir auch, wenn ihr etwas auffällt. Du musst Dich nicht erklären und nicht funktionieren.</p>
    <h2>Themen</h2><ul><li>ADHS und Neurodivergenz im Alltag, ohne dass eine Diagnose Dich definiert</li><li>Überforderung, Reizüberflutung und Gedankenchaos</li><li>Grenzen und Bedürfnisse früher wahrnehmen</li><li>Beziehungen und wiederkehrende Konflikte</li><li>Selbstwert und Vertrauen in Dich selbst</li></ul>
    <h2>Was enthalten ist (Einzeltermin, 149 €)</h2><ul><li>60 Minuten 1:1 mit Angie</li><li>Persönliches Premium-Handout zu Deiner Stunde</li><li>Persönliche Learning Unit zur Vertiefung</li><li>Eigener Bereich bei CoGether und Austausch zwischen den Terminen</li></ul>
    <p>Längere Begleitungen über 3 oder 6 Monate und die Gruppenbegleitung UNGEFILTERT findest Du mit aktuellen Preisen bei <a href="https://cogether.de/coach-angie/" rel="noopener">CoGether</a>.</p>
    <div class="box box--warn"><b>Grenzen:</b> Begleitung ersetzt keine Diagnose, keine ärztliche und keine psychotherapeutische Behandlung. Angie stellt keine Diagnosen und behandelt keine psychischen Erkrankungen.</div>
  </div>
  <aside><div class="side-cta" style="margin-top:0"><img src="/assets/img/Coach-Angie.jpeg" alt="Angie" width="421" height="530" style="border-radius:8px;margin-bottom:1rem;aspect-ratio:4/3;object-fit:cover;object-position:center 20%"><h4>Kostenloses Erstgespräch</h4><p>Online per Video, unverbindlich und ohne Druck.</p><a class="btn" href="${BOOK}">Erstgespräch buchen</a></div></aside>
</div></section>` });
}

/* ---------- REDAKTION ---------- */
{
  const bc = [['/', 'Start'], ['/redaktion/', 'Redaktion und Quellen']];
  layout({ p: '/redaktion/', title: 'Redaktion und Quellen: So arbeiten wir | ADHS Begleitung', desc: 'Unsere Redaktionsgrundsätze: Quellenpflicht, keine Heilversprechen, keine Werbung, klare Abgrenzung von Diagnose und Therapie.', schema: [bcSchema(bc)],
    body: `<section class="ph"><div class="wrap">${crumbs(bc)}<h1>Redaktion und Quellen</h1><p class="lede">So entstehen die Inhalte auf dieser Seite.</p></div></section><section class="sec"><div class="wrap--n prose" style="margin:0 auto">
<h2 style="margin-top:0">Unsere Grundsätze</h2>
<ul><li><b>Quellenpflicht:</b> Jede inhaltliche Aussage stützt sich auf genannte Fachquellen. Zahlen übernehmen wir nur mit Angabe der Quelle.</li><li><b>Keine Diagnosen, keine Heilversprechen:</b> Wir erklären, wir diagnostizieren nicht und empfehlen keine Medikamente.</li><li><b>Keine Werbung:</b> Es gibt keine bezahlten Beiträge und keine Pharma-Partner.</li><li><b>Unterscheidung von Wissen und Erfahrung:</b> Alltagsideen aus der Begleitungspraxis kennzeichnen wir als solche.</li><li><b>Aktualität:</b> Jeder Artikel zeigt das Datum der letzten Aktualisierung.</li></ul>
<h2>Welche Quellen wir nutzen</h2><p>Wir stützen uns auf Angebote von Patientenorganisationen, Krankenkassen und öffentlich-rechtlichen Medien, zum Beispiel ADHS Deutschland e. V., BARMER, NDR Ratgeber und die Apotheken Umschau. Die verwendeten Quellen stehen am Ende jedes Artikels.</p>
<h2>Fehler melden</h2><p>Wenn Dir ein Fehler auffällt oder eine Quelle nicht mehr stimmt, schreib an <a href="mailto:info@cogether.de?subject=Hinweis%20ADHS%20Begleitung">info@cogether.de</a>. Wir prüfen und korrigieren.</p>
<h2>Wer steht dahinter?</h2><p>Herausgeber ist BA Entertainment, Haan (siehe <a href="/impressum/">Impressum</a>). Persönliche Begleitung bietet Angie an (<a href="/begleitung/">Begleitung mit Angie</a>).</p>
</div></section>` });
}

/* ---------- KONTAKT / RECHT ---------- */
layout({ p: '/kontakt/', title: 'Kontakt | ADHS Begleitung', desc: 'Kostenloses Erstgespräch mit Angie buchen oder per E-Mail Kontakt aufnehmen.', schema: [bcSchema([['/', 'Start'], ['/kontakt/', 'Kontakt']])],
  body: `<section class="ph"><div class="wrap">${crumbs([['/', 'Start'], ['/kontakt/', 'Kontakt']])}<h1>Kontakt</h1><p class="lede">Der leichteste Weg ist ein kostenloses Erstgespräch.</p></div></section><section class="sec"><div class="wrap grid g2"><div class="cat" style="cursor:default"><h3>Erstgespräch buchen</h3><p>Online per Video mit Angie, unverbindlich.</p><p style="margin-top:1.2rem"><a class="btn" href="${BOOK}">Termin wählen</a></p></div><div class="cat" style="cursor:default"><h3>E-Mail</h3><p>info@cogether.de</p><p style="margin-top:1.2rem"><a class="btn btn--o" href="mailto:info@cogether.de?subject=ADHS%20Begleitung">E-Mail schreiben</a></p></div></div></section>` });
layout({ p: '/impressum/', title: 'Impressum | ADHS Begleitung', desc: 'Impressum und Anbieterkennzeichnung gemäß § 5 DDG.',
  body: `<section class="ph"><div class="wrap"><h1>Impressum</h1><p class="lede">Angaben gemäß § 5 DDG.</p></div></section><section class="sec"><div class="wrap--n prose" style="margin:0 auto"><h2 style="margin-top:0">Anbieter</h2><p>BA Entertainment<br>Alleestraße 15<br>42781 Haan<br>Deutschland</p><h2>Kontakt</h2><p>E-Mail: info@cogether.de<br>Website: adhsbegleitung.de</p><h2>Vertretungsberechtigte Person</h2><p>S. Ulrich</p><h2>Umsatzsteuer-ID</h2><p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE352483219</p><h2>Haftung für Inhalte</h2><p>Die Inhalte dienen der Information und ersetzen keine ärztliche oder psychotherapeutische Beratung und Behandlung.</p></div></section>` });
layout({ p: '/datenschutz/', title: 'Datenschutz | ADHS Begleitung', desc: 'Datenschutzhinweise für adhsbegleitung.de.',
  body: `<section class="ph"><div class="wrap"><h1>Datenschutz</h1><p class="lede">Diese Seite setzt keine Tracking-Cookies und verwendet keine Analyse- oder Werbedienste.</p></div></section><section class="sec"><div class="wrap--n prose" style="margin:0 auto"><h2 style="margin-top:0">Verantwortliche Stelle</h2><p>BA Entertainment, Alleestraße 15, 42781 Haan, E-Mail: info@cogether.de</p><h2>Hosting und Server-Logdaten</h2><p>Die Seite wird als statische Website über GitHub Pages ausgeliefert. Beim Aufruf verarbeitet der Hoster technisch notwendige Daten (zum Beispiel IP-Adresse, Zeitpunkt, aufgerufene Seite), um die Seite auszuliefern und die Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p><h2>Schriftarten</h2><p>Die Schriftarten (Manrope, Source Sans 3) werden von Google Fonts geladen. Dabei wird Deine IP-Adresse an Google übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p><h2>Suche</h2><p>Die Suche läuft vollständig in Deinem Browser. Eingaben werden nicht übertragen oder gespeichert.</p><h2>Terminbuchung und Kontakt</h2><p>Für die Buchung eines Erstgesprächs wirst Du zu cogether.de weitergeleitet. Dort gelten die <a href="https://cogether.de/datenschutz/">Datenschutzhinweise von CoGether</a>. Wenn Du uns per E-Mail schreibst, verarbeiten wir Deine Angaben zur Bearbeitung Deiner Anfrage.</p><h2>Deine Rechte</h2><p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde. Schreib dazu an info@cogether.de.</p></div></section>` });

/* ---------- Technik ---------- */
wr('search-index.json', JSON.stringify(A.map((a) => ({ t: a.title, d: a.desc, c: catBy[a.cat].name, u: `/artikel/${a.slug}/`, k: a.sections.map((s) => s[1]).join(' ') + ' ' + a.faq.map((f) => f[0]).join(' ') }))));
const urls = ['/', ...CATS.filter((c) => artsOf(c.slug).length).map((c) => `/thema/${c.slug}/`), ...A.map((a) => `/artikel/${a.slug}/`), '/glossar/', '/begleitung/', '/redaktion/', '/kontakt/', '/impressum/', '/datenschutz/'];
wr('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${B}${u}</loc><lastmod>${DATE}</lastmod><priority>${u === '/' ? '1.0' : u.startsWith('/artikel/') ? '0.9' : '0.6'}</priority></url>`).join('\n')}\n</urlset>\n`);
wr('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${B}/sitemap.xml\n`);
wr('llms.txt', `# ADHS Begleitung\n\n> Quellenbasierte Informationen zu ADHS bei Erwachsenen (erkennen, Diagnose, Behandlung, Alltag, Gefühle, Beziehung, Arbeit) und persönliche Begleitung mit Angie (Coaching, keine Therapie). Herausgeber: BA Entertainment, Alleestraße 15, 42781 Haan. Kontakt: info@cogether.de. Stand: 09.11.2026.\n\n## Artikel\n\n${A.map((a) => `- [${a.title}](${B}/artikel/${a.slug}/): ${a.desc}`).join('\n')}\n\n## Weitere Seiten\n\n- [Glossar](${B}/glossar/)\n- [Begleitung mit Angie](${B}/begleitung/)\n- [Redaktion und Quellen](${B}/redaktion/)\n`);
wr('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#1d4ed8"/><text x="32" y="45" text-anchor="middle" font-family="Arial" font-weight="800" font-size="38" fill="#fff">A</text></svg>`);
wr('CNAME', 'adhsbegleitung.de\n');
wr('404.html', `<!doctype html><meta charset="utf-8"><title>Seite nicht gefunden</title><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/assets/site.css"><body><main class="wrap" style="padding:6rem 0"><span class="eyebrow">404</span><h1>Diese Seite gibt es nicht.</h1><p class="lede" style="margin:1rem 0 2rem">Vielleicht hilft die Suche auf der Startseite.</p><a class="btn" href="/">Zur Startseite</a></main></body>`);
console.log('Artikel:', A.length, 'URLs:', urls.length);
