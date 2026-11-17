// OFERTAS CON VENTANA HORARIA
// Cada oferta solo se ve en las cartas indicadas, entre las fechas y en la franja horaria (hora de Madrid).
// - noches: fecha de la primera y la última noche (AAAA-MM-DD). Si la franja pasa de medianoche,
//   la noche del día X dura hasta la hora de fin del día X+1.
// - seccion: id de la sección de la carta donde además se marca la oferta (opcional).
// Para quitar una oferta antes de tiempo, bórrala de la lista o pon activa:false.
const OFERTAS = [
  {
    activa: true,
    titulo: "Chupito de la casa gratis con cada copa",
    texto: "Síguenos en Instagram y esta noche, de 21:00 a 00:30, te invitamos a un chupito de la casa con cada copa. Enséñale al camarero que nos sigues al pedir.",
    enlace: { texto: "Seguir a @niideabar", url: "https://www.instagram.com/niideabar/" },
    chip: "🥃 Chupito gratis con cada copa si nos sigues en Instagram",
    tarifas: ["sala"],
    noches: { desde: "2026-11-17", hasta: "2026-11-30" },
    inicio: "21:00",
    fin: "00:30",
    seccion: "copas",
  },
];

(function(){
  const tarifa = window.TARIFA || "sala";

  // Fecha y hora actuales en Madrid
  function ahoraMadrid(){
    const f = new Intl.DateTimeFormat("en-CA", {timeZone:"Europe/Madrid", year:"numeric", month:"2-digit",
      day:"2-digit", hour:"2-digit", minute:"2-digit", hourCycle:"h23"});
    const p = Object.fromEntries(f.formatToParts(new Date()).map(x => [x.type, x.value]));
    return { fecha: `${p.year}-${p.month}-${p.day}`, min: (+p.hour) * 60 + (+p.minute) };
  }
  const aMin = hhmm => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  function diaAnterior(iso){
    const d = new Date(iso + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() - 1);
    return d.toISOString().slice(0, 10);
  }

  function nocheActual(o){
    const { fecha, min } = ahoraMadrid();
    const ini = aMin(o.inicio), fin = aMin(o.fin);
    if (fin > ini) return (min >= ini && min < fin) ? fecha : null;
    if (min >= ini) return fecha;
    if (min < fin) return diaAnterior(fecha);
    return null;
  }
  function estaActiva(o){
    if (!o.activa || !o.tarifas.includes(tarifa)) return false;
    const noche = nocheActual(o);
    return noche !== null && noche >= o.noches.desde && noche <= o.noches.hasta;
  }
  // Ventana emergente (mismo estilo que las fichas)
  let capa=null;
  function ventana(o){
    if(!capa){
      capa=document.createElement('div'); capa.className='ficha-capa oferta-capa';
      capa.innerHTML='<div class="ficha oferta-ficha" role="dialog" aria-modal="true"></div>';
      document.body.appendChild(capa);
      capa.addEventListener('click',e=>{
        if(e.target===capa||e.target.closest('.fi-x')||e.target.closest('.fi-volver')) cerrar();
      });
      document.addEventListener('keydown',e=>{ if(e.key==='Escape') cerrar(); });
    }
    capa.firstChild.innerHTML =
      '<div class="fi-barra"><button type="button" class="fi-x" aria-label="Cerrar">×</button></div>' +
      `<div class="of-emoji">🥃</div>` +
      `<div class="of-et">Oferta de hoy · de ${o.inicio} a ${o.fin}</div>` +
      `<h2>${o.titulo}</h2><p>${o.texto}</p>` +
      (o.enlace ? `<a class="of-btn" href="${o.enlace.url}" target="_blank" rel="noopener">${o.enlace.texto}</a>` : '') +
      '<button type="button" class="fi-volver">Ver la carta</button>';
    capa.firstChild.scrollTop=0;
    capa.classList.add('on'); document.documentElement.classList.add('ficha-abierta');
  }
  function cerrar(){
    if(!capa) return; capa.classList.remove('on'); document.documentElement.classList.remove('ficha-abierta');
  }

  function pintar(){
    document.querySelectorAll(".oferta-chip").forEach(e => e.remove());
    const activas = OFERTAS.filter(estaActiva);
    if (!activas.length) { cerrar(); return; }
    if (!document.getElementById("menu")) return;
    activas.forEach((o, i) => {
      if (o.seccion) {
        const h = document.querySelector(`#${o.seccion} h2`);
        if (h) {
          const c = document.createElement("button");
          c.type = "button"; c.className = "oferta-chip";
          c.textContent = (o.chip || ("🥃 " + o.titulo)) + " · hasta las " + o.fin;
          c.addEventListener("click", () => ventana(o));
          h.insertAdjacentElement("afterend", c);
        }
      }
      // Se abre sola una vez por noche y dispositivo
      const clave = "oferta-vista:" + o.titulo + ":" + nocheActual(o);
      let vista = false; try { vista = localStorage.getItem(clave) === "1"; } catch(e) {}
      if (!vista && i === 0) {
        ventana(o);
        try { localStorage.setItem(clave, "1"); } catch(e) {}
      }
    });
  }

  function iniciar(){ pintar(); setInterval(pintar, 60000); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
