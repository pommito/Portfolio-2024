import type { MetadataRoute } from 'next';
import { selectedWorks, selectedWorkType } from '@/constant/selectedWorks';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://victorlebecq.fr';

  const workSitemaps = selectedWorks.map((work: selectedWorkType) => ({
    url: `${baseUrl}/works/${work.slug}`,
    lastModified: new Date(),
  }));

  const staticRoutes = [
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/works`, lastModified: new Date() },
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...staticRoutes,
    ...workSitemaps,
  ];
}
