import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { services } from '@/data/services';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Servicios',
  description: 'SERVITEK ofrece soluciones de ingeniería eléctrica, electromecánica, automatización, mantenimiento, infraestructura y respaldo energético.',
  path: '/servicios',
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Nuestros Servicios"
        subtitle="Cuatro áreas especializadas que cubren toda la cadena de soluciones eléctricas e industriales para operaciones que no pueden parar."
      />

      {/* Introducción */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="label-engineering text-accent">ENFOQUE TÉCNICO</span>
              <p className="mt-4 text-lg text-text-muted leading-relaxed">
                Cada servicio está diseñado para resolver problemas reales de la industria paraguaya.
                Desde diagnóstico preciso hasta puesta en marcha, nuestro equipo especializado
                garantiza la continuidad operativa de su planta industrial.
              </p>
            </div>
          </ScrollReveal>

          {/* Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Nuestro proceso de trabajo"
              subtitle="Cada proyecto sigue un proceso estructurado que garantiza resultados confiables."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Diagnóstico', description: 'Análisis técnico completo de su infraestructura eléctrica y necesidades operativas.' },
              { step: '02', title: 'Propuesta', description: 'Diseño de solución técnica con alcance, cronograma y presupuesto detallado.' },
              { step: '03', title: 'Ejecución', description: 'Implementación por equipo especializado con protocolos de seguridad y calidad.' },
              { step: '04', title: 'Seguimiento', description: 'Puesta en marcha, pruebas y soporte técnico continuo para garantizar la operación.' },
            ].map((item) => (
              <ScrollReveal key={item.step} delay={parseInt(item.step) * 100}>
                <div className="text-center md:text-left">
                  <span className="font-mono text-4xl font-bold text-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 lg:text-h1 font-bold text-white">
                ¿Necesita una solución técnica?
              </h2>
              <p className="mt-6 text-lg text-white/80">
                Cuéntanos qué necesita su operación y nuestro equipo podrá evaluar
                la solución adecuada.
              </p>
              <div className="mt-8">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200"
                >
                  SOLICITAR PRESUPUESTO
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
