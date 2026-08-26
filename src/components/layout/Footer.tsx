import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { navigation, footerNavigation } from '@/data/navigation';
import { company } from '@/data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Logo variant="horizontal" className="mb-4" />
            <p className="text-white/70 max-w-md">
              {company.description}
            </p>
            <div className="mt-6 flex gap-4">
              {company.social.facebook && (
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {company.social.instagram && (
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {company.social.linkedin && (
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/70">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <span>{company.contact.phoneFormatted}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {company.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>{company.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              &copy; {currentYear} {company.name}. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
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
