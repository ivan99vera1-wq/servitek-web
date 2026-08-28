import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative section-padding bg-[#061321] overflow-hidden">
      {/* Glow azul */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue/5 rounded-full blur-[120px]" />

      {/* Líneas decorativas sutiles */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-blue/80">
              <span className="w-8 h-[1px] bg-blue" />
              CONTACTO
              <span className="w-8 h-[1px] bg-blue" />
            </span>
            <h2 className="mt-6 text-h2 lg:text-h1 font-bold text-white text-balance">
              ¿Necesita una solución técnica?
            </h2>
            <p className="mt-6 text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              Cuéntanos qué necesita su operación y nuestro equipo podrá evaluar
              la solución adecuada. Respuesta garantizada en menos de 24 horas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-md bg-blue text-white transition-all duration-200 hover:bg-blue-bright hover:shadow-[0_0_30px_rgba(8,120,249,0.25)]"
              >
                SOLICITAR PRESUPUESTO
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/595981118743"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-md border border-white/25 text-white hover:bg-white hover:text-[#061321] transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                WhatsApp directo
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
