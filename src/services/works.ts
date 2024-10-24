import { selectedWorks, selectedWorkType } from '@/constant/selectedWorks';

export async function getWorkByUrl(slug: string): Promise<selectedWorkType | null> {
  const work = selectedWorks.find((work) => work.slug === slug);
  return work || null;
}
