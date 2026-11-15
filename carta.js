// [nombre, precio sala, precio terraza, nota opcional]
const CARTA = [
  {id:"raciones", t:"Raciones", items:[
    ["Tequeños (6 uds.)",7.00,7.50],
    ["Patatas gajo 4 salsas",5.00,5.40],
    ["Patatas boniato 4 salsas",5.50,6.00],
    ["Aros de cebolla 2 salsas",4.50,4.90],
    ["Quesadillas 4 quesos",4.00,4.40],
    ["Quesadillas 4 quesos con pollo",5.00,5.40],
    ["Quesadilla 4 quesos con pulled",5.50,6.00],
    ["Quesadilla ibérica con jamón",5.50,6.00],
    ["Nachos con queso y salsas",5.00,5.40],
    ["Rabas de calamar",8.50,8.60],
    ["Lágrimas de pollo",7.00,7.50],
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
    ["Heineken 0,0",3.30,3.70],
    ["Paulaner (0,5 L)",4.50,4.90],
    ["Amstel Oro 0,0",2.90,3.20],
    ["Hop House 13",4.00,4.40],
    ["Cibeles sin gluten",3.60,4.00],
  ]},
  {id:"vinos", t:"Vinos", items:[
    ["Tinto tempranillo",2.70,3.00],
    ["Rioja tinto El Coto",3.70,4.10],
    ["Ribera del Duero tinto",3.60,4.00],
    ["Blanco El Coto",3.60,4.00],
    ["Blanco semidulce El Coto",3.60,4.00],
    ["Tinto de verano (450 ml)",4.00,4.40],
  ]},
  {id:"cocteles", t:"Cócteles", items:[
    ["Mojito",6.00,6.50],
    ["Mojito de fresa",6.20,6.70],
    ["Mojito de mango",6.20,6.70],
    ["Caipiriña",6.00,6.50],
    ["Aperol Spritz",6.00,6.50],
  ]},
  {id:"copas", t:"Copazos", note:"Refresco incluido", items:[
    ["Arehucas · Larios · DYC",5.00,5.40],
    ["Santa Teresa · Brugal · Barceló · Cacique · Bombay · Beefeater · Seagram's",5.80,6.50],
    ["White Label · Red Label · Ballantine's · J&B · Absolut · Fernet Branca · Jägermeister",5.80,6.50],
  ]},
  {id:"refrescos", t:"Refrescos", items:[
    ["Coca-Cola, Fanta, Sprite…",2.50,2.80],
    ["Nestea",3.20,3.60],
  ]},
];

// Fotos de platos: nombre exacto del plato -> archivo en /img/carta/ (sin extensión)
const FOTOS = {
  "Quesadillas 4 quesos": "quesadilla-4-quesos",
};

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
      const nota = it[3] ? `<small>${it[3]}</small>` : '';
      const pr = s.two
        ? `<div class="pp"><span class="p2">${eur(it[idx][0])}</span><span class="p2">${eur(it[idx][1])}</span></div>`
        : `<span class="p">${eur(it[idx])}</span>`;
      const f = FOTOS[it[0]];
      const foto = f ? `<button class="foto" data-f="${f}" aria-label="Ver foto de ${it[0]}"><picture><source srcset="/img/carta/${f}.webp" type="image/webp"><img src="/img/carta/${f}.jpg" alt="${it[0]}" loading="lazy" width="1200" height="900"></picture></button>` : '';
      return `<div class="row${f?' con-foto':''}">${foto}<span class="n">${it[0]}${nota}</span>${pr}</div>`;
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


// Al tocar una foto se ve en grande
(function(){
  if (!document.getElementById('menu')) return;
  const box=document.createElement('div'); box.className='visor'; box.innerHTML='<img alt="">';
  document.body.appendChild(box);
  box.addEventListener('click',()=>box.classList.remove('on'));
  document.getElementById('menu').addEventListener('click',e=>{
    const b=e.target.closest('.foto'); if(!b) return;
    const im=b.querySelector('img'); box.firstChild.src=im.currentSrc||im.src; box.firstChild.alt=im.alt;
    box.classList.add('on');
  });
})();
