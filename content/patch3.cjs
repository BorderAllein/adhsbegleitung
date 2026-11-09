const fs = require('fs');
const root = __dirname + '/../';
let t = fs.readFileSync(root + 'gen2.cjs', 'utf8');
// Header-Logo: Bild + Wortmarke
t = t.replace("const logo = hasLogo ? `<img src=\"/assets/img/logo.${hasLogo}\" alt=\"ADHS Begleitung\">` : `<span class=\"logo__m\">A</span><span><b>ADHS Begleitung</b><small>Wissen, Orientierung, Begleitung</small></span>`;",
  "const logo = `<img class=\"logo__img\" src=\"/assets/img/logo.png\" width=\"56\" height=\"56\" alt=\"\"><span><b>ADHS Begleitung</b><small>Wissen, Orientierung, Begleitung</small></span>`;");
// Footer-Logo
t = t.replace('<div class="logo" style="color:#fff;margin-bottom:1rem"><span class="logo__m">A</span><span><b style="color:#fff">ADHS Begleitung</b></span></div>', '<div class="logo" style="margin-bottom:1rem"><img class="logo__img" src="/assets/img/logo.png" width="84" height="84" alt="" loading="lazy"><span><b style="color:#fff">ADHS Begleitung</b></span></div>');
// Favicon
t = t.replace('<link rel="icon" href="/favicon.svg" type="image/svg+xml">', '<link rel="icon" href="/assets/img/icon-192.png" type="image/png" sizes="192x192"><link rel="apple-touch-icon" href="/assets/img/icon-192.png">');
t = t.replace('<meta name="twitter:card" content="summary">', '<meta property="og:image" content="https://adhsbegleitung.de/assets/img/logo.png"><meta name="twitter:card" content="summary">');
// Autoren-Avatar
t = t.split('<img src="/assets/img/Coach-Angie.jpeg" alt="Angie" width="84" height="84">').join('<img src="/assets/img/angie-portrait.jpg" alt="Angie" width="84" height="84" loading="lazy">');
// Banner "Ich bin genug" auf Begleitung
t = t.replace("<div class=\"box box--warn\"><b>Grenzen:</b> Begleitung ersetzt", "<figure style=\"margin:2rem 0\"><img src=\"/assets/img/ich-bin-genug.jpg\" alt=\"In den Schnee geschrieben: Ich bin genug. Daneben ein Schmetterling und ein zeigender Finger\" width=\"1200\" height=\"890\" loading=\"lazy\" style=\"border-radius:1.6rem;width:100%;height:auto\"><figcaption style=\"font-size:.9rem;color:var(--mute);margin-top:.6rem\">Ein Satz, der in der Begleitung oft am Anfang steht.</figcaption></figure><div class=\"box box--warn\"><b>Grenzen:</b> Begleitung ersetzt");
t = t.replace('site.css?v=5', 'site.css?v=6');
fs.writeFileSync(root + 'gen2.cjs', t);
let css = fs.readFileSync(root + 'assets/site.css', 'utf8');
if (!css.includes('logo__img')) css += '\n.logo__img{width:56px;height:56px;object-fit:contain;flex:none}.ft .logo__img{width:84px;height:84px}\n.hd .logo{gap:.6rem}\n';
fs.writeFileSync(root + 'assets/site.css', css);
console.log(t.includes('logo__img'), t.includes('ich-bin-genug'));
