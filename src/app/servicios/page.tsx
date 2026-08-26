import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { ServiceCard } from '@/components/services/ServiceCard';
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
        subtitle="Soluciones integrales de ingeniería eléctrica y electromecánica para industrias en Paraguay."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
