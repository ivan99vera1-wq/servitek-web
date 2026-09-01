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
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.02em' }],
        h1: ['2.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.01em' }],
        h2: ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        stat: ['2.5rem', { lineHeight: '1', fontWeight: '700', letterSpacing: '-0.02em' }],
      },
      height: {
        header: '4.5rem', // alto de la cabecera en escritorio
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        glow: '0 0 30px rgb(8 120 249 / 0.25)',
        'glow-sm': '0 0 20px rgb(8 120 249 / 0.3)',
      },
      animation: {
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(37 211 102 / 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgb(37 211 102 / 0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
