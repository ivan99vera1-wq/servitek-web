'use client';

import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
      {/* Background Pattern - Líneas de diagrama eléctrico */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent Line - Firma visual */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Label de ingeniería */}
          <div className="mb-6">
            <span className="label-engineering text-white/60">
              SOLUCIONES INDUSTRIALES EN PARAGUAY
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-display lg:text-[4rem] font-bold text-white leading-[1.05] tracking-tight">
            Continuidad operativa.
            <br />
            <span className="text-accent">Ingeniería que responde.</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Soluciones eléctricas y electromecánicas para operaciones que no pueden parar.
            Diagnóstico preciso. Respuesta técnica. Continuidad operativa.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/contacto" size="lg">
              SOLICITAR PRESUPUESTO
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="/servicios" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
              CONOCER SERVICIOS
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Indicador de confianza */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-white/50 font-mono">
              RUC: 80176311-8 | SERVITEK E.A.S.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />
    </section>
  );
}
