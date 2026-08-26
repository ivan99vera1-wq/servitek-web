'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { serviceOptions } from '@/data/contact';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { trackFormSubmit, trackWhatsAppClick } from '@/lib/analytics';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Nombre requerido'),
  company: z.string().min(2, 'Empresa requerida'),
  phone: z.string().min(8, 'Teléfono requerido'),
  city: z.string().min(2, 'Ciudad requerida'),
  serviceType: z.string().min(1, 'Seleccione un servicio'),
  message: z.string().min(10, 'Mensaje requerido'),
  honeypot: z.string().max(0, 'Campo honeypot detectado'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      honeypot: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    trackFormSubmit('contact_form');
    trackWhatsAppClick();

    const message = `Hola, me interesa información sobre sus servicios.

*Datos de contacto:*
- Nombre: ${data.name}
- Empresa: ${data.company}
- Teléfono: ${data.phone}
- Ciudad: ${data.city}
- Servicio de interés: ${data.serviceType}

*Mensaje:*
${data.message}`;

    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
          Nombre completo *
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Su nombre"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-accent">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
          Empresa *
        </label>
        <input
          type="text"
          id="company"
          {...register('company')}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Nombre de la empresa"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-accent">{errors.company.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="0981 118743"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-accent">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-text mb-2">
            Ciudad *
          </label>
          <input
            type="text"
            id="city"
            {...register('city')}
            className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Asunción"
          />
          {errors.city && (
            <p className="mt-1 text-sm text-accent">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-text mb-2">
          Tipo de servicio *
        </label>
        <select
          id="serviceType"
          {...register('serviceType')}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Seleccione un servicio</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-accent">{errors.serviceType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Describa su necesidad técnica..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-accent">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot field - anti-spam */}
      <input
        type="text"
        {...register('honeypot')}
        className="absolute opacity-0 pointer-events-none"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="flex items-start gap-2 text-sm text-text-muted">
        <input
          type="checkbox"
          id="privacy"
          required
          className="mt-1"
        />
        <label htmlFor="privacy">
          Al enviar aceptas la{' '}
          <a href="/politica-de-privacidad" className="text-primary hover:underline">
            Política de Privacidad
          </a>
        </label>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'ENVIAR POR WHATSAPP'}
      </Button>

      <p className="text-xs text-text-muted text-center">
        El formulario enviará los datos por WhatsApp a nuestro equipo técnico.
      </p>
    </form>
  );
}
