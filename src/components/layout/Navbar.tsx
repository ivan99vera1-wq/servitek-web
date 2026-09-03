'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { navigation, ctaNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    // Un único listener de scroll para el estado de la cabecera y la barra de
    // progreso. El trabajo real se hace dentro de requestAnimationFrame y solo
    // escribe `transform`, así que no fuerza reflow ni compite con el pintado.
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setIsScrolled(y > 24);

      const bar = progressRef.current;
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const drawer = drawerRef.current;
    const toggle = toggleRef.current;
    const focusables = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        return;
      }
      // Atrapa el foco dentro del cajón mientras está abierto.
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    focusables()[0]?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      // Devuelve el foco al botón que abrió el menú.
      toggle?.focus();
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50',
          'transition-[background-color,box-shadow,backdrop-filter] duration-slow ease-out-expo',
          isScrolled
            ? 'bg-navy-deep/92 shadow-header backdrop-blur-xl'
            : 'bg-gradient-to-b from-navy-deep/85 to-transparent backdrop-blur-[2px]'
        )}
      >
        <div
          className={cn(
            'container-custom flex items-center justify-between',
            // La altura se reduce al hacer scroll: la cabecera "se recoge"
            // para devolver espacio al contenido.
            'transition-[height] duration-slow ease-out-expo',
            isScrolled ? 'h-14 md:h-header-sm' : 'h-16 md:h-header'
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            aria-label="SERVITEK — Inicio"
          >
            <Image
              src="/images/logo/logo-principal.webp"
              alt="SERVITEK"
              width={181}
              height={60}
              className={cn(
                'w-auto transition-[height,filter] duration-slow ease-out-expo',
                'group-hover:brightness-110',
                isScrolled ? 'h-9 md:h-10' : 'h-10 md:h-12'
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegación principal">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'group relative py-1 text-sm font-medium',
                    'transition-colors duration-fast ease-out',
                    active ? 'text-white' : 'text-white/70 hover:text-white'
                  )}
                >
                  {/* Punto rojo de sección activa. Ocupa sitio siempre (misma
                      caja) para que el texto no se desplace al navegar. */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent',
                      'transition-opacity duration-base ease-out-expo',
                      active ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {item.label}
                  {/* Subrayado: rojo cuando la sección está activa, azul en
                      hover. Crece desde la izquierda. */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-[2px] origin-left',
                      'transition-[width,background-color] duration-base ease-out-expo',
                      active ? 'w-full bg-accent' : 'w-0 bg-blue group-hover:w-full'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href={ctaNavigation.href}
              className="btn btn-primary px-5 py-2.5 text-xs tracking-[0.08em]"
            >
              {ctaNavigation.label}
              <ArrowRight className="btn-icon h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center text-white/80 transition-colors duration-fast hover:text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-movil"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Filete inferior + progreso de lectura. Solo se escribe scaleX() en
            un elemento compuesto: no provoca layout. */}
        <div
          className={cn(
            'relative h-px w-full bg-line transition-opacity duration-slow',
            isScrolled ? 'opacity-100' : 'opacity-0'
          )}
          aria-hidden="true"
        >
          <div
            ref={progressRef}
            className="h-full w-full origin-left bg-gradient-to-r from-accent-deep via-blue to-blue/40"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          /* z-[55]: por encima de la cabecera (z-50) y del botón flotante de
             WhatsApp, que también es z-50 y se pintaba sobre el cajón. */
          'fixed inset-0 z-[55] bg-navy-deep/70 backdrop-blur-sm lg:hidden',
          'transition-[opacity,visibility] duration-base ease-out',
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Recorte del cajón.
          El cajón cerrado se desplaza a `translate-x-full`, es decir, un ancho
          completo por fuera del borde derecho. Al ser `position: fixed` su
          bloque contenedor es el viewport, así que ni el `overflow-x` del
          <body> ni el de ninguna sección lo recortan: dejaba ~16 px de scroll
          horizontal en todas las páginas por debajo de 1024 px. Este envoltorio
          ocupa exactamente el viewport y recorta el desbordamiento, que es lo
          que antes se intentaba resolver con `overflow-x: hidden` en <html> —
          y aquello rompía `position: sticky` en toda la web. */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] overflow-hidden lg:hidden"
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Mobile Menu */}
        <div
          ref={drawerRef}
          id="menu-movil"
          className={cn(
            'pointer-events-auto absolute right-0 top-0 h-full w-full max-w-sm bg-surface shadow-2xl',
            'transition-[transform,visibility] duration-base ease-out-expo',
            /* Cerrado, el cajón sigue en el DOM desplazado fuera de pantalla y
             dejaba 9 paradas de tabulación invisibles en cada página.
             `visibility: hidden` lo saca del orden de foco en todos los
             navegadores; se transiciona junto al transform para no cortar la
             animación de salida. (React 18 descarta el atributo `inert`.) */
            isMobileMenuOpen ? 'visible translate-x-0' : 'invisible translate-x-full'
          )}
          aria-hidden={!isMobileMenuOpen}
          role={isMobileMenuOpen ? 'dialog' : undefined}
          aria-modal={isMobileMenuOpen ? true : undefined}
          aria-label="Menú de navegación"
        >
          {/* Filete de acento en el canto del cajón */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent-deep via-blue/40 to-transparent"
          />

          <div className="flex h-full flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between border-b border-line p-4">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/images/logo/logo-principal.webp"
                  alt="SERVITEK"
                  width={142}
                  height={47}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-mr-2 p-2 text-white/80 transition-colors duration-fast hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Navegación móvil">
              <ul>
                {navigation.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <li
                      key={item.href}
                      className={cn(
                        'transition-[opacity,transform] ease-out-expo',
                        isMobileMenuOpen
                          ? 'translate-x-0 opacity-100 duration-slow'
                          : 'translate-x-6 opacity-0 duration-fast'
                      )}
                      /* Entrada escalonada: cada elemento arranca 55 ms después
                       del anterior. Al cerrar, todos salen a la vez y más
                       rápido — una salida lenta se percibe como lentitud. */
                      style={{ transitionDelay: isMobileMenuOpen ? `${90 + index * 55}ms` : '0ms' }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'group flex items-center gap-4 border-b border-line py-4',
                          'transition-colors duration-fast',
                          active ? 'text-white' : 'text-white/70 hover:text-white'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span
                          className={cn(
                            'font-mono text-index tabular-nums',
                            active ? 'text-accent' : 'text-white/30'
                          )}
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-lg font-medium">{item.label}</span>
                        {active && <span className="status-dot ml-auto" aria-hidden="true" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile CTA */}
            <div
              className={cn(
                'border-t border-line p-4',
                'transition-[opacity,transform] ease-out-expo',
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100 duration-slow'
                  : 'translate-y-3 opacity-0 duration-fast'
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${90 + navigation.length * 55}ms` : '0ms',
              }}
            >
              <Link
                href={ctaNavigation.href}
                className="btn btn-primary w-full px-6 py-3.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {ctaNavigation.label}
                <ArrowRight className="btn-icon h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Reserva del alto de la cabecera fija. Es la altura en reposo: la
          cabecera solo se encoge una vez que ya hay scroll, así que este
          hueco nunca cambia de tamaño y no genera CLS. */}
      <div className="h-16 md:h-header" aria-hidden="true" />
    </>
  );
}
