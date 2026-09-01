import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contacto',
  description: 'Contacte con SERVITEK para solicitar presupuesto o consultas sobre servicios de ingeniería eléctrica y electromecánica.',
  path: '/contacto',
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="¿Necesita una solución técnica?"
        subtitle="Cuéntenos qué necesita su operación y nuestro equipo podrá evaluar la solución adecuada."
      />

      <section className="section-padding bg-[#061321]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h3 mb-6 font-bold text-white">Solicitar presupuesto</h2>
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
