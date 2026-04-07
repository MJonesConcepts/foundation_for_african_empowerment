import type { Request, Response } from 'express';

// ── Types ────────────────────────────────────────────────────────
interface NewsArticle {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  category: string;
  excerpt?: string;
  author?: string;
}

// ── Seed data ─────────────────────────────────────────────────────
// Replace with a real DB query (Postgres, Mongo, etc.) when ready.
const NEWS_SEED: NewsArticle[] = [
  {
    id: '1',
    title: 'Creating an Island of Stability: How Teach For Ukraine Fellows support learning amidst blackouts and bitter cold',
    href: '/news/teach-for-ukraine-stability',
    imageSrc: 'https://teachforall.org/sites/default/files/styles/video_image/public/2026-01/liudmyla_poberezhna.jpg',
    imageAlt: 'Teach For Ukraine fellow in classroom',
    date: '2026-01-15',
    category: 'Stories',
    excerpt: 'Despite ongoing conflict, Teach For Ukraine fellows are finding creative ways to keep students engaged and learning.',
    author: 'Teach For Ukraine Team',
  },
  {
    id: '2',
    title: 'From rubble to system change: A STEAM journey rooted in community and leadership',
    href: '/news/steam-journey-system-change',
    imageSrc: 'https://teachforall.org/sites/default/files/styles/video_image/public/2026-02/img_3344.jpg',
    imageAlt: 'Students working on a STEAM project',
    date: '2026-02-03',
    category: 'Impact',
    excerpt: 'One alumna is turning her classroom experience into a movement for systemic change through STEAM education.',
    author: 'Editorial Team',
  },
  {
    id: '3',
    title: 'We are the system: Why the future of education must be created with youth',
    href: '/news/future-of-education-youth',
    imageSrc: 'https://teachforall.org/sites/default/files/styles/video_image/public/2025-06/raquel.png',
    imageAlt: 'Young person speaking at a conference',
    date: '2025-06-20',
    category: 'Blog',
    excerpt: 'Young people are not just the future of education — they are co-designers of it right now.',
    author: 'Raquel Santos',
  },
  {
    id: '4',
    title: 'From Innovation to Insight: Exploring teacher development for holistic student growth through the Action Learning Framework in Colombia',
    href: '/news/action-learning-framework-colombia',
    imageSrc: 'https://teachforall.org/sites/default/files/styles/video_image/public/2026-02/exc%20hundred%20video.jpg',
    imageAlt: 'Teachers in a professional development workshop in Colombia',
    date: '2026-02-10',
    category: 'Research',
    excerpt: 'A new framework in Colombia is linking teacher professional development directly to student outcomes.',
    author: 'Research Team',
  },
  {
    id: '5',
    title: 'Climate Education Summit brings together 200 network leaders across 40 countries',
    href: '/news/climate-education-summit-2026',
    imageSrc: 'https://teachforall.org/sites/default/files/styles/video_image/public/2026-01/liudmyla_poberezhna.jpg',
    imageAlt: 'Network leaders gathered at a climate education summit',
    date: '2026-01-28',
    category: 'Events',
    excerpt: 'Leaders from across the Teach For All network convened to share best practices in climate education.',
    author: 'Events Team',
  },
  {
    id: '6',
    title: 'Girls\' Education Initiative reaches one million students across 25 partner countries',
    href: '/news/girls-education-milestone',
    imageSrc: 'https://teachforall.org/sites/default/files/styles/video_image/public/2023-02/tfpak_img_0340.jpg',
    imageAlt: 'Girls in school uniforms celebrating',
    date: '2026-02-14',
    category: 'Impact',
    excerpt: 'A major milestone for our Girls\' Education Initiative as it reaches one million students.',
    author: 'GEI Team',
  },
];

// ── Controllers ───────────────────────────────────────────────────

/**
 * GET /api/news
 * Query params: limit (default 4), page (default 1), category (optional)
 */
export function getNews(req: Request, res: Response): void {
  const limit = Math.min(parseInt(req.query.limit as string ?? '4', 10), 20);
  const page = Math.max(parseInt(req.query.page as string ?? '1', 10), 1);
  const category = req.query.category as string | undefined;

  let filtered = NEWS_SEED;
  if (category) {
    filtered = NEWS_SEED.filter(
      (a) => a.category.toLowerCase() === category.toLowerCase()
    );
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  res.json({
    success: true,
    data,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  });
}

/**
 * GET /api/news/:id
 */
export function getNewsById(req: Request, res: Response): void {
  const article = NEWS_SEED.find((a) => a.id === req.params.id);

  if (!article) {
    res.status(404).json({ success: false, message: 'Article not found' });
    return;
  }

  res.json({ success: true, data: article });
}
