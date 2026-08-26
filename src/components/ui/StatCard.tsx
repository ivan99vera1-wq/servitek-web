import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn('trust-indicator', className)}>
      <span className="trust-indicator-value font-mono">{value}</span>
      <span className="trust-indicator-label">{label}</span>
    </div>
  );
}
