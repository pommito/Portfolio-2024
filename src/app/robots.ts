import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://victorlebecq.fr';

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/works'],
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
