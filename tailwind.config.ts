import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#061321',
          light: '#0A1F35',
          lighter: '#0B2A47',
          dark: '#030B14',
        },
        blue: {
          // Azul de marca. Válido para elementos decorativos (líneas, puntos,
          // fondos translúcidos), NO para texto pequeño ni como relleno de
          // botón: sobre él, el texto blanco solo alcanza 4,15:1.
          DEFAULT: '#0878F9',
          // Relleno de botones con texto blanco encima → 5,07:1 (WCAG AA).
          solid: '#0A6BDB',
          // Estado hover del botón → 4,79:1 (WCAG AA).
          'solid-hover': '#0F71D9',
          // Texto e iconos azules sobre fondo oscuro → 6,53:1 sobre #061321.
          text: '#3D9BFF',
          bright: '#1683FF',
          hover: '#1689FF',
          glow: '#0878F933',
        },
        primary: {
          DEFAULT: '#061321',
          light: '#0A1F35',
          dark: '#030B14',
        },
        accent: {
          DEFAULT: '#0878F9',
          hover: '#1689FF',
        },
        background: '#061321',
        surface: {
          DEFAULT: '#0A1F35',
          dark: '#0B1D30',
          darker: '#071827',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#CBD5E1',
          light: '#94A3B8',
          dark: '#64748B',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          light: 'rgba(255,255,255,0.12)',
          dark: 'rgba(255,255,255,0.04)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.05em' }],
        'stat': ['2.5rem', { lineHeight: '1', fontWeight: '700', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'card-hover': '0 8px 25px -5px rgb(0 0 0 / 0.3), 0 4px 10px -5px rgb(0 0 0 / 0.15)',
        'glow': '0 0 40px 8px rgba(8,120,249,0.15)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
