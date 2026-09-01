import { cn } from '@/lib/utils';

interface Trace {
  d: string;
  duration: number;
  delay: number;
}

interface Node {
  cx: number;
  cy: number;
  delay: number;
}

interface Variant {
  traces: Trace[];
  nodes: Node[];
}

/**
 * Trazas estilo placa de circuito impreso, dibujadas a mano en un lienzo de
 * 400x300. Cuatro variantes para que las tarjetas contiguas no se vean
 * idénticas; se seleccionan de forma determinista (sin JS en cliente) para
 * que el export estático no dependa de aleatoriedad en cada build.
 */
const VARIANTS: Variant[] = [
  {
    traces: [
      { d: 'M-10,42 H150 V118 H272 V42 H410', duration: 4.6, delay: 0 },
      { d: 'M-10,258 H132 V182 H236 V258 H410', duration: 5.4, delay: 1.1 },
    ],
    nodes: [
      { cx: 150, cy: 42, delay: 0.2 },
      { cx: 272, cy: 118, delay: 0.9 },
      { cx: 132, cy: 258, delay: 1.4 },
      { cx: 236, cy: 182, delay: 1.9 },
    ],
  },
  {
    traces: [
      { d: 'M-10,80 H96 V24 H224 V150 H410', duration: 5.1, delay: 0.3 },
      { d: 'M-10,224 H176 V282 H316 V204 H410', duration: 4.3, delay: 0.8 },
    ],
    nodes: [
      { cx: 96, cy: 80, delay: 0.1 },
      { cx: 224, cy: 150, delay: 0.7 },
      { cx: 176, cy: 224, delay: 1.3 },
      { cx: 316, cy: 204, delay: 2.1 },
    ],
  },
  {
    traces: [
      { d: 'M64,-10 V92 H206 V32 H344 V150', duration: 4.9, delay: 0.5 },
      { d: 'M24,310 V216 H162 V262 H302 V178', duration: 5.6, delay: 1.4 },
    ],
    nodes: [
      { cx: 64, cy: 92, delay: 0.3 },
      { cx: 206, cy: 32, delay: 1.1 },
      { cx: 162, cy: 216, delay: 1.7 },
      { cx: 302, cy: 262, delay: 0.6 },
    ],
  },
  {
    traces: [
      { d: 'M-10,150 H84 V58 H244 V192 H410', duration: 4.4, delay: 0.2 },
      { d: 'M44,-10 V104 H204 V244 H410', duration: 5.3, delay: 1.0 },
    ],
    nodes: [
      { cx: 84, cy: 58, delay: 0.4 },
      { cx: 244, cy: 192, delay: 1.2 },
      { cx: 204, cy: 104, delay: 1.8 },
      { cx: 44, cy: 244, delay: 0.9 },
    ],
  },
];

interface CircuitBackgroundProps {
  /** 0-3: elige una de las cuatro composiciones de traza. */
  variant?: number;
  className?: string;
}

/**
 * Fondo animado de "circuito impreso" para las tarjetas y cabeceras de
 * sector: sustituye las fotografías por una pieza gráfica en movimiento,
 * coherente con la identidad técnica de la marca (grid + trazas azules).
 * Solo CSS/SVG — no requiere cliente ni imágenes — y respeta
 * prefers-reduced-motion vía la regla global en globals.css.
 */
export function CircuitBackground({ variant = 0, className }: CircuitBackgroundProps) {
  const { traces, nodes } = VARIANTS[((variant % VARIANTS.length) + VARIANTS.length) % VARIANTS.length];

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {/* Grid técnico sutil, igual al usado en el resto del sitio */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="circuit-grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#circuit-grid)" />
      </svg>

      {/* Barrido de luz lento, en diagonal */}
      <div
        className="animate-circuit-sweep absolute -inset-y-1/2 left-0 w-2/3 bg-gradient-to-r from-transparent via-blue/[0.12] to-transparent blur-md"
        style={{ animationDelay: '-3s' }}
      />

      {/* Trazas de circuito con corriente animada */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {traces.map((trace, i) => (
          <path
            key={i}
            d={trace.d}
            className="animate-circuit-flow fill-none stroke-blue-text/40"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="4 14"
            style={{ animationDuration: `${trace.duration}s`, animationDelay: `${trace.delay}s` }}
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="3"
            className="animate-circuit-pulse fill-blue-text"
            style={{ transformOrigin: `${node.cx}px ${node.cy}px`, animationDelay: `${node.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
