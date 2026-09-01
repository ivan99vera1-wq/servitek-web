import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { company } from '@/data/company';
import { businessHours } from '@/data/company-content';

export function ContactInfo() {
  return (
    <div className="card-dark p-8">
      <h3 className="text-h3 font-bold text-white mb-6">
        Información de Contacto
      </h3>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-blue/10 text-blue-text rounded-lg">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-white/70">Teléfono</p>
            <a href={`tel:${company.contact.phone}`} className="text-blue-text hover:underline">
              {company.contact.phoneFormatted}
            </a>
            <p className="mt-1 text-sm text-white/65">
              Desde el exterior:{' '}
              <a href={`tel:${company.contact.phone}`} className="text-blue-text hover:underline">
                {company.contact.phoneInternational}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-blue/10 text-blue-text rounded-lg">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-white/70">Email</p>
            <a
              href={`mailto:${company.contact.email}`}
              className="text-blue-text hover:underline"
            >
              {company.contact.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-blue/10 text-blue-text rounded-lg">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-white/70">Ubicación</p>
            <p className="text-white/60">{company.contact.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-3 bg-blue/10 text-blue-text rounded-lg">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-white/70">Horario</p>
            <p className="text-white/65">
              {businessHours.weekdays.label}: {businessHours.weekdays.value}
            </p>
            <p className="text-white/65">
              {businessHours.emergency.label}: {businessHours.emergency.value}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-line">
        <p className="text-sm text-white/55">
          <strong className="text-white/70">{company.legalName}</strong>
          <br />
          RUC: {company.ruc}
        </p>
      </div>
    </div>
  );
}
