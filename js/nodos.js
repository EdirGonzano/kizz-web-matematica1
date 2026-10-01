// Kizz Web — efecto de fondo "red de nodos tipo circuito" para la vista Home.
// Solo corre en Home (app.js lo enciende/apaga al cambiar de vista). Sin dependencias,
// respeta prefers-reduced-motion y se pausa cuando la pestaña no está visible.

window.KizzNodos = (function () {
  const canvas = document.getElementById("fx-nodos");
  if (!canvas) return { iniciar() {}, detener() {} };

  const ctx = canvas.getContext("2d");
  const COLOR_NODO = "rgba(151, 163, 174, 0.9)";
  const COLOR_NODO_CERCA = "rgba(242, 165, 58, 0.95)";
  const COLOR_LINEA = "rgba(79, 131, 163, 0.22)";
  const COLOR_LINEA_CERCA = "rgba(242, 165, 58, 0.4)";
  const DENSIDAD = 0.00009;
  const MAX_NODOS = 90;
  const MIN_NODOS = 26;
  const DIST_ENLACE = 150;
  const DIST_MOUSE = 170;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let nodos = [];
  let mouse = { x: -9999, y: -9999 };
  let frameId = null;
  let activo = false;

  function crearNodos() {
    const cantidad = Math.min(MAX_NODOS, Math.max(MIN_NODOS, Math.round(width * height * DENSIDAD)));
    nodos = new Array(cantidad).fill(null).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
    }));
  }

  function ajustarTamano() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    crearNodos();
  }

  function dibujarFrame() {
    ctx.clearRect(0, 0, width, height);

    if (!prefersReducedMotion) {
      for (const n of nodos) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
    }

    for (let i = 0; i < nodos.length; i++) {
      for (let j = i + 1; j < nodos.length; j++) {
        const a = nodos[i];
        const b = nodos[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist >= DIST_ENLACE) continue;
        const cerca =
          Math.hypot(a.x - mouse.x, a.y - mouse.y) < DIST_MOUSE ||
          Math.hypot(b.x - mouse.x, b.y - mouse.y) < DIST_MOUSE;
        ctx.strokeStyle = cerca ? COLOR_LINEA_CERCA : COLOR_LINEA;
        ctx.globalAlpha = 1 - dist / DIST_ENLACE;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    for (const n of nodos) {
      const cerca = Math.hypot(n.x - mouse.x, n.y - mouse.y) < DIST_MOUSE;
      ctx.fillStyle = cerca ? COLOR_NODO_CERCA : COLOR_NODO;
      ctx.beginPath();
      ctx.arc(n.x, n.y, cerca ? 2.6 : 1.7, 0, Math.PI * 2);
      ctx.fill();
    }

    if (activo && !prefersReducedMotion) {
      frameId = requestAnimationFrame(dibujarFrame);
    }
  }

  function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function onMouseLeave() {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  function onVisibilityChange() {
    if (!activo) return;
    if (document.hidden) {
      if (frameId) cancelAnimationFrame(frameId);
    } else if (!prefersReducedMotion) {
      dibujarFrame();
    }
  }

  window.addEventListener("resize", () => {
    if (activo) ajustarTamano();
  });
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseleave", onMouseLeave);
  document.addEventListener("visibilitychange", onVisibilityChange);

  function iniciar() {
    if (activo) return;
    activo = true;
    canvas.style.display = "block";
    ajustarTamano();
    dibujarFrame();
  }

  function detener() {
    if (!activo) return;
    activo = false;
    if (frameId) cancelAnimationFrame(frameId);
    canvas.style.display = "none";
    ctx.clearRect(0, 0, width, height);
  }

  return { iniciar, detener };
})();
