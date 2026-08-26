import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { SectorCard } from '@/components/sectors/SectorCard';
import { sectors } from '@/data/sectors';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sectores',
  description: 'SERVITEK atiende los sectores industriales más exigentes de Paraguay con soluciones de ingeniería eléctrica y electromecánica.',
  path: '/sectores',
});

export default function SectoresPage() {
  return (
    <>
      <PageHero
        title="Sectores Industriales"
        subtitle="Soluciones especializadas para los sectores más exigentes de la industria paraguaya."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
