import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company } from '@/data/company';

export function ContactInfo() {
  return (
    <div className="bg-surface rounded-lg p-8">
      <h3 className="text-h3 font-bold text-primary mb-6">
        Información de Contacto
      </h3>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-text">Teléfono</p>
            <a
              href={`tel:${company.contact.phone}`}
              className="text-primary hover:underline"
            >
              {company.contact.phoneFormatted}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-text">Email</p>
            <a
              href={`mailto:${company.contact.email}`}
              className="text-primary hover:underline"
            >
              {company.contact.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-text">Ubicación</p>
            <p className="text-text-muted">{company.contact.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-text">Horario</p>
            <p className="text-text-muted">Lunes a Viernes: 08:00 - 17:00</p>
            <p className="text-text-muted">Emergencias: 24/7</p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-sm text-text-muted">
          <strong className="text-text">{company.legalName}</strong>
          <br />
          RUC: {company.ruc}
        </p>
      </div>
    </div>
  );
}
