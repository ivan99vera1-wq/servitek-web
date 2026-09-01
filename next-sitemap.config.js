/**
 * Sitemap y robots.txt.
 *
 * outDir DEBE ser 'out': `next build` con output:'export' copia public/ a out/
 * ANTES de que se ejecute el postbuild. Si next-sitemap escribiera en public/
 * (su valor por defecto), el sitemap desplegado iría siempre un build por
 * detrás del contenido.
 *
 * siteUrl se toma de NEXT_PUBLIC_SITE_URL para no fijar aquí un dominio.
 */
const { SITE_URL, ALLOW_INDEXING, DEMO_PATHS } = require('./site.config');

module.exports = {
  siteUrl: SITE_URL,
  outDir: 'out',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  autoLastmod: true,
  // Contenido provisional: fuera del sitemap hasta que sea real.
  exclude: [...DEMO_PATHS, '/api/*'],
  transform: async (config, path) => {
    const priority = path === '/' ? 1.0 : path.split('/').length > 2 ? 0.6 : 0.8;
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: ALLOW_INDEXING
      ? [{ userAgent: '*', allow: '/', disallow: DEMO_PATHS }]
      : // Sin dominio propio todavía: no indexar el subdominio temporal.
        [{ userAgent: '*', disallow: '/' }],
    additionalSitemaps: [],
  },
};
