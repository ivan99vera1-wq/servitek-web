import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-primary text-balance">
              Continuidad operativa.
              <br />
              Eficiencia energética.
              <br />
              <span className="text-accent">Seguridad crítica.</span>
            </h2>
            <p className="mt-6 text-lg text-text-muted">
              El crecimiento industrial del país exige infraestructuras eléctricas modernas
              y de alta confiabilidad que minimicen los tiempos de parada y optimicen el
              consumo energético.
            </p>
            <div className="mt-8">
              <Button href="/contacto" size="lg">
                SOLICITAR PRESUPUESTO
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
