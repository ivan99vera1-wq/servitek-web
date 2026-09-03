import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contacto',
  description:
    'Contacte con SERVITEK para solicitar presupuesto o consultas sobre servicios electromecánicos industriales.',
  path: '/contacto',
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACTO"
        title="¿Necesita una solución técnica?"
        subtitle="Cuéntenos qué necesita su operación y nuestro equipo podrá evaluar la solución adecuada."
      />

      <section className="section-padding bg-navy">
        <div className="container-custom">
          {/* 7/5: el formulario pesa más que la ficha de contacto, así que se
              lleva la columna ancha en lugar de partir la pantalla al 50 %. */}
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-3">
                  <span className="index-number">01</span>
                  <span className="eyebrow">FORMULARIO</span>
                  <span
                    aria-hidden="true"
                    className="h-px w-12 bg-gradient-to-r from-blue/60 to-transparent"
                  />
                </div>
                <h2 className="mt-5 text-h2 text-white">Solicitar presupuesto</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-white/65">
                  Complete los datos y se abrirá WhatsApp con su consulta ya redactada. Los campos
                  marcados con asterisco son obligatorios.
                </p>
                <div className="rule-accent mt-8" aria-hidden="true" />
              </ScrollReveal>

              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* fullHeight: sin él el envoltorio del revelado mide justo lo
                  que la ficha, y `lg:sticky` se queda sin recorrido — la
                  ficha se iría con el scroll en vez de quedarse fijada. */}
              <ScrollReveal direction="right" delay={120} fullHeight>
                <ContactInfo />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
