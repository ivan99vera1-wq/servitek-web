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
      <nav
        aria-label="Ruta de navegación"
        className={cn('border-b border-line bg-navy py-4', className)}
      >
        <ol className="container-custom flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-white/55">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/25" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="text-accent" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="link-underline transition-colors duration-fast hover:text-white"
                  >
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
