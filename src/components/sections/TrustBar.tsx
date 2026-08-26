import { StatCard } from '@/components/ui/StatCard';

const stats = [
  { value: '+4', label: 'Unidades de negocio' },
  { value: '24/7', label: 'Soporte técnico' },
  { value: '100%', label: 'Compromiso técnico' },
  { value: 'PY', label: 'Cobertura nacional' },
];

export function TrustBar() {
  return (
    <section className="bg-surface border-b border-border">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
