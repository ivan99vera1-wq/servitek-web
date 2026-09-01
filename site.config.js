/**
 * Configuración compartida entre el build de Next y next-sitemap.
 *
 * Es CommonJS a propósito: next-sitemap.config.js no puede importar TypeScript.
 * El equivalente para el código de la aplicación es src/lib/site.ts, que lee
 * exactamente las mismas variables de entorno.
 */
const FALLBACK_SITE_URL = 'https://servitek.pages.dev';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL)
  .trim()
  .replace(/\/+$/, '');

/** Solo se indexa cuando el dominio definitivo esté conectado. */
const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

/** Rutas con contenido provisional que no deben entrar en el sitemap. */
const DEMO_PATHS = ['/proyectos', '/proyectos/*', '/politica-de-privacidad', '/terminos-y-condiciones'];

module.exports = { SITE_URL, ALLOW_INDEXING, DEMO_PATHS, FALLBACK_SITE_URL };
