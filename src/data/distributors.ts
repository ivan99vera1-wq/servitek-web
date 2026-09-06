import { Distributor } from '@/types/distributor';

/**
 * Marcas de las que SERVITEK es distribuidor oficial. Contenido y logotipo
 * tomados del catálogo de producto facilitado por la marca — no se agregan
 * cifras, certificaciones ni datos comerciales que no figuren en él.
 */
export const distributors: Distributor[] = [
  {
    name: 'Conexled',
    logo: '/images/brands/conexled-logo.png',
    logoWidth: 651,
    logoHeight: 109,
    description:
      'Fabricante de iluminación LED de alta performance, referente en el mercado nacional e internacional y parte de un grupo con más de tres décadas de experiencia en el sector.',
    categories: [
      'Iluminación industrial',
      'Atmósferas explosivas (zonas Ex)',
      'Iluminación pública y luminarias para postes',
      'Iluminación comercial',
      'Emergencia autónoma',
    ],
    certifications: ['IP66', 'IP67', 'IP69K'],
    website: 'https://www.conexled.com',
    catalogUrl: '/documents/catalogo-conexled.pdf',
    catalogLabel: 'Guía Rápida de Productos 2026',
  },
];
