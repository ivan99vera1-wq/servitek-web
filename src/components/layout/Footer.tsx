import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { navigation, footerNavigation } from '@/data/navigation';
import { company } from '@/data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-dark text-white">
      <div className="rule-accent absolute inset-x-0 top-0" aria-hidden="true" />
      {/* pb-28 en móvil: deja hueco para que el botón flotante de WhatsApp
          (fixed, h-14 + bottom-6 = 80px) no tape "Términos y Condiciones". */}
      <div className="container-custom pb-28 pt-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 inline-flex items-center">
              <Image
                src="/images/logo/logo-principal.webp"
                alt="SERVITEK"
                width={181}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-md leading-relaxed text-white/60">{company.description}</p>
            <p className="mt-6 font-mono text-eyebrow uppercase text-white/55">
              {company.legalName} &middot; RUC {company.ruc}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="eyebrow mb-6 block text-white/55">Navegación</h3>
            <ul className="space-y-3.5">
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 py-1 text-sm text-white/60 transition-colors duration-fast hover:text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="index-number text-white/25 transition-colors duration-base group-hover:text-accent"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="link-underline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow mb-6 block text-white/55">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" aria-hidden="true" />
                <span>
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="link-underline transition-colors duration-fast hover:text-accent"
                  >
                    {company.contact.phoneFormatted}
                  </a>
                  <br />
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="link-underline transition-colors duration-fast hover:text-accent"
                  >
                    {company.contact.phoneInternational}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" aria-hidden="true" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="link-underline break-all transition-colors duration-fast hover:text-accent"
                >
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" aria-hidden="true" />
                <span>{company.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-line pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/55">
              &copy; {currentYear} {company.name}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline py-2 text-xs text-white/55 transition-colors duration-fast hover:text-white/80"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
