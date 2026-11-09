(function(){
var d=document,h=d.documentElement;
h.classList.add('js');
try{if(localStorage.getItem('calm')==='1'){h.classList.add('calm');}}catch(e){}
function ready(f){if(d.readyState==='loading'){d.addEventListener('DOMContentLoaded',f);}else{f();}}
ready(function(){
  // Navigation
  var b=d.getElementById('burger'),n=d.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  // Ruhemodus
  var t=d.getElementById('calm');
  function sync(){if(t){t.setAttribute('aria-pressed',h.classList.contains('calm')?'true':'false');}}
  sync();
  if(t){t.addEventListener('click',function(){h.classList.toggle('calm');try{localStorage.setItem('calm',h.classList.contains('calm')?'1':'0');}catch(e){}sync();});}
  // Reveal
  var els=[].slice.call(d.querySelectorAll('.card,.head,.loud,.band,.faq details,.prose>*'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.1});
    els.forEach(function(e){e.classList.add('rv');io.observe(e);});
  }
  // Lautester Moment
  var box=d.getElementById('loud');
  if(box){
    var data={
      zeit:['Die Zeit rennt oder steht','Fünf Minuten fühlen sich wie zwanzig an, zwei Stunden wie eine halbe. Viele Menschen mit ADHS erzählen, dass sie Zeit eher als „jetzt“ und „nicht jetzt“ erleben als als Linie.','Stell eine Uhr oder einen Timer sichtbar hin. Plane den Weg rückwärts vom Termin und rechne einen Puffer ein.','/alltag/#zeitblindheit'],
      reize:['Alles ist gleichzeitig zu laut','Geräusche, Licht, Gespräche, Benachrichtigungen: Wenn alles gleich viel Aufmerksamkeit fordert, ist der Kopf schnell voll. Das ist keine Schwäche, sondern oft ein Hinweis auf zu viele offene Kanäle.','Reduziere für zehn Minuten einen Kanal: Kopfhörer, Licht dimmen, Handy in einen anderen Raum. Beobachte, was sich verändert.','/alltag/#reizueberflutung'],
      gefuehle:['Gefühle kommen mit voller Wucht','Ärger, Freude, Scham: Viele erleben ihre Gefühle schnell und stark, manchmal schneller, als sie sie einordnen können. Danach folgt oft die Frage, warum man „schon wieder“ so reagiert hat.','Gib dem Gefühl einen Namen, bevor Du handelst. Ein Satz reicht: „Gerade ist da Ärger, und ich warte zwei Minuten.“','/alltag/#gefuehle'],
      starten:['Anfangen ist das Schwerste','Du weißt, was zu tun ist, und kommst trotzdem nicht in Gang. Das hat selten mit Faulheit zu tun. Häufig fehlt ein erster, kleiner und konkreter Schritt, der sich machbar anfühlt.','Mach den ersten Schritt lächerlich klein: Datei öffnen, Teller in die Spüle, einen Satz schreiben. Stell einen Timer auf fünf Minuten.','/alltag/#starten'],
      chaos:['Chaos auf Tisch und im Kopf','Papier stapelt sich, Dinge verschwinden, Pläne ändern sich im Minutentakt. Standard-Ordnungssysteme scheitern oft, weil sie auf ein anderes Gehirn zugeschnitten sind.','Wenn etwas sichtbar bleiben muss, leg es sichtbar hin. Dinge bekommen einen festen Platz an dem Ort, an dem Du sie benutzt.','/alltag/#struktur'],
      beziehung:['Missverständnisse mit Menschen, die mir wichtig sind','Vergessene Absprachen, unterbrochene Sätze, das Gefühl, nicht verstanden zu werden: Beziehungen geraten schnell unter Druck, wenn niemand erklärt, was im Kopf passiert.','Sprich eine Sache aus, die Du brauchst, in einem Satz, ohne Vorwurf: „Mir hilft es, wenn Du mir das aufschreibst.“','/beziehungen/']
    };
    var out=d.getElementById('loud-out');
    function show(k){
      var x=data[k];
      out.innerHTML='<div><h4>Wie es sich anfühlen kann</h4><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div><div><h4>Ein kleiner Versuch für heute</h4><p>'+x[2]+'</p><p style="margin-top:1.2rem"><a class="btn btn--g" href="'+x[3]+'">Mehr dazu</a></p></div>';
    }
    [].forEach.call(box.querySelectorAll('[data-k]'),function(btn){
      btn.addEventListener('click',function(){
        [].forEach.call(box.querySelectorAll('[data-k]'),function(o){o.setAttribute('aria-pressed','false');});
        btn.setAttribute('aria-pressed','true');show(btn.getAttribute('data-k'));
      });
    });
    var first=box.querySelector('[data-k]');if(first){first.setAttribute('aria-pressed','true');show(first.getAttribute('data-k'));}
  }
});
})();
