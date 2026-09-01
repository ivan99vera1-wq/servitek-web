/**
 * URL canónica del sitio.
 *
 * Se lee de NEXT_PUBLIC_SITE_URL en tiempo de build. Mientras no haya dominio
 * propio, en Cloudflare Pages se puede dejar sin definir y usar el valor por
 * defecto, o apuntarla al subdominio *.pages.dev del despliegue.
 *
 * No escribir el dominio a mano en ningún otro fichero: importar SITE_URL.
 */
const FALLBACK_SITE_URL = 'https://servitek.pages.dev';

function normalize(url: string): string {
  return url.trim().replace(/\/+$/, '');
}

export const SITE_URL = normalize(process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL);

/** Construye una URL absoluta a partir de una ruta interna ("/servicios"). */
export function absoluteUrl(path = '/'): string {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Mientras el sitio no tenga dominio propio no debe indexarse: evita que
 * Google registre el subdominio temporal de Cloudflare Pages y que los
 * contenidos provisionales (proyectos de ejemplo, páginas legales sin
 * redactar) entren en el índice.
 *
 * Poner a "true" únicamente cuando el dominio definitivo esté conectado y el
 * contenido real esté publicado.
 */
export const IS_INDEXABLE = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';
