import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { navigation, footerNavigation } from '@/data/navigation';
import { company } from '@/data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030B14] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/images/logo/logo-principal.webp"
                alt="SERVITEK"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 max-w-md leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-white/55 mb-5">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-blue-text transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-white/55 mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-blue-text/70" />
                <span>{company.contact.phoneFormatted}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-blue-text/70" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-blue-text transition-colors"
                >
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-blue-text/70" />
                <span>{company.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/55">
              &copy; {currentYear} {company.name}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs text-white/55 hover:text-white/70 transition-colors"
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
