import { StatCard } from '@/components/ui/StatCard';
import { aboutContent } from '@/data/company-content';

export function TrustBar() {
  return (
    <section className="bg-surface border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {aboutContent.trustBarStats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
