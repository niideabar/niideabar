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

  function estaActiva(o){
    if (!o.activa || !o.tarifas.includes(tarifa)) return false;
    const { fecha, min } = ahoraMadrid();
    const ini = aMin(o.inicio), fin = aMin(o.fin);
    let noche = null;
    if (fin > ini) {                         // franja en el mismo día
      if (min >= ini && min < fin) noche = fecha;
    } else {                                 // franja que pasa de medianoche
      if (min >= ini) noche = fecha;
      else if (min < fin) noche = diaAnterior(fecha);
    }
    return noche !== null && noche >= o.noches.desde && noche <= o.noches.hasta;
  }

  function pintar(){
    document.querySelectorAll(".oferta-banner,.oferta-chip").forEach(e => e.remove());
    const activas = OFERTAS.filter(estaActiva);
    if (!activas.length) return;
    const menu = document.getElementById("menu");
    if (!menu) return;
    activas.forEach(o => {
      const b = document.createElement("div");
      b.className = "oferta-banner";
      b.innerHTML = `<div class="of-et">Oferta de hoy · ${o.inicio} a ${o.fin}</div><div class="of-ti">${o.titulo}</div><div class="of-tx">${o.texto}</div>` +
        (o.enlace ? `<a class="of-btn" href="${o.enlace.url}" target="_blank" rel="noopener">${o.enlace.texto}</a>` : "");
      menu.parentNode.insertBefore(b, menu);
      if (o.seccion) {
        const h = document.querySelector(`#${o.seccion} h2`);
        if (h) {
          const c = document.createElement("div");
          c.className = "oferta-chip";
          c.textContent = (o.chip || ("🥃 " + o.titulo)) + " · hasta las " + o.fin;
          h.insertAdjacentElement("afterend", c);
        }
      }
    });
  }

  function iniciar(){ pintar(); setInterval(pintar, 60000); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
