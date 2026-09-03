import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** Rótulo monoespaciado superior (SECTORES, PROCESO, ...). */
  eyebrow: string;
  title: string;
  description?: string;
  /** `center` para secciones de portada, `left` para bloques editoriales. */
  align?: 'center' | 'left';
  className?: string;
  /** Clases extra para el <h2>, por si una sección necesita otro tamaño. */
  titleClassName?: string;
  /** Nivel de encabezado. Por defecto h2. */
  as?: 'h2' | 'h3';
}

/**
 * Encabezado de sección del sistema.
 *
 * Antes, ocho secciones repetían el mismo bloque de doce líneas de JSX
 * (`<span class="inline-flex ... font-mono text-[11px] ...">` con dos filetes
 * azules). Cualquier ajuste de la jerarquía obligaba a tocarlas todas y, en la
 * práctica, se desincronizaron.
 *
 * El rótulo lleva ahora el piloto rojo del sistema y un filete que arranca en
 * el acento y se disuelve en azul: es la firma visual que se repite en
 * tarjetas, hero y cabeceras de página.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  titleClassName,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={cn('max-w-3xl', centered ? 'mx-auto text-center' : 'text-left', className)}>
      <span className={cn('inline-flex items-center gap-3', centered && 'justify-center')}>
        <span className="status-dot" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
        <span
          aria-hidden="true"
          className="h-px w-10 bg-gradient-to-r from-blue/60 to-transparent sm:w-16"
        />
      </span>

      <Tag className={cn('mt-6 text-balance text-h2 text-white lg:text-h1', titleClassName)}>
        {title}
      </Tag>

      {description && (
        <p className={cn('mt-5 text-lg leading-relaxed text-white/65', centered && 'mx-auto')}>
          {description}
        </p>
      )}
    </div>
  );
}
