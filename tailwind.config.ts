import type { Config } from 'tailwindcss';

/**
 * Paleta SERVITEK.
 *
 * Regla: ningún color se escribe a mano en los componentes. Si hace falta un
 * tono nuevo se añade aquí. Antes convivían once azules oscuros distintos
 * escritos como valores arbitrarios y cambiar la paleta obligaba a tocar
 * decenas de ficheros.
 *
 * Contraste (calculado sobre los fondos reales del sitio):
 *   blue.solid  + texto blanco encima  -> 5,07:1  (AA)
 *   blue.text   sobre navy             -> 6,53:1  (AA)
 *   blue        NO vale para texto ni como relleno de botón: solo decorativo.
 *   El texto blanco nunca baja del 55 % de opacidad (mínimo para 4,5:1).
 */
const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#061321', // fondo base de todas las secciones
          deep: '#04101C', // overlay del hero
          dark: '#030B14', // footer
          light: '#0A1F35', // secciones alternas
          lighter: '#0B2A47', // degradados de tarjeta
        },
        surface: {
          DEFAULT: '#071827', // cabeceras de página y barra de confianza
          card: '#0B253F', // tarjetas
          muted: '#0B1D30', // degradados sobre imagen
        },
        blue: {
          DEFAULT: '#0878F9', // marca. Solo decorativo: líneas, puntos, fondos translúcidos
          solid: '#0A6BDB', // relleno de botón con texto blanco (5,07:1)
          'solid-hover': '#0F71D9', // hover del botón (4,79:1)
          text: '#3D9BFF', // texto e iconos azules sobre fondo oscuro (6,53:1)
        },
        /**
         * Rojo corporativo, tomado de la "S" del logotipo. Es un MICRO-ACENTO:
         * numeración, indicadores de estado, filetes de 1-2 px y marcas de
         * hover. Nunca como relleno grande ni como fondo de sección.
         *
         *   accent      sobre navy #061321      -> 5,82:1  (AA)
         *   accent      sobre surface #071827   -> 5,54:1  (AA)
         *   accent      sobre surface-card      -> 4,79:1  (AA)
         *   accent.deep solo decorativo (líneas y puntos, sin texto).
         */
        accent: {
          DEFAULT: '#FF4D5E',
          deep: '#E23744',
        },
        line: {
          DEFAULT: 'rgb(255 255 255 / 0.08)',
          strong: 'rgb(255 255 255 / 0.12)',
        },
        // Estados. Verificados sobre navy y sobre las tarjetas.
        danger: '#FF8A80', // 8,19:1 sobre navy
        success: '#7BE49B', // 11,95:1 sobre navy
        whatsapp: {
          DEFAULT: '#128C4A',
          hover: '#0E7A40',
          ring: '#25D366',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      /**
       * Escala tipográfica fluida.
       *
       * Cada tamaño interpola con clamp() entre móvil y escritorio, así la
       * jerarquía se mantiene sin encadenar `text-x md:text-y lg:text-z` en
       * cada componente. Los mínimos están calculados para que la palabra
       * más larga del contenido real ("INFRAESTRUCTURA", 15 caracteres) quepa
       * en el ancho útil de un viewport de 320 px.
       */
      fontSize: {
        display: [
          'clamp(2.125rem, 1.3rem + 4.4vw, 4rem)',
          { lineHeight: '1.02', fontWeight: '700', letterSpacing: '-0.035em' },
        ],
        h1: [
          'clamp(1.875rem, 1.25rem + 2.6vw, 3rem)',
          { lineHeight: '1.08', fontWeight: '700', letterSpacing: '-0.03em' },
        ],
        h2: [
          'clamp(1.625rem, 1.2rem + 1.9vw, 2.375rem)',
          { lineHeight: '1.14', fontWeight: '700', letterSpacing: '-0.025em' },
        ],
        h3: [
          'clamp(1.375rem, 1.2rem + 0.7vw, 1.625rem)',
          { lineHeight: '1.24', fontWeight: '600', letterSpacing: '-0.02em' },
        ],
        h4: ['1.25rem', { lineHeight: '1.35', fontWeight: '600', letterSpacing: '-0.015em' }],
        stat: [
          'clamp(2rem, 1.4rem + 2.4vw, 3rem)',
          { lineHeight: '0.95', fontWeight: '700', letterSpacing: '-0.04em' },
        ],
        /** Etiqueta monoespaciada versal: eyebrows, labels técnicos, índices.
         *  lineHeight 1.5: con 0.22em de tracking, los rótulos largos parten en
         *  dos líneas en móvil y con interlineado 1 se solapaban. */
        eyebrow: ['0.6875rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.22em' }],
        /** Número de índice de tarjeta (01, 02...). */
        index: ['0.75rem', { lineHeight: '1', fontWeight: '700', letterSpacing: '0.14em' }],
      },
      /**
       * En `spacing`, no en `height`: el hero necesita `-mt-header` para subir
       * por debajo de la cabecera fija, y las utilidades de margen solo se
       * generan desde la escala de espaciado. `h-header` sigue funcionando
       * porque `height` hereda de `spacing`.
       */
      spacing: {
        header: '4.5rem', // alto de la cabecera en escritorio
        'header-sm': '3.75rem', // alto reducido tras hacer scroll
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        glow: '0 0 30px rgb(8 120 249 / 0.25)',
        'glow-sm': '0 0 20px rgb(8 120 249 / 0.3)',
        /** Elevación de tarjeta en hover: sombra real + halo azul muy tenue. */
        lift: '0 18px 40px -18px rgb(0 0 0 / 0.65), 0 0 0 1px rgb(8 120 249 / 0.16)',
        /** Cabecera fija una vez que hay scroll. */
        header: '0 10px 30px -12px rgb(0 0 0 / 0.6)',
      },
      /**
       * Tokens de movimiento. Toda transición del sitio usa una de estas
       * cuatro duraciones y una de estas curvas: así el ritmo es el mismo en
       * navegación, tarjetas, formularios y revelados.
       */
      transitionDuration: {
        fast: '160ms', // micro-feedback: color, opacidad de un icono
        base: '280ms', // estado de un componente: hover de tarjeta o enlace
        slow: '520ms', // entradas y revelados
        slower: '900ms', // cinemática del hero
      },
      transitionTimingFunction: {
        // Salida muy amortiguada: el 80 % del recorrido ocurre en el primer
        // tercio del tiempo. Es lo que hace que un movimiento parezca "caro".
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      animation: {
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'circuit-flow': 'circuitFlow 4s linear infinite',
        'circuit-pulse': 'circuitPulse 2.6s ease-in-out infinite',
        'circuit-sweep': 'circuitSweep 10s ease-in-out infinite',
        // Sistema de entrada. `both` mantiene el fotograma inicial durante el
        // retardo, que es lo que permite escalonar sin parpadeos.
        'fade-up': 'fadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-in-left': 'slideInLeft 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'scale-in': 'scaleIn 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'line-grow': 'lineGrow 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'accent-blink': 'accentBlink 3.2s ease-in-out infinite',
        'progress-sweep': 'progressSweep 1.3s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translate3d(0, 18px, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translate3d(-24px, 0, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.94)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        // Filete técnico que se dibuja de izquierda a derecha.
        lineGrow: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        // Piloto rojo de "sistema en marcha". Nunca desaparece del todo para
        // que no parezca un error de carga.
        accentBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        // Barra de progreso indeterminada de la pantalla de carga.
        progressSweep: {
          '0%': { transform: 'translateX(-110%)' },
          '100%': { transform: 'translateX(410%)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(37 211 102 / 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgb(37 211 102 / 0)' },
        },
        // Fondo animado de sector: "corriente" recorriendo una traza de
        // circuito impreso. El desfase se mueve un múltiplo exacto del
        // patrón de guiones (18 = 4 + 14) para que el bucle no salte.
        circuitFlow: {
          to: { strokeDashoffset: '-180' },
        },
        circuitPulse: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        circuitSweep: {
          '0%': { transform: 'translateX(-40%) translateY(-8%) rotate(8deg)' },
          '50%': { transform: 'translateX(60%) translateY(4%) rotate(8deg)' },
          '100%': { transform: 'translateX(-40%) translateY(-8%) rotate(8deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
