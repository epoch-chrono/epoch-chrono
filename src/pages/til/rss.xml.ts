import rss from '@astrojs/rss';
import { getPublishedTils } from '../../utils/content';

export async function GET(context: { site: URL }) {
  const tils = await getPublishedTils();

  return rss({
    title: 'epoch-chrono · TIL',
    description: 'Today I Learned — notas curtas sobre o que aprendi.',
    site: context.site,
    items: tils.map((til) => ({
      title: til.data.title,
      pubDate: til.data.pubDate,
      link: `/til/${til.id}`,
    })),
  });
}
