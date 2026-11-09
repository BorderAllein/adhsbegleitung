const fs = require('fs');
const root = __dirname + '/../';
let t = fs.readFileSync(root + 'gen2.cjs', 'utf8');
if (!t.includes('<div class="area">')) {
  t = t.replace('body: `<section class="hero"><div class="wrap hero__g">', 'body: `<div class="area"><section class="hero"><div class="wrap hero__g">');
  const m = '</div></section>\n\n<section class="sec sec--soft"><div class="wrap">\n  <div class="sec__h"><div><h2>Häufige Fragen</h2>';
  if (!t.includes(m)) throw new Error('Marker Themen-Ende fehlt');
  t = t.replace(m, '</div></section></div>\n\n<section class="sec sec--soft"><div class="wrap">\n  <div class="sec__h"><div><h2>Häufige Fragen</h2>');
}
t = t.replace('site.css?v=7', 'site.css?v=8');
fs.writeFileSync(root + 'gen2.cjs', t);
fs.appendFileSync(root + 'assets/site.css', `
/* Großer Pfirsich-Bogen über Hero und Themen-Bereich */
.area{position:relative;isolation:isolate;overflow:hidden}
.area:before{content:"";position:absolute;z-index:-2;top:-14%;right:-4%;width:82%;height:112%;background:var(--peach);border-radius:44% 0 0 64% / 40% 0 0 62%}
.hero:before,.hero:after{display:none}
.hero{background:transparent}
.blobph{width:min(470px,96%);justify-self:start;margin-left:-5.5rem}
.blobph__tag{left:-4%}
@media(max-width:1000px){.area:before{width:130%;right:-30%;top:-4%;height:100%;border-radius:36% 0 0 34% / 22% 0 0 18%}.blobph{margin-left:0;width:min(380px,90%)}}
`);
console.log('ok');
