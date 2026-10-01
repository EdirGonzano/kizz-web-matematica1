// Kizz Web — motor de routing + render (sin dependencias externas, salvo KaTeX para las fórmulas)

const ROOT = document.getElementById("app");
const LETRAS = ["A", "B", "C", "D"];
const CONFETTI_COLORES = ["#4f83a3", "#f2a53a", "#c97f1e", "#8fb4cc", "#f6c98a"];

// El número de pregunta vive en la URL (#/sesion/11/inicio/2), no en una variable
// en memoria: así "Anterior" es solo navegar el hash, y volver a entrar a una
// sesión (desde Sesión o desde Home) siempre arranca fresco en la pregunta 1,
// sin arrastrar en qué pregunta se había quedado la vez anterior.
function parseHash() {
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  if (parts[0] === "sesion" && parts[1]) {
    const numero = Number(parts[1]);
    if (parts[2] === "inicio" || parts[2] === "cierre") {
      const preguntaNum = parts[3] ? Number(parts[3]) : 1;
      return { view: "quiz", numero, momento: parts[2], preguntaIndex: preguntaNum - 1 };
    }
    return { view: "sesion", numero };
  }
  return { view: "home" };
}

function findSesion(numero) {
  return SESSIONS.find((s) => s.numero === numero);
}

// Las sesiones integradoras y las de evaluación (PC, exámenes) se marcan con un
// borde distinto en la grilla para que se ubiquen de un vistazo al proyectar.
function esIntegradora(tema) {
  return /integradora/i.test(tema);
}

function esEvaluacion(tema) {
  return /pr[aá]ctica calificada|examen parcial|examen final/i.test(tema);
}

// Renderiza las fórmulas \( ... \) con KaTeX dentro del contenedor dado.
// Si el script de auto-render aún no cargó (red lenta), no rompe la app.
function renderMath(container) {
  if (window.renderMathInElement) {
    renderMathInElement(container, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
    });
  }
}

function render() {
  const route = parseHash();
  // La red de nodos de fondo (efecto de bienvenida) solo corre en Home:
  // se apaga en Sesión/Quiz para no distraer durante la proyección.
  if (window.KizzNodos) {
    if (route.view === "home") window.KizzNodos.iniciar();
    else window.KizzNodos.detener();
  }
  if (route.view === "home") return renderHome();
  const sesion = findSesion(route.numero);
  if (!sesion) return renderHome();
  if (route.view === "sesion") return renderSesion(sesion);
  if (route.view === "quiz") return renderQuiz(sesion, route.momento, route.preguntaIndex);
}

function renderHome() {
  const unidadesOrdenadas = Object.keys(UNIDADES).map(Number).sort((a, b) => a - b);

  const grupos = unidadesOrdenadas
    .map((unidadNum) => {
      const sesiones = SESSIONS.filter((s) => s.unidad === unidadNum);
      if (!sesiones.length) return "";
      const cards = sesiones
        .map((s) => {
          const claseExtra = esIntegradora(s.tema) ? "is-integradora" : esEvaluacion(s.tema) ? "is-evaluacion" : "";
          const hito = HITOS[s.numero];
          const tarjetaSesion = `
          <a class="session-card ${claseExtra}" href="#/sesion/${s.numero}">
            <span class="session-card-num">Sesión ${s.numero}</span>
            <span class="session-card-tema">${s.tema}</span>
          </a>`;
          const tarjetaHito = hito
            ? `
          <div class="hito-card">
            <span class="hito-codigo">${hito.codigo}</span>
            <span class="hito-nombre">${hito.nombre}</span>
            <span class="hito-detalle">${hito.detalle}</span>
          </div>`
            : "";
          return tarjetaSesion + tarjetaHito;
        })
        .join("");
      return `
        <section class="unidad-group">
          <h2 class="unidad-title">${UNIDADES[unidadNum]}</h2>
          <div class="session-grid">${cards}</div>
        </section>`;
    })
    .join("");

  ROOT.className = "view-home";
  ROOT.innerHTML = `
    <header class="home-header">
      <p class="home-eyebrow">Matemática I · Ingeniería · UTP</p>
      <h1 class="home-title">Kizz Web</h1>
      <p class="home-docente">Docente Edir Gonzano</p>
      <p class="home-subtitle">Elige una sesión para proyectar sus preguntas de inicio o de cierre.</p>
    </header>
    ${grupos}
  `;
}

function renderSesion(sesion) {
  ROOT.className = "view-sesion";
  ROOT.innerHTML = `
    <a class="back-link" href="#/">&larr; Todas las sesiones</a>
    <div class="sesion-panel">
      <p class="sesion-eyebrow">Sesión ${sesion.numero}</p>
      <h1 class="sesion-tema">${sesion.tema}</h1>
      <div class="sesion-botones">
        <a class="momento-btn momento-inicio" href="#/sesion/${sesion.numero}/inicio">
          <span class="momento-icon">▶</span>
          <span>Preguntas de Inicio</span>
        </a>
        <a class="momento-btn momento-cierre" href="#/sesion/${sesion.numero}/cierre">
          <span class="momento-icon">🏁</span>
          <span>Preguntas de Cierre</span>
        </a>
      </div>
    </div>
  `;
}

function renderQuiz(sesion, momento, preguntaIndexPedido) {
  const preguntas = sesion[momento];
  const index = Math.min(Math.max(preguntaIndexPedido, 0), preguntas.length - 1);
  const pregunta = preguntas[index];
  const esPrimera = index === 0;
  const esUltima = index === preguntas.length - 1;
  const base = `#/sesion/${sesion.numero}/${momento}`;

  const dots = preguntas
    .map((_, i) => `<span class="${i === index ? "is-active" : ""}"></span>`)
    .join("");

  const tiles = pregunta.alternativas
    .map((texto, i) => {
      const esCorrecta = i === pregunta.correcta;
      return `
        <div class="flip-card" data-index="${i}" data-correcta="${esCorrecta}">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <span class="tile-letra">${LETRAS[i]}</span>
              <span class="tile-texto">${texto}</span>
            </div>
            <div class="flip-card-back ${esCorrecta ? "is-correct" : "is-incorrect"}">
              <p class="result-line">
                <span class="result-icon">${esCorrecta ? "✓" : "✕"}</span>
                <span>${esCorrecta ? "¡Correcto!" : "Aún no"}</span>
              </p>
            </div>
            <div class="confetti-layer"></div>
          </div>
        </div>`;
    })
    .join("");

  ROOT.className = "view-quiz";
  ROOT.innerHTML = `
    <a class="back-link" href="#/sesion/${sesion.numero}">&larr; Sesión ${sesion.numero}</a>
    <div class="quiz-panel">
      <p class="quiz-progreso">${momento === "inicio" ? "Inicio" : "Cierre"} · Pregunta ${index + 1} de ${preguntas.length}</p>
      <div class="quiz-dots">${dots}</div>
      <h1 class="quiz-pregunta">${pregunta.pregunta}</h1>
      <div class="answer-grid">${tiles}</div>
      <div class="quiz-siguiente-wrap">
        ${esPrimera ? "" : `<a class="anterior-btn" href="${base}/${index}">← Pregunta anterior</a>`}
        <a class="siguiente-btn" id="btn-siguiente" href="${esUltima ? `#/sesion/${sesion.numero}` : `${base}/${index + 2}`}">${esUltima ? "Volver a la sesión →" : "Siguiente pregunta →"}</a>
      </div>
    </div>
  `;

  ROOT.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      const estabaVolteada = card.classList.contains("is-flipped");
      card.classList.toggle("is-flipped");
      if (!estabaVolteada && card.dataset.correcta === "true") {
        lanzarConfeti(card.querySelector(".confetti-layer"));
      }
    });
  });
}

function lanzarConfeti(layer) {
  if (!layer) return;
  for (let i = 0; i < 16; i++) {
    const pieza = document.createElement("span");
    pieza.className = "confetti-piece";
    const angulo = Math.random() * Math.PI * 2;
    const distancia = 70 + Math.random() * 90;
    pieza.style.setProperty("--dx", `${Math.cos(angulo) * distancia}px`);
    pieza.style.setProperty("--dy", `${Math.sin(angulo) * distancia - 40}px`);
    pieza.style.setProperty("--rot", `${Math.random() * 480 - 240}deg`);
    pieza.style.background = CONFETTI_COLORES[i % CONFETTI_COLORES.length];
    pieza.style.animationDelay = `${Math.random() * 0.08}s`;
    layer.appendChild(pieza);
    pieza.addEventListener("animationend", () => pieza.remove());
  }
}

// Atajos de teclado para presentar sin depender del mouse:
// 1-4 voltea/regresa esa tarjeta, Enter/Espacio/→ avanza, ← retrocede, Esc vuelve a la sesión.
document.addEventListener("keydown", (e) => {
  const route = parseHash();
  if (route.view !== "quiz") return;

  if (e.key === "Escape") {
    location.hash = `#/sesion/${route.numero}`;
    return;
  }

  if (["1", "2", "3", "4"].includes(e.key)) {
    const idx = Number(e.key) - 1;
    const card = ROOT.querySelector(`.flip-card[data-index="${idx}"]`);
    if (card) card.click();
    return;
  }

  if (["Enter", " ", "ArrowRight"].includes(e.key)) {
    e.preventDefault();
    const btn = document.getElementById("btn-siguiente");
    if (btn) btn.click();
    return;
  }

  if (e.key === "ArrowLeft") {
    const btn = ROOT.querySelector(".anterior-btn");
    if (btn) btn.click();
  }
});

// Botón de pantalla completa / modo presentación (útil al proyectar).
const btnFullscreen = document.getElementById("btn-fullscreen");
if (btnFullscreen) {
  btnFullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  });
  document.addEventListener("fullscreenchange", () => {
    const enPantallaCompleta = Boolean(document.fullscreenElement);
    btnFullscreen.textContent = enPantallaCompleta ? "⤡" : "⛶";
    btnFullscreen.title = enPantallaCompleta ? "Salir de pantalla completa" : "Pantalla completa";
  });
}

function renderYFormatear() {
  render();
  renderMath(ROOT);
}

window.addEventListener("hashchange", renderYFormatear);
window.addEventListener("DOMContentLoaded", renderYFormatear);
