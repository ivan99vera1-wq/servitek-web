/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://servitek.com.py',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
};
