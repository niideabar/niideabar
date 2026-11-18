// [nombre, precio sala, precio terraza, nota opcional]
const CARTA = [
  {id:"raciones", t:"Raciones", items:[
    ["Tequeños (6 uds.)",7.00,7.50],
    ["Patatas gajo 4 salsas",5.00,5.40],
    ["Patatas boniato 4 salsas",5.50,6.00],
    ["Aros de cebolla con mayonesa",4.50,4.90],
    ["Quesadillas 4 quesos",4.00,4.40],
    ["Quesadillas 4 quesos con pollo",5.00,5.40],
    ["Quesadilla 4 quesos con pulled",5.50,6.00],
    ["Quesadilla ibérica con jamón",5.50,6.00],
    ["Nachos con queso y salsa guacamole",5.00,5.40],
    ["Rabas de calamar",8.50,8.60],
    ["Lágrimas de pollo",7.00,7.50,"Salsa a elegir: mayonesa, kétchup, barbacoa o baconesa"],
    ["Croquetas de jamón (6 uds.)",3.90,4.30],
    ["Alitas de pollo con barbacoa",7.00,7.50],
    ["Empanadillas criollas (2 uds.)",4.20,4.60,"Jamón y queso, espinacas, caprese, pollo"],
  ]},
  {id:"asiatico", t:"Asiático", items:[
    ["Gyozas de pollo y vegetales",6.50,7.00],
    ["Samosas de pollo al curry (6 uds.)",5.00,5.40],
  ]},
  {id:"perritos", t:"Perritos", note:"Con patatas chips incluidas", items:[
    ["Perrito clásico",3.00,3.30],
    ["Gratinado cebolla frita",3.30,3.70],
    ["Gratinado bacon",3.50,3.90],
    ["Gratinado ibérico",3.50,3.90],
  ]},
  {id:"pizzas", t:"Pizzas", items:[
    ["Margarita",6.00,6.50],
    ["Cuatro quesos",7.00,7.50],
    ["Barbacoa",7.00,7.50],
    ["Doble pepperoni",7.00,7.50],
    ["Jamón y champiñón",7.00,7.50],
  ]},
  {id:"hamburguesas", t:"Hamburguesas y más", items:[
    ["Hamburguesa de pollo con pan rústico",4.80,5.20],
    ["Hamburguesa de pulled pork, queso gratinado",4.90,5.30],
    ["Sándwich mixto con queso gratinado",4.00,4.40],
  ]},
  {id:"postres", t:"Postres muy dulces", items:[
    ["Coulant de chocolate",4.00,4.40],
    ["Gofre de chocolate",4.00,4.40],
  ]},
  {id:"grifo", t:"Cervezas de grifo", two:["Doble","Pinta"], items:[
    ["Amstel",[2.50,3.70],[2.90,3.90]],
    ["18/70 La Rubia",[2.70,3.90],[3.10,4.00]],
    ["Lagunitas IPA",[3.30,4.20],[3.70,4.40]],
  ]},
  {id:"tercios", t:"Tercios de botella", items:[
    ["Ladrón de Manzanas",2.90,3.20],
    ["Águila",2.90,3.20],
    ["Águila sin filtrar",3.30,3.70],
    ["Heineken",3.30,3.70],
    ["Cruzcampo Gran Reserva",3.70,4.10],
    ["Guinness",4.20,4.60],
    ["La Cibeles",3.60,4.00],
    ["Cibeles Imperial IPA",3.60,4.00],
    ["El Alcázar",2.90,3.20],
    ["Desperados",3.90,4.30],
    ["Corona",3.90,4.30],
    ["Judas",4.50,4.90],
    ["Mort Subite",4.50,4.90],
    ["Paulaner (0,5 L)",4.50,4.90],
    ["Hop House 13",4.00,4.40],
    ["Cibeles sin gluten",3.60,4.00],
    "Sin alcohol · 0,0",
    ["Heineken 0,0",3.30,3.70],
    ["Amstel Oro 0,0",2.90,3.20],
  ]},
  {id:"vinos", t:"Vinos", note:"Precio por copa", items:[
    ["Tinto tempranillo",2.70,3.00],
    ["Rioja tinto El Coto",3.70,4.10],
    ["Ribera del Duero tinto",3.60,4.00],
    ["Blanco El Coto",3.60,4.00],
    ["Blanco semidulce El Coto",3.60,4.00],
    ["Botella de vino",17.00,18.00,"El vino que quieras de la carta"],
    ["Tinto de verano (450 ml)",4.00,4.40],
  ]},
  {id:"cocteles", t:"Cócteles", items:[
    ["Mojito",6.00,6.50],
    ["Mojito de fresa",6.20,6.70],
    ["Mojito de mango",6.20,6.70],
    ["Caipiriña",6.00,6.50],
    ["Aperol Spritz",6.00,6.50],
  ]},
  {id:"copas", t:"Copazos", note:"Refresco incluido (excepto Monster, +1 €)", items:[
    ["Arehucas · Larios · DYC",5.00,5.40],
    ["Santa Teresa · Brugal · Barceló · Cacique · Bombay · Beefeater · Seagram's",5.80,6.50],
    ["White Label · Red Label · Ballantine's · J&B · Absolut · Fernet Branca · Jägermeister",5.80,6.50],
  ]},
  {id:"refrescos", t:"Refrescos", items:[
    ["Coca-Cola, Fanta, Sprite…",2.50,2.80],
    ["Nestea",3.20,3.60],
  ]},
];

var FICHAS = window.FICHAS || {};  // las fichas están en fichas.js

const eur = v => v.toFixed(2).replace('.',',') + ' €';
(function(){
  if (!document.getElementById('menu')) return;
  const idx = (window.TARIFA === 'terraza') ? 2 : 1;
  document.getElementById('nav').innerHTML =
    CARTA.map(s => `<a href="#${s.id}">${s.t}</a>`).join('');
  document.getElementById('menu').innerHTML = CARTA.map(s => {
    let h = `<section id="${s.id}"><h2>${s.t}</h2>`;
    if (s.note) h += `<div class="note">${s.note}</div>`;
    if (s.two) h += `<div class="head2"><span>${s.two[0]}</span><span>${s.two[1]}</span></div>`;
    h += s.items.map(it => {
      if (typeof it === 'string') return `<div class="subt">${it}</div>`;
      const nota = it[3] ? `<small>${it[3]}</small>` : '';
      const pr = s.two
        ? `<div class="pp"><span class="p2">${eur(it[idx][0])}</span><span class="p2">${eur(it[idx][1])}</span></div>`
        : `<span class="p">${eur(it[idx])}</span>`;
      const fi = FICHAS[it[0]];
      if (!fi) return `<div class="row"><span class="n">${it[0]}${nota}</span>${pr}</div>`;
      const mini = fi.foto ? `<span class="foto"><picture><source srcset="/img/carta/${fi.foto}.webp" type="image/webp"><img src="/img/carta/${fi.foto}.png" alt="" loading="lazy" width="1200" height="900"></picture></span>` : '';
      return `<button type="button" class="row con-ficha${fi.foto?' con-foto':''}" data-n="${it[0].replace(/"/g,'&quot;')}">${mini}<span class="n">${it[0]}${nota}<em class="ver">Ver ficha ›</em></span>${pr}</button>`;
    }).join('');
    return h + `</section>`;
  }).join('');
})();

// Resalta en la barra la sección que se está viendo
(function(){
  if (!document.getElementById('nav')) return;
  const links=[...document.querySelectorAll('#nav a')];
  const obs=new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){
      links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id));
      const on=links.find(a=>a.classList.contains('on'));
      if(on){ const n=document.getElementById('nav'); n.scrollTo({left:on.offsetLeft-n.clientWidth/2+on.clientWidth/2,behavior:'smooth'}); }
    }});
  },{rootMargin:'-60px 0px -70% 0px'});
  document.querySelectorAll('main section').forEach(s=>obs.observe(s));
})();


// Ficha al tocar un plato o una cerveza (mismo esquema que las fichas de JB)
(function(){
  const menu=document.getElementById('menu'); if(!menu) return;
  const idx=(window.TARIFA==='terraza')?2:1;
  const esc=t=>String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
  const pic=(dir,f,cls)=>`<picture><source srcset="/img/${dir}/${f}.webp" type="image/webp"><img${cls?` class="${cls}"`:''} src="/img/${dir}/${f}.png" alt=""></picture>`;
  const platos={};
  CARTA.forEach(s=>s.items.forEach(it=>{ if(Array.isArray(it)) platos[it[0]]={it,s}; }));
  const precioDe=n=>{ const d=platos[n]; if(!d) return null; const v=d.it[idx];
    return Array.isArray(v) ? v.map((x,i)=>({et:(d.s.two||[])[i]||'',v:x})) : [{et:'',v}]; };

  const capa=document.createElement('div'); capa.className='ficha-capa';
  capa.innerHTML='<div class="ficha" role="dialog" aria-modal="true"></div>';
  document.body.appendChild(capa);
  const caja=capa.firstChild; let abierta=false;

  function abrir(n, hist){
    const f=FICHAS[n]; if(!f) return;
    const pr=(precioDe(n)||[]).map(p=>`<div class="fi-pr">${p.et?`<span>${esc(p.et)}</span>`:''}${eur(p.v)}</div>`).join('');
    let h='<div class="fi-barra"><button type="button" class="fi-x" aria-label="Cerrar">×</button></div>';
    if(f.tipo==='cerveza'){
      const datos=[['Estilo',f.estilo],['Origen',f.origen],['Alcohol',f.alcohol],['Amargor',f.amargor],['Servicio',f.servicio]]
        .filter(x=>x[1]).map(x=>`<div><dt>${x[0]}</dt><dd>${esc(x[1])}</dd></div>`).join('');
      const mar=(f.marida||[]).filter(m=>platos[m]).map(m=>{ const p=precioDe(m)[0];
        return `<button type="button" class="fi-mar" data-plato="${esc(m)}">${esc(m)} <b>${eur(p.v)}</b></button>`; }).join('');
      h+=`<div class="fi-top"><div class="fi-vaso">${pic('cervezas',f.vaso)}</div>
          <div class="fi-cab">${f.logo?pic('cervezas',f.logo,'fi-logo'):''}<h2>${esc(n)}</h2><div class="fi-precios">${pr}</div></div></div>
        <dl class="fi-datos">${datos}</dl>
        <h4>Nota de cata</h4><p>${esc(f.cata)}</p>
        ${f.historia?`<h4>Un poco de historia</h4><p>${esc(f.historia)}</p>`:''}
        ${mar?`<h4>Pídela con…</h4><div class="fi-mars">${mar}</div>`:''}`;
    } else {
      h+=`${f.foto?`<div class="fi-foto">${pic('carta',f.foto)}</div>`:''}
        <div class="fi-cab fi-cab-plato"><h2>${esc(n)}</h2><div class="fi-precios">${pr}</div></div>
        ${f.desc?`<p>${esc(f.desc)}</p>`:''}
        ${f.lleva?`<h4>Lleva</h4><div class="fi-chips">${f.lleva.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:''}
        ${f.alergenos?`<h4>Alérgenos</h4><div class="fi-chips al">${f.alergenos.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`:''}`;
      const cervezas=Object.keys(FICHAS).filter(k=>FICHAS[k].tipo==='cerveza'&&(FICHAS[k].marida||[]).includes(n)&&platos[k]).slice(0,4);
      if(cervezas.length) h+=`<h4>Pídelo con…</h4><div class="fi-mars">${cervezas.map(k=>{const p=precioDe(k)[0];
        return `<button type="button" class="fi-mar" data-plato="${esc(k)}">${esc(k)} <b>${eur(p.v)}</b></button>`;}).join('')}</div>`;
    }
    h+='<button type="button" class="fi-volver">‹ Volver a la carta</button>';
    caja.innerHTML=h; caja.scrollTop=0;
    capa.classList.add('on'); document.documentElement.classList.add('ficha-abierta'); abierta=true;
    if(hist!==false){ try{history.pushState({ficha:n},'');}catch(e){} }
  }
  function cerrar(desdeHist){
    if(!abierta) return; capa.classList.remove('on'); document.documentElement.classList.remove('ficha-abierta'); abierta=false;
    if(!desdeHist){ try{history.back();}catch(e){} }
  }
  function filaDe(n){ return [...menu.querySelectorAll('.con-ficha, .row')].find(r=>(r.dataset.n||r.querySelector('.n')?.firstChild?.textContent||'').trim()===n); }
  capa.addEventListener('click',e=>{
    if(e.target===capa||e.target.closest('.fi-x')||e.target.closest('.fi-volver')){ cerrar(); return; }
    const b=e.target.closest('.fi-mar'); if(!b) return;
    const destino=filaDe(b.dataset.plato); cerrar();
    if(destino) setTimeout(()=>{
      if(FICHAS[b.dataset.plato]){ abrir(b.dataset.plato); return; }
      const y=destino.getBoundingClientRect().top+scrollY-(innerHeight-destino.offsetHeight)/2;
      scrollTo({top:Math.max(0,y),behavior:'smooth'}); destino.classList.add('fi-brillo');
      setTimeout(()=>destino.classList.remove('fi-brillo'),1800);
    },350);
  });
  capa.addEventListener('touchmove',e=>{ if(!e.target.closest('.ficha')) e.preventDefault(); },{passive:false});
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') cerrar(); });
  addEventListener('popstate',()=>{ if(abierta) cerrar(true); });
  menu.addEventListener('click',e=>{ const r=e.target.closest('.con-ficha'); if(r) abrir(r.dataset.n); });
})();
