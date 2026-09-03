import { Metadata } from 'next';
import { PageHero } from '@/components/ui/PageHero';
import { SectorCard } from '@/components/sectors/SectorCard';
import { sectors } from '@/data/sectors';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CTASection } from '@/components/sections/CTASection';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sectores',
  description:
    'SERVITEK atiende los sectores industriales más exigentes de Paraguay con soluciones electromecánicas de alta confiabilidad.',
  path: '/sectores',
});

export default function SectoresPage() {
  return (
    <>
      <PageHero
        eyebrow="SECTORES"
        title="Sectores Industriales"
        subtitle="Soluciones especializadas para los sectores más exigentes de la industria paraguaya."
      />

      <section className="section-padding bg-navy">
        <div className="container-custom">
          <h2 className="sr-only">Sectores que atendemos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sectors.map((sector, index) => (
              <ScrollReveal key={sector.id} delay={index * 90} fullHeight>
                <SectorCard sector={sector} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
