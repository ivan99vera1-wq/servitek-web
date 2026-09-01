'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {!imgError ? (
          <Image
            src="/images/hero/hero-industrial.webp"
            alt="Infraestructura industrial SERVITEK"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F35] via-[#061321] to-[#030B14]" />
        )}
        {/* Overlay navy oscuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04101C] via-[#04101C]/85 to-[#061321]/60" />
        {/* Gradient azul sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-transparent to-transparent opacity-70" />
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Línea decorativa izquierda */}
      <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue/40 to-transparent" />

      <div className="container-custom relative z-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Contenido principal - 7 columnas */}
          <div className="lg:col-span-7">
            {/* Label superior */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue-text">
                <span className="w-8 h-[1px] bg-blue" />
                PROVISIÓN DE MATERIALES Y SERVICIOS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[3.4rem] xl:text-[3.8rem]">
              Ingeniería eléctrica y{' '}
              <span className="text-blue-text">electromecánica</span> industrial en Paraguay
            </h1>

            {/* Descripción */}
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              Soluciones de ingeniería eléctrica, electromecánica, automatización,
              mantenimiento, infraestructura y respaldo energético para industrias
              en Paraguay.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-solid text-white font-semibold rounded-md transition-all duration-200 hover:bg-blue-solid-hover hover:shadow-[0_0_30px_rgba(8,120,249,0.25)]"
              >
                NUESTROS SERVICIOS
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white font-medium rounded-md transition-all duration-200 hover:bg-white hover:text-navy"
              >
                CONOCER MÁS
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Indicadores */}
            <div className="mt-14 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue" />
                  <span className="text-sm text-white/65">RUC: 80176311-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue" />
                  <span className="text-sm text-white/65">Respuesta en menos de 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue" />
                  <span className="text-sm text-white/65">Equipo especializado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel derecho - Logo SERVITEK */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <div className="relative">
              {/* Glow azul sutil */}
              <div className="absolute -inset-16 bg-blue/5 rounded-full blur-[80px]" />

              {/* Logo grande */}
              <div className="relative">
                <Image
                  src="/images/logo/logo-principal.webp"
                  alt="SERVITEK"
                  width={400}
                  height={133}
                  className="w-full max-w-[340px] h-auto drop-shadow-[0_0_40px_rgba(8,120,249,0.15)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#061321] to-transparent" />
    </section>
  );
}
