// Datos del curso "Matemática I" (UTP, Ingeniería) — Kizz Web
// Cada sesión trae 2 preguntas de inicio y 2 de cierre (opción múltiple, 4 alternativas).
// `correcta` es el índice (0-based) del arreglo `alternativas`.
// Las fórmulas usan delimitadores \\( ... \\) que KaTeX renderiza en pantalla.
// Contenido alineado al Sílabo de Matemática I 2026 (Unidades 1-4, sesiones 1-34).

const UNIDADES = {
  1: "Unidad 1 — Fundamentos de álgebra",
  2: "Unidad 2 — Ecuaciones",
  3: "Unidad 3 — Inecuaciones",
  4: "Unidad 4 — Plano cartesiano y triángulo rectángulo",
};

const SESSIONS = [
  {
    numero: 1,
    unidad: 1,
    tema: "Expresiones algebraicas y reducción de términos semejantes",
    inicio: [
      {
        pregunta: "¿Qué es un término algebraico?",
        alternativas: ["Una expresión con un signo, coeficiente y parte literal", "Una ecuación con dos incógnitas", "Un polinomio de grado cero", "Una desigualdad numérica"],
        correcta: 0,
      },
      {
        pregunta: "¿Los términos \\( 3x^2y \\) y \\( -5x^2y \\) son términos semejantes?",
        alternativas: ["Sí, porque tienen la misma parte literal", "No, porque los coeficientes son distintos", "No, porque uno es negativo", "Sí, pero solo si \\( x=y \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al reducir \\( 3x^2 - 5x + 2x^2 + x - 7 \\), el resultado es:",
        alternativas: ["\\( 5x^2-4x-7 \\)", "\\( 5x^2+4x-7 \\)", "\\( x^2-4x-7 \\)", "\\( 5x^2-6x-7 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Al reducir \\( 5x + 3x - 2x \\), el resultado es:",
        alternativas: ["\\( 6x \\)", "\\( 10x \\)", "\\( 0 \\)", "\\( 8x \\)"],
        correcta: 0,
      },
      {
        pregunta: "Reducir \\( 4a^2b - 7a^2b + 2a^2b \\) da como resultado:",
        alternativas: ["\\( -a^2b \\)", "\\( a^2b \\)", "\\( 13a^2b \\)", "\\( -13a^2b \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 2,
    unidad: 1,
    tema: "Propiedades de la potenciación de expresiones algebraicas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: al reducir \\( 7x - 2x \\), el resultado es:",
        alternativas: ["\\( 5x \\)", "\\( 9x \\)", "\\( 14x \\)", "\\( 0 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: ¿cuál de los siguientes pares son términos semejantes?",
        alternativas: ["\\( 2xy^2 \\) y \\( 5xy^2 \\)", "\\( 2xy \\) y \\( 2x \\)", "\\( 3x^2 \\) y \\( 3x \\)", "\\( 4xy \\) y \\( 4x^2y \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: si \\( 4x-2y \\) más un segundo término da como suma \\( 9x-2y \\), ese segundo término es:",
        alternativas: ["\\( 5x \\)", "\\( 5x-4y \\)", "\\( 13x-4y \\)", "\\( 5y \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Simplificando \\( \\dfrac{x^7}{x^3} \\) se obtiene:",
        alternativas: ["\\( x^4 \\)", "\\( x^{10} \\)", "\\( x^{21} \\)", "\\( x^{7/3} \\)"],
        correcta: 0,
      },
      {
        pregunta: "El valor de \\( x^0 \\) (con \\( x\\neq0 \\)) es:",
        alternativas: ["\\( 0 \\)", "\\( 1 \\)", "\\( x \\)", "Indefinido"],
        correcta: 1,
      },
    ],
  },
  {
    numero: 3,
    unidad: 1,
    tema: "Propiedades de la radicación de expresiones algebraicas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: la propiedad \\( \\dfrac{x^m}{x^n} \\) equivale a:",
        alternativas: ["\\( x^{m-n} \\)", "\\( x^{m+n} \\)", "\\( x^{mn} \\)", "\\( x^{n-m} \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: el resultado de \\( (2x)^3 \\) es:",
        alternativas: ["\\( 8x^3 \\)", "\\( 6x^3 \\)", "\\( 2x^3 \\)", "\\( 8x \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: simplificando \\( \\dfrac{x^5\\cdot x^{-2}}{x^{-1}} \\) se obtiene:",
        alternativas: ["\\( x^4 \\)", "\\( x^2 \\)", "\\( x^6 \\)", "\\( x^{-4} \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "El valor de \\( \\sqrt[3]{27} \\) es:",
        alternativas: ["\\( 3 \\)", "\\( 9 \\)", "\\( 27 \\)", "\\( 1 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Simplificar \\( \\sqrt{50} \\) da como resultado:",
        alternativas: ["\\( 5\\sqrt{2} \\)", "\\( 2\\sqrt{5} \\)", "\\( 10\\sqrt{5} \\)", "\\( 25\\sqrt{2} \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 4,
    unidad: 1,
    tema: "Polinomios: tipos y valor numérico",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: el valor de \\( \\sqrt{16} \\) es:",
        alternativas: ["\\( 4 \\)", "\\( 8 \\)", "\\( 2 \\)", "\\( 256 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: la expresión \\( \\sqrt[3]{x^6} \\) equivale a:",
        alternativas: ["\\( x^2 \\)", "\\( x^3 \\)", "\\( x^6 \\)", "\\( x^{18} \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: el valor de \\( \\sqrt{18} + \\sqrt{2} \\) es:",
        alternativas: ["\\( 4\\sqrt{2} \\)", "\\( \\sqrt{20} \\)", "\\( 2\\sqrt{10} \\)", "\\( 6\\sqrt{2} \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Si \\( P(x) = x^2 + 3x - 4 \\), el valor numérico \\( P(2) \\) es:",
        alternativas: ["\\( 6 \\)", "\\( 2 \\)", "\\( 10 \\)", "\\( -6 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Al sumar \\( (2x^2+3x) + (x^2 - x) \\) se obtiene:",
        alternativas: ["\\( 3x^2+2x \\)", "\\( 2x^2+2x \\)", "\\( 3x^2+4x \\)", "\\( x^2+2x \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 5,
    unidad: 1,
    tema: "Productos notables con expresiones cuadráticas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: un polinomio con exactamente dos términos se llama:",
        alternativas: ["Binomio", "Monomio", "Trinomio", "Polinomio nulo"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: si \\( P(x)=2x^2-x+1 \\), el valor de \\( P(1) \\) es:",
        alternativas: ["\\( 2 \\)", "\\( 0 \\)", "\\( 4 \\)", "\\( -2 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: si \\( P(x)=x^2-2x+3 \\), el valor de \\( P(3)-P(1) \\) es:",
        alternativas: ["\\( 4 \\)", "\\( 2 \\)", "\\( 6 \\)", "\\( 8 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Desarrollar \\( (x-3)^2 \\) da como resultado:",
        alternativas: ["\\( x^2-6x+9 \\)", "\\( x^2+9 \\)", "\\( x^2-9 \\)", "\\( x^2+6x+9 \\)"],
        correcta: 0,
      },
      {
        pregunta: "El resultado de \\( (2x+5)(2x-5) \\) es:",
        alternativas: ["\\( 4x^2-25 \\)", "\\( 4x^2+25 \\)", "\\( 2x^2-25 \\)", "\\( 4x^2-10x-25 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 6,
    unidad: 1,
    tema: "Productos notables con expresiones cúbicas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: desarrollar \\( (x+1)^2 \\) da como resultado:",
        alternativas: ["\\( x^2+2x+1 \\)", "\\( x^2+1 \\)", "\\( x^2-2x+1 \\)", "\\( x^2+x+1 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: el resultado de \\( (x+7)(x-7) \\) es:",
        alternativas: ["\\( x^2-49 \\)", "\\( x^2+49 \\)", "\\( x^2-14x-49 \\)", "\\( x^2+14x-49 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al desarrollar y sumar \\( (x+2)^2 + (x-2)^2 \\) se obtiene:",
        alternativas: ["\\( 2x^2+8 \\)", "\\( 2x^2 \\)", "\\( 2x^2-8 \\)", "\\( 4x^2+8 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Desarrollar \\( (x-2)^3 \\) da como resultado:",
        alternativas: ["\\( x^3-6x^2+12x-8 \\)", "\\( x^3-8 \\)", "\\( x^3+6x^2+12x+8 \\)", "\\( x^3-2x^2+4x-8 \\)"],
        correcta: 0,
      },
      {
        pregunta: "La diferencia de cubos \\( a^3-b^3 \\) se factoriza como:",
        alternativas: ["\\( (a-b)(a^2+ab+b^2) \\)", "\\( (a-b)(a^2-ab+b^2) \\)", "\\( (a+b)(a^2-ab+b^2) \\)", "\\( (a-b)^3 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 7,
    unidad: 1,
    tema: "División algebraica: método de Ruffini y Horner",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: el desarrollo de \\( (a-b)^3 \\) tiene como primer y último término:",
        alternativas: ["\\( a^3 \\) y \\( -b^3 \\)", "\\( a^3 \\) y \\( b^3 \\)", "\\( -a^3 \\) y \\( b^3 \\)", "\\( 3a \\) y \\( 3b \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: la expresión \\( x^3+8 \\) se factoriza usando:",
        alternativas: ["Suma de cubos", "Diferencia de cuadrados", "Trinomio cuadrado perfecto", "Factor común monomio"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: si \\( a+b=5 \\) y \\( ab=6 \\), el valor de \\( a^2+2ab+b^2 \\) es:",
        alternativas: ["\\( 25 \\)", "\\( 13 \\)", "\\( 37 \\)", "\\( 6 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Al dividir \\( x^2-5x+6 \\) entre \\( x-2 \\) usando Ruffini, el cociente es:",
        alternativas: ["\\( x-3 \\)", "\\( x+3 \\)", "\\( x-2 \\)", "\\( x+2 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Si el residuo de dividir \\( P(x) \\) entre \\( x-a \\) es cero, entonces:",
        alternativas: ["\\( a \\) es el coeficiente principal", "\\( x-a \\) es factor de \\( P(x) \\)", "\\( P(x) \\) no tiene raíces", "\\( a \\) es el grado de \\( P(x) \\)"],
        correcta: 1,
      },
    ],
  },
  {
    numero: 8,
    unidad: 1,
    tema: "Factorización: factor común y aspa simple",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: en Ruffini, el residuo de dividir \\( P(x) \\) entre \\( x-a \\) es igual a:",
        alternativas: ["\\( P(a) \\)", "\\( P(0) \\)", "\\( a \\)", "El grado de \\( P(x) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: al dividir un polinomio de grado 4 entre un binomio \\( x-a \\), el cociente tiene grado:",
        alternativas: ["\\( 3 \\)", "\\( 4 \\)", "\\( 5 \\)", "\\( 2 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al dividir \\( x^3-2x^2-5x+6 \\) entre \\( x-1 \\) por Ruffini, el residuo es:",
        alternativas: ["\\( 0 \\)", "\\( 6 \\)", "\\( -5 \\)", "\\( 1 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Al factorizar \\( x^2+5x+6 \\) por aspa simple se obtiene:",
        alternativas: ["\\( (x+2)(x+3) \\)", "\\( (x+1)(x+6) \\)", "\\( (x-2)(x-3) \\)", "\\( (x+6)(x-1) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Factorizar \\( x^2-7x+12 \\) da como resultado:",
        alternativas: ["\\( (x-3)(x-4) \\)", "\\( (x+3)(x+4) \\)", "\\( (x-2)(x-6) \\)", "\\( (x-1)(x-12) \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 9,
    unidad: 1,
    tema: "Factorización por productos notables y divisores binómicos",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: factorizar \\( 10x^3-15x^2 \\) por factor común da:",
        alternativas: ["\\( 5x^2(2x-3) \\)", "\\( 5x(2x^2-3x) \\)", "\\( 10x^2(x-1.5) \\)", "\\( x^2(10x-15) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: al factorizar \\( x^2+8x+15 \\) por aspa simple se obtiene:",
        alternativas: ["\\( (x+3)(x+5) \\)", "\\( (x+1)(x+15) \\)", "\\( (x-3)(x-5) \\)", "\\( (x+15)(x-1) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al factorizar completamente \\( 2x^3+6x^2+4x \\) se obtiene:",
        alternativas: ["\\( 2x(x+1)(x+2) \\)", "\\( 2(x+1)(x+2) \\)", "\\( 2x(x-1)(x-2) \\)", "\\( 2x^2(x+3) \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Factorizar \\( x^2-9 \\) da como resultado:",
        alternativas: ["\\( (x+3)(x-3) \\)", "\\( (x-3)^2 \\)", "\\( (x+3)^2 \\)", "\\( (x+9)(x-1) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Factorizar \\( 4x^2-12x+9 \\) (trinomio cuadrado perfecto) da:",
        alternativas: ["\\( (2x-3)^2 \\)", "\\( (2x+3)^2 \\)", "\\( (4x-3)^2 \\)", "\\( (2x-3)(2x+3) \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 10,
    unidad: 1,
    tema: "Fracciones algebraicas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: la expresión \\( x^2-1 \\) se factoriza como:",
        alternativas: ["\\( (x+1)(x-1) \\)", "\\( (x-1)^2 \\)", "\\( (x+1)^2 \\)", "\\( x(x-1) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: un divisor binómico de un polinomio cuyo término independiente es 6 podría ser:",
        alternativas: ["\\( x-2 \\)", "\\( x-5 \\)", "\\( x-4 \\)", "\\( x-9 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al factorizar completamente \\( x^3-4x \\) se obtiene:",
        alternativas: ["\\( x(x-2)(x+2) \\)", "\\( x(x-4)(x+4) \\)", "\\( x^2(x-4) \\)", "\\( (x-2)(x+2) \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Al simplificar \\( \\dfrac{x^2-4}{x-2} \\) se obtiene:",
        alternativas: ["\\( x+2 \\)", "\\( x-2 \\)", "\\( x^2-2 \\)", "\\( 2x \\)"],
        correcta: 0,
      },
      {
        pregunta: "El resultado de \\( \\dfrac{2}{x} + \\dfrac{3}{x} \\) es:",
        alternativas: ["\\( \\dfrac{5}{x} \\)", "\\( \\dfrac{5}{2x} \\)", "\\( \\dfrac{6}{x^2} \\)", "\\( \\dfrac{1}{x} \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 11,
    unidad: 1,
    tema: "Sesión integradora 1",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: una fracción algebraica no está definida cuando:",
        alternativas: ["El denominador se hace cero", "El numerador se hace cero", "El grado es impar", "La variable es negativa"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: al simplificar \\( \\dfrac{3x}{6x^2} \\) se obtiene:",
        alternativas: ["\\( \\dfrac{1}{2x} \\)", "\\( \\dfrac{1}{2} \\)", "\\( 2x \\)", "\\( \\dfrac{2}{x} \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al simplificar \\( \\dfrac{x^2-9}{x^2-x-6} \\) se obtiene:",
        alternativas: ["\\( \\dfrac{x+3}{x+2} \\)", "\\( \\dfrac{x-3}{x+2} \\)", "\\( \\dfrac{x+3}{x-2} \\)", "\\( x+3 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Repaso: al factorizar \\( x^2-16 \\) se obtiene:",
        alternativas: ["\\( (x+4)(x-4) \\)", "\\( (x-4)^2 \\)", "\\( (x+4)^2 \\)", "\\( (x+8)(x-2) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: el valor de \\( \\sqrt[3]{8} \\) es:",
        alternativas: ["\\( 2 \\)", "\\( 4 \\)", "\\( 8 \\)", "\\( 3 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 12,
    unidad: 1,
    tema: "Práctica Calificada 1",
    inicio: [
      {
        pregunta: "Repaso de la sesión integradora anterior: factorizar \\( x^2-4x+4 \\) da como resultado:",
        alternativas: ["\\( (x-2)^2 \\)", "\\( (x+2)^2 \\)", "\\( (x-4)(x+1) \\)", "\\( (x-2)(x+2) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: de los temas de la unidad 1, ¿cuál corresponde a dividir un polinomio entre \\( x-a \\)?",
        alternativas: ["Método de Ruffini", "Aspa simple", "Producto notable", "Fracción algebraica"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: si \\( x^2-5x+6=0 \\), el valor de \\( x_1+x_2 \\) (suma de las soluciones) es:",
        alternativas: ["\\( 5 \\)", "\\( 6 \\)", "\\( -5 \\)", "\\( 1 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Factorizar \\( x^2+2x-15 \\) da como resultado:",
        alternativas: ["\\( (x+5)(x-3) \\)", "\\( (x-5)(x+3) \\)", "\\( (x+15)(x-1) \\)", "\\( (x-5)(x-3) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Simplificar \\( \\dfrac{x^2-25}{x+5} \\) da como resultado:",
        alternativas: ["\\( x-5 \\)", "\\( x+5 \\)", "\\( x^2-5 \\)", "\\( 5-x \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 13,
    unidad: 2,
    tema: "Ecuaciones lineales: tipos de solución",
    inicio: [
      {
        pregunta: "Repaso de la Práctica Calificada 1 (sesión anterior): esta evaluó principalmente:",
        alternativas: ["Fundamentos de álgebra", "Trigonometría", "Inecuaciones", "Plano cartesiano"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: uno de los temas evaluados fue la factorización. Factorizar \\( x^2-6x+9 \\) da:",
        alternativas: ["\\( (x-3)^2 \\)", "\\( (x+3)^2 \\)", "\\( (x-9)(x+1) \\)", "\\( (x-3)(x+3) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: si las soluciones de una ecuación cuadrática son \\( x=3 \\) y \\( x=-2 \\), dicha ecuación pudo ser:",
        alternativas: ["\\( x^2-x-6=0 \\)", "\\( x^2+x-6=0 \\)", "\\( x^2-x+6=0 \\)", "\\( x^2-5x+6=0 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "La solución de la ecuación \\( 3x-6=0 \\) es:",
        alternativas: ["\\( x=2 \\)", "\\( x=-2 \\)", "\\( x=3 \\)", "\\( x=6 \\)"],
        correcta: 0,
      },
      {
        pregunta: "La ecuación \\( 2x+5=2x+5 \\) tiene como solución:",
        alternativas: ["Infinitas soluciones", "\\( x=0 \\)", "No tiene solución", "\\( x=5 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 14,
    unidad: 2,
    tema: "Ecuaciones cuadráticas: métodos de solución",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: una ecuación lineal con una incógnita tiene la forma general:",
        alternativas: ["\\( ax+b=0 \\)", "\\( ax^2+bx+c=0 \\)", "\\( |x|=a \\)", "\\( ax+by=c \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: la ecuación \\( 5x=15 \\) tiene como solución:",
        alternativas: ["\\( x=3 \\)", "\\( x=5 \\)", "\\( x=15 \\)", "\\( x=75 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: ¿para qué valor de \\( k \\) la ecuación \\( 2x+k=2x+7 \\) tiene infinitas soluciones?",
        alternativas: ["\\( k=7 \\)", "\\( k=0 \\)", "\\( k=2 \\)", "Ningún valor de \\( k \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Las soluciones de \\( x^2-5x+6=0 \\) son:",
        alternativas: ["\\( x=2 \\) y \\( x=3 \\)", "\\( x=-2 \\) y \\( x=-3 \\)", "\\( x=1 \\) y \\( x=6 \\)", "\\( x=6 \\) y \\( x=-1 \\)"],
        correcta: 0,
      },
      {
        pregunta: "El discriminante \\( b^2-4ac \\) de \\( x^2+2x+1=0 \\) es:",
        alternativas: ["\\( 0 \\)", "\\( 4 \\)", "\\( -4 \\)", "\\( 1 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 15,
    unidad: 2,
    tema: "Aplicaciones con ecuaciones lineales",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: una de las formas de resolver una ecuación cuadrática es mediante:",
        alternativas: ["La fórmula general o la factorización", "Solo graficando", "Sumando una constante a ambos lados", "Multiplicando por cero"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: las soluciones de \\( x^2-1=0 \\) son:",
        alternativas: ["\\( x=1 \\) y \\( x=-1 \\)", "Solo \\( x=1 \\)", "Solo \\( x=-1 \\)", "Sin solución"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: ¿para qué valor de \\( c \\) la ecuación \\( x^2-6x+c=0 \\) tiene una única solución (raíz doble)?",
        alternativas: ["\\( c=9 \\)", "\\( c=6 \\)", "\\( c=36 \\)", "\\( c=3 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Resolviendo \\( 2x+3=11 \\), el número buscado es:",
        alternativas: ["\\( 4 \\)", "\\( 7 \\)", "\\( 8 \\)", "\\( 14 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Un rectángulo tiene perímetro 24 y su largo es el doble de su ancho. El ancho mide:",
        alternativas: ["\\( 4 \\)", "\\( 6 \\)", "\\( 8 \\)", "\\( 12 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 16,
    unidad: 2,
    tema: "Aplicaciones con ecuaciones cuadráticas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: al plantear un problema de aplicación con ecuaciones, la incógnita representa:",
        alternativas: ["El valor que se busca", "El dato ya conocido", "La constante del problema", "El resultado final ya calculado"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: \"el triple de un número menos 5 es igual a 10\" se traduce como:",
        alternativas: ["\\( 3x-5=10 \\)", "\\( x-5=10 \\)", "\\( 3x+5=10 \\)", "\\( \\dfrac{x}{3}-5=10 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: la suma de dos números consecutivos es 47. El mayor de ellos es:",
        alternativas: ["\\( 24 \\)", "\\( 23 \\)", "\\( 22 \\)", "\\( 25 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "El área de un cuadrado es 49. La medida de su lado es:",
        alternativas: ["\\( 7 \\)", "\\( 24.5 \\)", "\\( 14 \\)", "\\( 49 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Un número más su cuadrado es igual a 12 (\\( x^2+x-12=0 \\)). La solución positiva es:",
        alternativas: ["\\( 3 \\)", "\\( 4 \\)", "\\( -4 \\)", "\\( 12 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 17,
    unidad: 2,
    tema: "Ecuaciones lineales con valor absoluto",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: en un problema de aplicación con ecuación cuadrática, si una solución no tiene sentido en el contexto (por ejemplo, una longitud negativa), se debe:",
        alternativas: ["Descartarla", "Aceptarla igual", "Sumarla a la otra solución", "Redondearla a cero"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: el área de un rectángulo cuyo largo es \\( x+2 \\) y ancho \\( x \\) es 15. Esto se modela con la ecuación:",
        alternativas: ["\\( x^2+2x-15=0 \\)", "\\( x^2+2x+15=0 \\)", "\\( x^2-2x-15=0 \\)", "\\( 2x+15=0 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: el producto de dos números consecutivos positivos es 56. El menor de ellos es:",
        alternativas: ["\\( 7 \\)", "\\( 8 \\)", "\\( 6 \\)", "\\( 9 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Las soluciones de \\( |x-2|=5 \\) son:",
        alternativas: ["\\( x=7 \\) y \\( x=-3 \\)", "\\( x=7 \\) y \\( x=3 \\)", "\\( x=-7 \\) y \\( x=3 \\)", "\\( x=5 \\) y \\( x=-5 \\)"],
        correcta: 0,
      },
      {
        pregunta: "La ecuación \\( |x+1|=0 \\) tiene como solución:",
        alternativas: ["\\( x=-1 \\)", "\\( x=1 \\)", "\\( x=0 \\)", "Sin solución"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 18,
    unidad: 2,
    tema: "Ecuaciones cuadráticas con valor absoluto",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: la ecuación \\( |x|=7 \\) tiene como conjunto solución:",
        alternativas: ["\\( \\{7,-7\\} \\)", "\\( \\{7\\} \\)", "\\( \\{-7\\} \\)", "El conjunto vacío"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: al resolver \\( |x-3|=4 \\), una de las soluciones es:",
        alternativas: ["\\( x=7 \\)", "\\( x=4 \\)", "\\( x=-4 \\)", "\\( x=3 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al resolver \\( |2x-1|=x+2 \\) verificando que no sean soluciones extrañas, ¿cuántas soluciones válidas tiene?",
        alternativas: ["\\( 2 \\)", "\\( 1 \\)", "\\( 0 \\)", "\\( 3 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Las soluciones de \\( |x^2-4|=0 \\) son:",
        alternativas: ["\\( x=2 \\) y \\( x=-2 \\)", "\\( x=4 \\) y \\( x=-4 \\)", "Solo \\( x=2 \\)", "Sin solución"],
        correcta: 0,
      },
      {
        pregunta: "Al resolver \\( |x^2-9|=0 \\) se obtiene:",
        alternativas: ["\\( x=3 \\) y \\( x=-3 \\)", "\\( x=9 \\) y \\( x=-9 \\)", "Solo \\( x=3 \\)", "\\( x=0 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 19,
    unidad: 2,
    tema: "Sesión integradora 2",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: para resolver \\( |x^2-1|=3 \\), se deben plantear:",
        alternativas: ["Dos ecuaciones: \\( x^2-1=3 \\) y \\( x^2-1=-3 \\)", "Una sola ecuación", "Tres ecuaciones", "Ninguna, ya que no tiene solución"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: las soluciones reales de \\( |x^2-1|=3 \\) son:",
        alternativas: ["\\( x=2 \\) y \\( x=-2 \\)", "Solo \\( x=2 \\)", "\\( x=2 \\) y \\( x=\\sqrt{2} \\)", "\\( x=4 \\) y \\( x=-4 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: si una ecuación cuadrática tiene soluciones \\( x=-1 \\) y \\( x=5 \\), el valor del coeficiente \\( b \\) en \\( x^2+bx+c=0 \\) es:",
        alternativas: ["\\( b=-4 \\)", "\\( b=4 \\)", "\\( b=-5 \\)", "\\( b=5 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Repaso: la solución de \\( 4x-8=0 \\) es:",
        alternativas: ["\\( 2 \\)", "\\( -2 \\)", "\\( 4 \\)", "\\( 8 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: las soluciones de \\( x^2-9=0 \\) son:",
        alternativas: ["\\( x=3 \\) y \\( x=-3 \\)", "Solo \\( x=3 \\)", "Solo \\( x=9 \\)", "\\( x=3 \\) y \\( x=9 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 20,
    unidad: 2,
    tema: "Examen Parcial",
    inicio: [
      {
        pregunta: "Repaso de la sesión integradora anterior: esta repasó principalmente:",
        alternativas: ["Ecuaciones lineales, cuadráticas y con valor absoluto", "Inecuaciones", "Trigonometría", "Factorización"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: al resolver \\( x^2-4x=0 \\) se obtiene:",
        alternativas: ["\\( x=0 \\) y \\( x=4 \\)", "Solo \\( x=4 \\)", "\\( x=-4 \\) y \\( x=0 \\)", "\\( x=2 \\) y \\( x=-2 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al resolver \\( x^2-3x-10=0 \\), la diferencia entre la solución mayor y la menor es:",
        alternativas: ["\\( 7 \\)", "\\( 3 \\)", "\\( 10 \\)", "\\( 5 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "La solución de \\( |2x-4|=6 \\) incluye el valor:",
        alternativas: ["\\( x=5 \\)", "\\( x=-5 \\)", "\\( x=3 \\)", "\\( x=6 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Al resolver la ecuación lineal \\( 5x-3=2x+9 \\), el valor de \\( x \\) es:",
        alternativas: ["\\( 4 \\)", "\\( 3 \\)", "\\( 6 \\)", "\\( 2 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 21,
    unidad: 3,
    tema: "Inecuaciones lineales y sus aplicaciones",
    inicio: [
      {
        pregunta: "Repaso del Examen Parcial (sesión anterior): este evaluó principalmente el contenido de:",
        alternativas: ["Las unidades 1 y 2", "Solo la unidad 4", "Solo inecuaciones", "Todo el ciclo"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: uno de los temas evaluados fue resolver ecuaciones. La solución de \\( 3x+2=11 \\) es:",
        alternativas: ["\\( x=3 \\)", "\\( x=2 \\)", "\\( x=4 \\)", "\\( x=9 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: el conjunto solución de \\( -1<2x-3\\leq5 \\) es:",
        alternativas: ["\\( 1<x\\leq4 \\)", "\\( -1<x\\leq4 \\)", "\\( 1\\leq x<4 \\)", "\\( 2<x\\leq8 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "La solución de \\( 2x-4>0 \\) es:",
        alternativas: ["\\( x>2 \\)", "\\( x<2 \\)", "\\( x>-2 \\)", "\\( x<-2 \\)"],
        correcta: 0,
      },
      {
        pregunta: "La solución de \\( -3x+9\\geq0 \\) es:",
        alternativas: ["\\( x\\leq3 \\)", "\\( x\\geq3 \\)", "\\( x\\leq-3 \\)", "\\( x\\geq-3 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 22,
    unidad: 3,
    tema: "Inecuaciones cuadráticas: puntos críticos",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: al resolver una inecuación lineal, el conjunto solución generalmente se representa como:",
        alternativas: ["Un intervalo en la recta numérica", "Un punto único", "Un par ordenado", "Una matriz"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: la solución de \\( x+5>2 \\) es:",
        alternativas: ["\\( x>-3 \\)", "\\( x<-3 \\)", "\\( x>3 \\)", "\\( x<3 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: la solución de \\( (x-1)(x-4)>0 \\) es:",
        alternativas: ["\\( x<1 \\) o \\( x>4 \\)", "\\( 1<x<4 \\)", "\\( x<-1 \\) o \\( x>4 \\)", "\\( x=1 \\) y \\( x=4 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Los puntos críticos de \\( x^2-5x+6>0 \\) son:",
        alternativas: ["\\( 2 \\) y \\( 3 \\)", "\\( -2 \\) y \\( -3 \\)", "\\( 1 \\) y \\( 6 \\)", "\\( 5 \\) y \\( 6 \\)"],
        correcta: 0,
      },
      {
        pregunta: "La solución de \\( x^2-5x+6>0 \\) es:",
        alternativas: ["\\( x<2 \\) o \\( x>3 \\)", "\\( 2<x<3 \\)", "\\( x<-2 \\) o \\( x>-3 \\)", "\\( x>2 \\) y \\( x<3 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 23,
    unidad: 3,
    tema: "Aplicaciones con inecuaciones cuadráticas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: los puntos críticos de una inecuación cuadrática se obtienen:",
        alternativas: ["Igualando el polinomio a cero y hallando sus raíces", "Derivando la expresión", "Sumando los coeficientes", "Graficando una recta"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: los puntos críticos de \\( x^2-9>0 \\) son:",
        alternativas: ["\\( 3 \\) y \\( -3 \\)", "\\( 9 \\) y \\( -9 \\)", "\\( 0 \\) y \\( 3 \\)", "\\( 1 \\) y \\( 9 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: el perímetro de un rectángulo es 20 y su área debe ser mayor a 24. Si el largo es \\( x \\) y el ancho es \\( 10-x \\), ¿cuál de los siguientes es un posible valor de \\( x \\)?",
        alternativas: ["\\( 5 \\)", "\\( 3 \\)", "\\( 7 \\)", "\\( 8 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "La solución de \\( x^2>25 \\) (para \\( x>0 \\)) es:",
        alternativas: ["\\( x>5 \\)", "\\( x<5 \\)", "\\( x>25 \\)", "\\( x<-5 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Resolviendo \\( x^2-4\\leq0 \\) se obtiene:",
        alternativas: ["\\( -2\\leq x\\leq2 \\)", "\\( x\\leq-2 \\) o \\( x\\geq2 \\)", "\\( x\\leq2 \\)", "\\( x\\geq-2 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 24,
    unidad: 3,
    tema: "Inecuaciones con valor absoluto",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: en un problema con inecuaciones, la solución representa:",
        alternativas: ["Un rango de valores válidos para el contexto", "Un valor único", "Siempre un número negativo", "La suma de dos soluciones"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: si el área de un cuadrado de lado \\( x \\) debe ser menor a 36, la inecuación es:",
        alternativas: ["\\( x^2<36 \\)", "\\( x^2>36 \\)", "\\( x^2=36 \\)", "\\( 4x<36 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: el conjunto solución de \\( 2<|x|<5 \\) es:",
        alternativas: ["\\( -5<x<-2 \\) o \\( 2<x<5 \\)", "\\( -5<x<5 \\)", "\\( -2<x<2 \\)", "\\( x<-5 \\) o \\( x>5 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "La solución de \\( |x-1|<3 \\) es:",
        alternativas: ["\\( -2<x<4 \\)", "\\( -3<x<3 \\)", "\\( 1<x<3 \\)", "\\( -4<x<2 \\)"],
        correcta: 0,
      },
      {
        pregunta: "La solución de \\( |x+2|>4 \\) es:",
        alternativas: ["\\( x>2 \\) o \\( x<-6 \\)", "\\( -6<x<2 \\)", "\\( x>4 \\) o \\( x<-4 \\)", "\\( x>6 \\) o \\( x<-2 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 25,
    unidad: 3,
    tema: "Sesión integradora 3",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: la inecuación \\( |x|\\leq a \\) (con \\( a>0 \\)) equivale a:",
        alternativas: ["\\( -a\\leq x\\leq a \\)", "\\( x\\leq a \\) únicamente", "\\( x\\geq -a \\) únicamente", "\\( x<-a \\) o \\( x>a \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: la solución de \\( |x|>5 \\) es:",
        alternativas: ["\\( x>5 \\) o \\( x<-5 \\)", "\\( -5<x<5 \\)", "\\( x>5 \\) únicamente", "\\( x<-5 \\) únicamente"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: el conjunto solución de \\( 2<|x|<5 \\) es:",
        alternativas: ["\\( -5<x<-2 \\) o \\( 2<x<5 \\)", "\\( -5<x<5 \\)", "\\( -2<x<2 \\)", "\\( x<-5 \\) o \\( x>5 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Repaso: la solución de \\( x-3>0 \\) es:",
        alternativas: ["\\( x>3 \\)", "\\( x<3 \\)", "\\( x>-3 \\)", "\\( x<-3 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: los puntos críticos de \\( x^2-1>0 \\) son:",
        alternativas: ["\\( 1 \\) y \\( -1 \\)", "\\( 0 \\) y \\( 1 \\)", "\\( -1 \\) y \\( 0 \\)", "\\( 2 \\) y \\( -2 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 26,
    unidad: 3,
    tema: "Práctica Calificada 2",
    inicio: [
      {
        pregunta: "Repaso de la sesión integradora anterior: esta repasó principalmente:",
        alternativas: ["Inecuaciones lineales, cuadráticas y con valor absoluto", "Ecuaciones", "Trigonometría", "Fundamentos de álgebra"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: la solución de \\( x^2-4>0 \\) es:",
        alternativas: ["\\( x<-2 \\) o \\( x>2 \\)", "\\( -2<x<2 \\)", "\\( x>2 \\) únicamente", "\\( x<-2 \\) únicamente"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: la solución de \\( x^2-2x-3\\leq0 \\) es:",
        alternativas: ["\\( -1\\leq x\\leq3 \\)", "\\( x\\leq-1 \\) o \\( x\\geq3 \\)", "\\( -3\\leq x\\leq1 \\)", "\\( x\\leq3 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "La solución de \\( x^2-16\\leq0 \\) es:",
        alternativas: ["\\( -4\\leq x\\leq4 \\)", "\\( x\\leq-4 \\) o \\( x\\geq4 \\)", "\\( x\\leq4 \\)", "\\( x\\geq-4 \\)"],
        correcta: 0,
      },
      {
        pregunta: "La solución de \\( |x-5|\\leq2 \\) es:",
        alternativas: ["\\( 3\\leq x\\leq7 \\)", "\\( x\\leq3 \\) o \\( x\\geq7 \\)", "\\( -3\\leq x\\leq3 \\)", "\\( x\\leq7 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 27,
    unidad: 4,
    tema: "Plano cartesiano y relaciones binarias",
    inicio: [
      {
        pregunta: "Repaso de la Práctica Calificada 2 (sesión anterior): esta evaluó principalmente:",
        alternativas: ["Inecuaciones", "Trigonometría", "Ecuaciones", "Plano cartesiano"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: uno de los temas evaluados fue resolver inecuaciones. La solución de \\( 2x-6\\leq0 \\) es:",
        alternativas: ["\\( x\\leq3 \\)", "\\( x\\geq3 \\)", "\\( x\\leq-3 \\)", "\\( x\\geq-3 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: si el conjunto solución de una inecuación es \\( -2\\leq x\\leq5 \\), esta pudo obtenerse al resolver:",
        alternativas: ["\\( (x+2)(x-5)\\leq0 \\)", "\\( (x-2)(x+5)\\leq0 \\)", "\\( (x+2)(x-5)\\geq0 \\)", "\\( x^2-3x-10\\geq0 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "El punto \\( (4,-2) \\) se ubica en el cuadrante:",
        alternativas: ["I", "II", "III", "IV"],
        correcta: 3,
      },
      {
        pregunta: "El par ordenado que representa el origen del plano cartesiano es:",
        alternativas: ["\\( (1,1) \\)", "\\( (0,0) \\)", "\\( (0,1) \\)", "\\( (1,0) \\)"],
        correcta: 1,
      },
    ],
  },
  {
    numero: 28,
    unidad: 4,
    tema: "Traslación y rotación de figuras en el plano cartesiano",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: en el plano cartesiano, el eje horizontal se llama:",
        alternativas: ["Eje de abscisas", "Eje de ordenadas", "Eje de simetría", "Eje diagonal"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: el punto \\( (-3,-5) \\) se ubica en el cuadrante:",
        alternativas: ["I", "II", "III", "IV"],
        correcta: 2,
      },
      {
        pregunta: "Para pensar un poco más: la distancia entre los puntos \\( A(1,2) \\) y \\( B(4,6) \\) es:",
        alternativas: ["\\( 5 \\)", "\\( 7 \\)", "\\( 25 \\)", "\\( 4 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Al trasladar el punto \\( (2,3) \\) según el vector \\( (1,-4) \\), el nuevo punto es:",
        alternativas: ["\\( (3,-1) \\)", "\\( (1,7) \\)", "\\( (3,7) \\)", "\\( (1,-1) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Al rotar \\( 180° \\) el punto \\( (5,-2) \\) respecto al origen se obtiene:",
        alternativas: ["\\( (-5,2) \\)", "\\( (5,2) \\)", "\\( (-5,-2) \\)", "\\( (2,-5) \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 29,
    unidad: 4,
    tema: "Triángulos notables y teorema de Pitágoras",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: al trasladar una figura en el plano cartesiano, su forma y tamaño:",
        alternativas: ["Se mantienen iguales", "Cambian", "Se duplican", "Se invierten"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: una rotación de \\( 90° \\) en sentido antihorario respecto al origen transforma \\( (x,y) \\) en:",
        alternativas: ["\\( (-y,x) \\)", "\\( (y,-x) \\)", "\\( (-x,-y) \\)", "\\( (y,x) \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: al trasladar el punto \\( (2,-1) \\) según el vector \\( (3,4) \\) y luego rotar \\( 180° \\) respecto al origen, el punto final es:",
        alternativas: ["\\( (-5,-3) \\)", "\\( (5,3) \\)", "\\( (-5,3) \\)", "\\( (5,-3) \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Si los catetos de un triángulo rectángulo miden 3 y 4, la hipotenusa mide:",
        alternativas: ["\\( 5 \\)", "\\( 6 \\)", "\\( 7 \\)", "\\( 25 \\)"],
        correcta: 0,
      },
      {
        pregunta: "En un triángulo notable de \\( 30°-60°-90° \\), si el cateto menor mide 1, la hipotenusa mide:",
        alternativas: ["\\( 2 \\)", "\\( \\sqrt{3} \\)", "\\( 1 \\)", "\\( \\sqrt{2} \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 30,
    unidad: 4,
    tema: "Razones trigonométricas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: el teorema de Pitágoras se aplica únicamente a:",
        alternativas: ["Triángulos rectángulos", "Triángulos equiláteros", "Triángulos obtusángulos", "Cualquier triángulo"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: si los catetos de un triángulo rectángulo miden 5 y 12, la hipotenusa mide:",
        alternativas: ["\\( 13 \\)", "\\( 17 \\)", "\\( 60 \\)", "\\( 169 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: un triángulo rectángulo tiene hipotenusa 13 y un cateto 5. El área del triángulo es:",
        alternativas: ["\\( 30 \\)", "\\( 60 \\)", "\\( 12 \\)", "\\( 65 \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Si en un triángulo rectángulo el cateto opuesto mide 3 y la hipotenusa mide 5, \\( \\sin\\theta \\) es:",
        alternativas: ["\\( \\dfrac{3}{5} \\)", "\\( \\dfrac{4}{5} \\)", "\\( \\dfrac{5}{3} \\)", "\\( \\dfrac{3}{4} \\)"],
        correcta: 0,
      },
      {
        pregunta: "El valor de \\( \\cos(60°) \\) es:",
        alternativas: ["\\( \\dfrac{1}{2} \\)", "\\( \\dfrac{\\sqrt{3}}{2} \\)", "\\( 1 \\)", "\\( \\dfrac{\\sqrt{2}}{2} \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 31,
    unidad: 4,
    tema: "Aplicación de razones trigonométricas: ángulos de elevación y depresión",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: la razón trigonométrica coseno se define como:",
        alternativas: ["Cateto adyacente entre hipotenusa", "Cateto opuesto entre hipotenusa", "Cateto opuesto entre cateto adyacente", "Hipotenusa entre cateto adyacente"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: el valor de \\( \\sin(30°) \\) es:",
        alternativas: ["\\( \\dfrac{1}{2} \\)", "\\( \\dfrac{\\sqrt{3}}{2} \\)", "\\( 1 \\)", "\\( \\dfrac{\\sqrt{2}}{2} \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: en un triángulo rectángulo, \\( \\tan\\theta=\\dfrac{3}{4} \\). El valor de \\( \\sin\\theta \\) (ángulo agudo) es:",
        alternativas: ["\\( \\dfrac{3}{5} \\)", "\\( \\dfrac{4}{5} \\)", "\\( \\dfrac{3}{4} \\)", "\\( \\dfrac{4}{3} \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Desde un punto a 50 m de la base de una torre, el ángulo de elevación a su cima es \\( 45° \\). La altura de la torre es aproximadamente:",
        alternativas: ["\\( 50 \\) m", "\\( 25 \\) m", "\\( 100 \\) m", "\\( 70.7 \\) m"],
        correcta: 0,
      },
      {
        pregunta: "Un observador ve un barco con un ángulo de depresión de \\( 30° \\) desde un faro de 20 m de altura. La distancia horizontal aproximada al barco es:",
        alternativas: ["\\( 34.6 \\) m", "\\( 20 \\) m", "\\( 10 \\) m", "\\( 40 \\) m"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 32,
    unidad: 4,
    tema: "Identidades trigonométricas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: el ángulo de elevación se forma cuando el observador mira:",
        alternativas: ["Hacia arriba, respecto a la horizontal, hacia un objeto por encima", "Hacia abajo, respecto a la horizontal", "Directamente hacia el frente", "Hacia atrás"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: desde un punto a 30 m de una torre, el ángulo de elevación a su cima es \\( 45° \\). La altura de la torre es:",
        alternativas: ["\\( 30 \\) m", "\\( 15 \\) m", "\\( 60 \\) m", "\\( 42.4 \\) m"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: desde la punta de un faro de 40 m de altura, el ángulo de depresión hacia un bote es de \\( 30° \\). ¿A qué distancia aproximada de la base del faro está el bote?",
        alternativas: ["\\( 69.3 \\) m", "\\( 40 \\) m", "\\( 23.1 \\) m", "\\( 80 \\) m"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Si \\( \\sin\\theta=\\dfrac{3}{5} \\) (ángulo agudo), el valor de \\( \\cos\\theta \\) es:",
        alternativas: ["\\( \\dfrac{4}{5} \\)", "\\( \\dfrac{3}{5} \\)", "\\( \\dfrac{5}{4} \\)", "\\( \\dfrac{5}{3} \\)"],
        correcta: 0,
      },
      {
        pregunta: "La identidad \\( 1+\\cot^2\\theta \\) es igual a:",
        alternativas: ["\\( \\csc^2\\theta \\)", "\\( \\sec^2\\theta \\)", "\\( \\tan^2\\theta \\)", "\\( 1 \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 33,
    unidad: 4,
    tema: "Reducción de expresiones trigonométricas",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: la identidad pitagórica fundamental es:",
        alternativas: ["\\( \\sin^2\\theta+\\cos^2\\theta=1 \\)", "\\( \\sin^2\\theta-\\cos^2\\theta=1 \\)", "\\( \\sin\\theta\\cdot\\cos\\theta=1 \\)", "\\( \\tan^2\\theta=1 \\)"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: si \\( \\cos\\theta=\\dfrac{4}{5} \\) (ángulo agudo), el valor de \\( \\sin\\theta \\) es:",
        alternativas: ["\\( \\dfrac{3}{5} \\)", "\\( \\dfrac{4}{5} \\)", "\\( \\dfrac{5}{4} \\)", "\\( \\dfrac{1}{5} \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: la expresión \\( \\dfrac{1-\\cos^2\\theta}{\\sin\\theta} \\) se simplifica a:",
        alternativas: ["\\( \\sin\\theta \\)", "\\( \\cos\\theta \\)", "\\( 1 \\)", "\\( \\tan\\theta \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "La expresión \\( \\dfrac{\\sin\\theta}{\\cos\\theta} \\) se reduce a:",
        alternativas: ["\\( \\tan\\theta \\)", "\\( \\cot\\theta \\)", "\\( \\sec\\theta \\)", "\\( 1 \\)"],
        correcta: 0,
      },
      {
        pregunta: "La expresión \\( \\sin^2\\theta+\\cos^2\\theta+1 \\) se reduce a:",
        alternativas: ["\\( 2 \\)", "\\( 1 \\)", "\\( 0 \\)", "\\( 2\\sin\\theta\\cos\\theta \\)"],
        correcta: 0,
      },
    ],
  },
  {
    numero: 34,
    unidad: 4,
    tema: "Sesión integradora 4: repaso para el Examen Final",
    inicio: [
      {
        pregunta: "Repaso de la sesión anterior: reducir una expresión trigonométrica consiste en:",
        alternativas: ["Simplificarla aplicando identidades trigonométricas", "Convertirla a grados", "Graficarla", "Elevarla al cuadrado siempre"],
        correcta: 0,
      },
      {
        pregunta: "Repaso: la expresión \\( \\cos\\theta\\cdot\\sec\\theta \\) se reduce a:",
        alternativas: ["\\( 1 \\)", "\\( 0 \\)", "\\( \\cos^2\\theta \\)", "\\( 2\\cos\\theta \\)"],
        correcta: 0,
      },
      {
        pregunta: "Para pensar un poco más: la expresión \\( (\\sin\\theta+\\cos\\theta)^2-1 \\) se reduce a:",
        alternativas: ["\\( 2\\sin\\theta\\cos\\theta \\)", "\\( 1 \\)", "\\( 0 \\)", "\\( \\sin^2\\theta-\\cos^2\\theta \\)"],
        correcta: 0,
      },
    ],
    cierre: [
      {
        pregunta: "Repaso general: el examen final del curso evalúa:",
        alternativas: ["Solo la última unidad", "Todas las unidades del curso", "Solo trigonometría", "Solo álgebra"],
        correcta: 1,
      },
      {
        pregunta: "Repaso: en un triángulo rectángulo con catetos 6 y 8, la hipotenusa mide:",
        alternativas: ["\\( 10 \\)", "\\( 14 \\)", "\\( 48 \\)", "\\( 100 \\)"],
        correcta: 0,
      },
    ],
  },
];

// La Sesión 34 es la última con material propio (pptx); el Examen Final se rinde
// la semana siguiente sin sesión de clase asociada, igual que en el cronograma oficial.
const HITOS = {
  35: { codigo: "EXFN", nombre: "Examen Final", detalle: "Semana 18 · Individual" },
};
