import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ParallaxLayer } from '@/components/hero/ParallaxLayer';

/**
 * Coreografía de entrada del hero.
 *
 * Cada elemento entra con `animate-fade-up` y un retardo creciente. El orden
 * es el de lectura — rótulo, titular, descripción, botones, indicadores — y
 * la secuencia completa dura menos de un segundo: pasado ese punto una
 * animación de entrada deja de leerse como "cinematográfica" y empieza a
 * leerse como "la página va lenta".
 *
 * El titular es el elemento LCP, así que entra sin retardo y con una entrada
 * más corta que el resto (420 ms en vez de 700): la cascada se sigue leyendo
 * porque los elementos siguientes sí van escalonados, pero la métrica no paga
 * por la coreografía.
 */
const STEP = {
  eyebrow: '0ms',
  headline: '0ms',
  description: '200ms',
  ctas: '320ms',
  indicators: '440ms',
  panel: '260ms',
} as const;

/** Entrada abreviada solo para el titular, por LCP. */
const HEADLINE_DURATION = '420ms';

const indicators = ['RUC: 80176311-8', 'Respuesta en menos de 24h', 'Equipo especializado'];

export function Hero() {
  return (
    /* -mt-16/-mt-header: el hero sube por debajo de la cabecera fija para que
       la navegación se integre con la imagen en lugar de flotar sobre una
       banda azul vacía. El padding superior devuelve el espacio al contenido. */
    <section className="relative -mt-16 flex min-h-[92svh] items-center overflow-hidden md:-mt-header">
      {/* ---------------------------------------------------------------- *
       * Fondo. Tres capas a velocidades distintas: la fotografía es la que
       * más se mueve, el velo apenas, y el contenido queda prácticamente
       * quieto. El efecto se percibe como profundidad, no como movimiento.
       * ---------------------------------------------------------------- */}
      <div className="absolute inset-0">
        {/* Degradado de respaldo: queda debajo, así que si la imagen no
            carga la sección sigue teniendo fondo sin necesitar JavaScript. */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-dark" />

        <ParallaxLayer speed={0.22} className="absolute -inset-y-[12%] inset-x-0">
          <Image
            src="/images/hero/hero-industrial.webp"
            alt="Planta industrial atendida por SERVITEK"
            fill
            className="animate-fade-in object-cover object-[60%_center] lg:object-center"
            priority
            sizes="100vw"
          />
        </ParallaxLayer>

        <ParallaxLayer speed={0.08} className="absolute inset-0">
          {/* Velo navy: legibilidad del titular sobre la fotografía. */}
          <div className="via-navy-deep/88 absolute inset-0 bg-gradient-to-r from-navy-deep to-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-navy-deep/70" />
        </ParallaxLayer>
      </div>

      {/* Rejilla técnica */}
      <div className="tech-grid opacity-60" aria-hidden="true" />

      {/* Filete vertical izquierdo: nace en rojo y se disuelve en azul. Es la
          misma firma que llevan las tarjetas y los encabezados de sección. */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[2px] animate-fade-in bg-gradient-to-b from-transparent via-accent-deep/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[2px] animate-fade-in bg-gradient-to-b from-transparent via-blue/35 to-transparent"
        style={{ animationDelay: '300ms' }}
      />

      <div className="container-custom relative z-10 py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Contenido principal - 7 columnas */}
          <div className="lg:col-span-7">
            {/* Rótulo superior */}
            <div className="mb-7 animate-fade-up" style={{ animationDelay: STEP.eyebrow }}>
              {/* items-start: el rótulo parte en dos líneas por debajo de
                  400 px y el piloto debe quedar alineado con la primera. */}
              <span className="inline-flex items-start gap-3">
                <span className="status-dot mt-[5px] animate-accent-blink" aria-hidden="true" />
                <span className="eyebrow">ELECTROMECÁNICA, MATERIALES ELÉCTRICOS</span>
              </span>
            </div>

            {/* Titular */}
            <h1
              className="animate-fade-up text-balance text-display text-white"
              style={{ animationDelay: STEP.headline, animationDuration: HEADLINE_DURATION }}
            >
              Electromecánica <span className="text-blue-text">industrial</span> para plantas que no
              pueden parar
            </h1>

            {/* Descripción */}
            <p
              className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-white/70 md:text-xl"
              style={{ animationDelay: STEP.description }}
            >
              Electromecánica industrial, automatización, mantenimiento, infraestructura y respaldo
              energético para plantas que no pueden detenerse.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
              style={{ animationDelay: STEP.ctas }}
            >
              <Link
                href="/servicios"
                className="btn btn-primary px-7 py-4 text-sm tracking-[0.06em]"
              >
                NUESTROS SERVICIOS
                <ArrowRight className="btn-icon h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/nosotros"
                className="btn btn-outline px-7 py-4 text-sm tracking-[0.06em]"
              >
                CONOCER MÁS
                <ChevronRight className="btn-icon h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Indicadores. Numerados como el resto del sistema. */}
            <div
              className="mt-14 animate-fade-up border-t border-line pt-8"
              style={{ animationDelay: STEP.indicators }}
            >
              <ul className="flex flex-wrap gap-x-10 gap-y-4">
                {indicators.map((text, index) => (
                  <li key={text} className="flex items-center gap-3">
                    <span className="index-number text-white/25" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                    <span className="text-sm text-white/70">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Panel derecho - Logotipo, con el recorrido de parallax más corto */}
          <div className="hidden items-center justify-center lg:col-span-5 lg:flex">
            <ParallaxLayer speed={-0.06} className="relative">
              <div className="relative animate-scale-in" style={{ animationDelay: STEP.panel }}>
                {/* Halo azul muy tenue */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-16 rounded-full bg-blue/5 blur-[80px]"
                />
                {/* Escuadras técnicas: encuadran el logotipo como una mira. */}
                <span
                  aria-hidden="true"
                  className="absolute -left-10 -top-10 h-8 w-8 border-l border-t border-accent/40"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-10 h-8 w-8 border-b border-r border-blue/45"
                />

                <Image
                  src="/images/logo/logo-principal.webp"
                  alt="SERVITEK"
                  width={400}
                  height={133}
                  className="relative h-auto w-full max-w-[340px] drop-shadow-[0_0_40px_rgb(8_120_249_/_0.15)]"
                  priority
                />
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </div>

      {/* Fundido inferior hacia la sección siguiente */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent"
      />
    </section>
  );
}
