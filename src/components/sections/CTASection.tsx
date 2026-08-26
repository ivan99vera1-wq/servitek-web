import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative section-padding bg-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <span className="label-engineering text-white/60">CONTACTO</span>
            <h2 className="mt-4 text-h2 lg:text-h1 font-bold text-white text-balance">
              ¿Necesita una solución técnica?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Cuéntanos qué necesita su operación y nuestro equipo podrá evaluar
              la solución adecuada. Respuesta garantizada en menos de 24 horas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto" size="lg" className="bg-white text-accent hover:bg-white/90">
                SOLICITAR PRESUPUESTO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="https://wa.me/595981118743"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md border-2 border-white/30 text-white hover:bg-white hover:text-accent transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp directo
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
