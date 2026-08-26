import { Hero } from '@/components/hero/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ValueProposition } from '@/components/sections/ValueProposition';
import { BusinessUnits } from '@/components/sections/BusinessUnits';
import { WhyServitek } from '@/components/sections/WhyServitek';
import { SectorsPreview } from '@/components/sections/SectorsPreview';
import { ProjectsPreview } from '@/components/sections/ProjectsPreview';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProposition />
      <BusinessUnits />
      <WhyServitek />
      <SectorsPreview />
      <ProjectsPreview />
      <CTASection />
    </>
  );
}
