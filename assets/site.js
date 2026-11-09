(function(){
var d=document;
function ready(f){if(d.readyState==='loading'){d.addEventListener('DOMContentLoaded',f);}else{f();}}
ready(function(){
  var b=d.getElementById('burger'),n=d.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  var inp=d.getElementById('q'),res=d.getElementById('qres'),idx=null;
  function norm(s){return (s||'').toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss');}
  function load(cb){if(idx){return cb();}fetch('/search-index.json').then(function(r){return r.json();}).then(function(j){idx=j;cb();}).catch(function(){idx=[];cb();});}
  function run(){
    var q=norm(inp.value.trim());if(q.length<2){res.classList.remove('open');res.innerHTML='';return;}
    var parts=q.split(/\s+/);
    var hits=idx.map(function(a){var hay=norm(a.t+' '+a.d+' '+a.c+' '+a.k);var s=0;parts.forEach(function(p){if(hay.indexOf(p)>-1){s+=1;if(norm(a.t).indexOf(p)>-1){s+=2;}}else{s-=5;}});return {a:a,s:s};}).filter(function(x){return x.s>0;}).sort(function(x,y){return y.s-x.s;}).slice(0,7);
    res.innerHTML=hits.length?hits.map(function(h){return '<a href="'+h.a.u+'">'+h.a.t+'<small>'+h.a.c+'</small></a>';}).join(''):'<a href="#" onclick="return false">Keine Treffer. Versuch es mit einem anderen Begriff.</a>';
    res.classList.add('open');
  }
  if(inp&&res){
    inp.addEventListener('focus',function(){load(function(){});});
    inp.addEventListener('input',function(){load(run);});
    d.addEventListener('click',function(e){if(!res.contains(e.target)&&e.target!==inp){res.classList.remove('open');}});
  }
  var sb=d.getElementById('srch-b');
  if(sb){sb.addEventListener('click',function(){var t=d.getElementById('q');if(t){t.scrollIntoView({behavior:'smooth',block:'center'});t.focus();}else{location.href='/#suche';}});}
});
})();
