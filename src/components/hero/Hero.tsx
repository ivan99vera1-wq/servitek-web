'use client';

import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronRight, Shield, Clock, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
      {/* Background Pattern - Grid industrial */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent Line - Firma visual SERVITEK */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />

      {/* Decorative Elements - Círculos de ingeniería */}
      <div className="absolute right-0 top-1/4 w-96 h-96 border border-white/5 rounded-full" />
      <div className="absolute right-12 top-1/3 w-64 h-64 border border-white/5 rounded-full" />
      <div className="absolute right-24 top-[40%] w-32 h-32 border border-accent/20 rounded-full" />

      {/* Línea de referencia horizontal */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Contenido principal - 7 columnas */}
          <div className="lg:col-span-7">
            {/* Label de ingeniería */}
            <div className="mb-6">
              <span className="label-engineering text-white/50">
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
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
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

            {/* Indicadores de confianza */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm text-white/60">RUC: 80176311-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm text-white/60">Respuesta en menos de 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm text-white/60">Equipo especializado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel derecho - Elemento visual */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <div className="relative">
              {/* Marco decorativo */}
              <div className="absolute -inset-4 border border-white/10 rounded-lg" />
              <div className="absolute -inset-8 border border-white/5 rounded-lg" />

              {/* Contenido visual */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="text-center">
                  <span className="label-engineering text-white/40">SERVITEK E.A.S.</span>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">Ingeniería Eléctrica</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">Automatización Industrial</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">Mantenimiento Electromecánico</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-white/80">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">Infraestructura y Respaldo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element - Gradiente inferior */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
    </section>
  );
}
