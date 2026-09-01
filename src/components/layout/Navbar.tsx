'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { navigation, ctaNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const drawer = drawerRef.current;
    const toggle = toggleRef.current;
    const focusables = () =>
      Array.from(
        drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      );

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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-navy-deep/95 backdrop-blur-md border-b border-line shadow-[0_4px_30px_rgb(0_0_0_/_0.3)]'
            : 'bg-navy/80 backdrop-blur-sm'
        )}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-header">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/images/logo/logo-principal.webp"
              alt="SERVITEK"
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-200 group',
                  isActive(item.href) ? 'text-blue-text' : 'text-white/75 hover:text-blue-text'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-[2px] bg-blue transition-all duration-300 group-hover:w-full',
                    isActive(item.href) ? 'w-full' : 'w-0'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href={ctaNavigation.href}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-solid text-white text-sm font-semibold rounded-md transition-all duration-200 hover:bg-blue-solid-hover hover:shadow-glow-sm"
            >
              {ctaNavigation.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={toggleRef}
            type="button"
            className="lg:hidden -mr-2 flex h-11 w-11 items-center justify-center text-white/75 transition-colors hover:text-blue-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="menu-movil"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={drawerRef}
        id="menu-movil"
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-surface shadow-2xl transform lg:hidden',
          'transition-[transform,visibility] duration-300',
          /* Cerrado, el cajón sigue en el DOM desplazado fuera de pantalla y
             dejaba 9 paradas de tabulación invisibles en cada página.
             `visibility: hidden` lo saca del orden de foco en todos los
             navegadores; se transiciona junto al transform para no cortar la
             animación de salida. (React 18 descarta el atributo `inert`.) */
          isMobileMenuOpen ? 'translate-x-0 visible' : 'translate-x-full invisible'
        )}
        aria-hidden={!isMobileMenuOpen}
        role={isMobileMenuOpen ? 'dialog' : undefined}
        aria-modal={isMobileMenuOpen ? true : undefined}
        aria-label="Menú de navegación"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                src="/images/logo/logo-principal.webp"
                alt="SERVITEK"
                width={140}
                height={47}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              className="p-2 -mr-2 text-white/75 hover:text-blue-text transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto p-4" aria-label="Navegación móvil">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'block rounded-lg px-4 py-3.5 text-base font-medium transition-all duration-200 hover:bg-white/5',
                      isActive(item.href) ? 'bg-white/5 text-blue-text' : 'text-white/75 hover:text-blue-text'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div className="p-4 border-t border-white/10">
            <Link
              href={ctaNavigation.href}
              className="flex items-center justify-center w-full px-6 py-3.5 bg-blue-solid text-white font-semibold rounded-md transition-all duration-200 hover:bg-blue-solid-hover"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {ctaNavigation.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-header" />
    </>
  );
}
