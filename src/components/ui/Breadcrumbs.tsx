import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { absoluteUrl } from '@/lib/site';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const trail = [{ label: 'Inicio', href: '/' }, ...items];

  // BreadcrumbList: Google lo usa para mostrar la ruta en los resultados.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Ruta de navegación" className={cn('py-4', className)}>
        <ol className="container-custom flex flex-wrap items-center gap-2 text-sm text-white/55">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
                {isLast ? (
                  <span className="font-medium text-white/80" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-blue-text">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
