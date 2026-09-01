import { describe, it, expect } from 'vitest';
import { generatePageMetadata } from '@/lib/seo';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/schema';
import { absoluteUrl, SITE_URL } from '@/lib/site';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { company } from '@/data/company';

/**
 * Cubre los fallos de SEO que la auditoría encontró: canonical ausente,
 * dominio escrito a fuego y contenido provisional indexable.
 */
describe('URL del sitio', () => {
  it('no lleva barra final', () => {
    expect(SITE_URL.endsWith('/')).toBe(false);
  });

  it('absoluteUrl compone rutas sin duplicar barras', () => {
    expect(absoluteUrl('/servicios')).toBe(`${SITE_URL}/servicios`);
    expect(absoluteUrl('servicios')).toBe(`${SITE_URL}/servicios`);
    expect(absoluteUrl('/')).toBe(SITE_URL);
    expect(absoluteUrl()).toBe(SITE_URL);
  });

  it('no queda ningún dominio escrito a mano en los metadatos', () => {
    const meta = generatePageMetadata({ title: 'X', description: 'Y', path: '/x' });
    expect(JSON.stringify(meta)).not.toContain('servitek.com.py');
  });
});

describe('metadata de página', () => {
  const meta = generatePageMetadata({
    title: 'Servicios',
    description: 'Descripción de prueba',
    path: '/servicios',
  });

  it('emite canonical', () => {
    expect(meta.alternates?.canonical).toBe(`${SITE_URL}/servicios`);
  });

  it('canonical y og:url coinciden', () => {
    expect(meta.openGraph?.url).toBe(meta.alternates?.canonical);
  });

  it('noIndex fuerza que la página no se indexe', () => {
    const legal = generatePageMetadata({
      title: 'Legal',
      description: 'D',
      path: '/legal',
      noIndex: true,
    });
    expect(legal.robots).toMatchObject({ index: false, follow: false });
  });
});

describe('datos estructurados', () => {
  it('Organization y LocalBusiness quedan enlazados por @id', () => {
    const org = generateOrganizationSchema();
    const local = generateLocalBusinessSchema();
    expect(local.parentOrganization['@id']).toBe(org['@id']);
  });

  it('no se publican coordenadas inventadas', () => {
    expect(JSON.stringify(generateLocalBusinessSchema())).not.toContain('GeoCoordinates');
  });

  it('las URL del schema usan el dominio configurado', () => {
    const org = generateOrganizationSchema();
    expect(org.url).toBe(SITE_URL);
    expect(org.logo.startsWith(SITE_URL)).toBe(true);
  });
});

describe('enlace de WhatsApp', () => {
  it('usa solo dígitos en el número y codifica el mensaje', () => {
    const url = generateWhatsAppUrl('hola mundo & test');
    const digitos = company.contact.whatsapp.replace(/\D/g, '');
    expect(url.startsWith(`https://wa.me/${digitos}?text=`)).toBe(true);
    expect(url).toContain('%20');
    expect(url).not.toContain(' ');
  });
});
