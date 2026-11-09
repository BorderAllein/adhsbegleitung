const fs = require('fs');
const root = __dirname + '/../';
let t = fs.readFileSync(root + 'gen2.cjs', 'utf8');
if (t.includes('Angies Geschichte')) { console.log('schon drin'); process.exit(0); }

// Startseite: Abschnitt "Angies Geschichte" vor "Qualität vor Menge"
const story = `<section class="sec" id="angie"><div class="wrap story">
  <div class="blobph"><svg class="blobph__star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z"/></svg><div class="blobph__img"><img src="/assets/img/angie-portrait.jpg" alt="Angie im Porträt" width="323" height="501" loading="lazy"></div></div>
  <div class="prose">
    <span class="eyebrow">Angies Geschichte</span>
    <h2 style="font-size:clamp(1.8rem,3vw,2.5rem);margin-bottom:1.2rem">Sie weiß, wie es ist, gegen sich selbst zu kämpfen.</h2>
    <p>Angie begleitet Menschen mit ADHS, weil sie selbst mittendrin steckt. Sie lebt mit ADHS, und sie lebt mit ME/CFS, einer chronischen Erschöpfungserkrankung, und mit Fibromyalgie, einer chronischen Schmerzerkrankung.</p>
    <p>Das heißt: Kraft ist bei ihr keine Selbstverständlichkeit. Sie muss sie sich immer wieder neu zusammensuchen, Pausen einplanen, Prioritäten setzen und mit Tagen umgehen, die anders laufen als geplant. Und sie macht trotzdem weiter. Nicht, weil sie unverwüstlich wäre, sondern weil sie gelernt hat, mit ihrer Energie zu haushalten und dem Ganzen auf ihre Art zu trotzen.</p>
    <blockquote class="callout"><b>„Ich weiß, wie es ist, sich jahrelang zu fragen, warum man nicht einfach so funktioniert wie andere.“</b> Angie</blockquote>
    <p>Genau diese Erfahrung bringt sie in ihre Begleitung ein. Dazu kommen langjährige Führungserfahrung, die Schulung von Führungspersonal und viele Weiterbildungen. Bei ihr musst Du nicht funktionieren, Dich nicht erklären und keine richtigen Antworten haben.</p>
    <div class="chips"><span>ADHS</span><span>ME/CFS</span><span>Fibromyalgie</span></div>
    <p style="margin-top:1.6rem"><a class="btn" href="/begleitung/">Mehr über die Begleitung</a></p>
  </div>
</div></section>

`;
const marker = '<section class="sec sec--soft"><div class="wrap grid g2" style="align-items:center;gap:3rem">';
if (!t.includes(marker)) throw new Error('Marker fehlt');
t = t.replace(marker, story + marker);

// Begleitung: kurzer Absatz zur Geschichte
t = t.replace("<p>Angie ist Mentorin, Co- und Wegbegleiterin bei CoGether und Stimme des Podcasts „Gedankenkotze“. Sie begleitet aus eigenem Alltag mit AD(H)S, mit langjähriger Führungserfahrung, Erfahrung in der Schulung von Führungspersonal und zahlreichen Weiterbildungen.</p>",
  "<p>Angie ist Mentorin, Co- und Wegbegleiterin bei CoGether und Stimme des Podcasts „Gedankenkotze“. Sie begleitet aus eigenem Alltag mit AD(H)S, mit langjähriger Führungserfahrung, Erfahrung in der Schulung von Führungspersonal und zahlreichen Weiterbildungen.</p><p>Angie lebt außerdem mit ME/CFS und Fibromyalgie. Sie kennt es aus eigener Erfahrung, Kraft immer wieder neu sammeln zu müssen, und weiß, was es heißt, den Alltag trotz allem zu gestalten. <a href=\"/#angie\">Angies Geschichte lesen</a></p>");
t = t.replace('site.css?v=6', 'site.css?v=7');
fs.writeFileSync(root + 'gen2.cjs', t);
fs.appendFileSync(root + 'assets/site.css', '\n.story{display:grid;grid-template-columns:.8fr 1.2fr;gap:3.4rem;align-items:center}.chips{display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1.2rem}.chips span{background:var(--peach);color:var(--blue-d);border-radius:999px;padding:.45rem 1rem;font:600 .85rem var(--head)}\n@media(max-width:1000px){.story{grid-template-columns:1fr;gap:2rem}}\n');
console.log('ok');
