import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import NetworkSection from '@/components/sections/WhereSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import NewsSection from '@/components/sections/NewsSection';
import NewsletterBand from '@/components/sections/NewsletterBand';
import type { NewsCard } from '@/types';
import FocusSection from '@/components/sections/FocusSection';
import type { FocusSlide } from '@/components/sections/FocusSection';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'We improve the quality of life for the most vulnerable children including those with disabilities.',
};

// Static seed data — replace with API fetch when backend is ready.
// Example: const { data: news } = await fetchNews(4);
const NEWS_CARDS: NewsCard[] = [
  {
    id: '1',
    title:
      'Creating an Island of Stability: How Teach For Ukraine Fellows support learning amidst blackouts and bitter cold',
    href: '/news/teach-for-ukraine-stability',
    imageSrc:
      '/media/news/ukraine-fellows.jpg',
    imageAlt: 'Teach For Ukraine fellow in classroom',
    date: '2026-01-15',
    category: 'Stories',
  },
  {
    id: '2',
    title:
      'From rubble to system change: A STEAM journey rooted in community and leadership',
    href: '/news/steam-journey-system-change',
    imageSrc:
      '/media/news/steam-journey.jpg',
    imageAlt: 'Students working on a STEAM project',
    date: '2026-02-03',
    category: 'Impact',
  },
  {
    id: '3',
    title:
      'We are the system: Why the future of education must be created with youth',
    href: '/news/future-of-education-youth',
    imageSrc:
      '/media/news/youth-education.png',
    imageAlt: 'Young person speaking at a conference',
    date: '2025-06-20',
    category: 'Blog',
  },
  {
    id: '4',
    title:
      'From Innovation to Insight: Exploring teacher development for holistic student growth through the Action Learning Framework in Colombia',
    href: '/news/action-learning-framework-colombia',
    imageSrc:
      '/media/news/colombia-framework.jpg',
    imageAlt: 'Teachers in a professional development workshop in Colombia',
    date: '2026-02-10',
    category: 'Research',
  },
];

const SPOTLIGHT_SLIDES: FocusSlide[] = [
  {
    id: '1',
    imageSrc: 'https://mariosonline.site/images/fae/slide-1.jpg',
    imageAlt: 'Description of image one',
    heading: 'Your First Focus Heading',
    body: 'Write a short description here about this focus item. Keep it concise and compelling.',
    ctaLabel: 'Learn More',
    ctaHref: '/your-link',
  },
  {
    id: '2',
    imageSrc: 'https://mariosonline.site/images/fae/slide-2.jpg',
    imageAlt: 'Description of image two',
    heading: 'Your Second Focus Heading',
    body: 'Write a short description here about this focus item. Keep it concise and compelling.',
    ctaLabel: 'Take Action',
    ctaHref: '/your-link',
  },
  {
    id: '3',
    imageSrc: 'https://mariosonline.site/images/fae/slide-3.jpg',
    imageAlt: 'Description of image three',
    heading: 'Your Third Focus Heading',
    body: 'Write a short description here about this focus item. Keep it concise and compelling.',
    ctaLabel: 'Get Involved',
    ctaHref: '/your-link',
  },
  {
    id: '4',
    imageSrc: 'https://mariosonline.site/images/fae/slide-4.jpg',
    imageAlt: 'Description of image four',
    heading: 'Your Fourth Focus Heading',
    body: 'Write a short description here about this focus item. Keep it concise and compelling.',
    ctaLabel: 'Find Out More',
    ctaHref: '/your-link',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        headline="Our vision is of a world that is truly inclusive, supportive, protective and better for all children and young people."
      />
      <FocusSection title="Our Focus" slides={SPOTLIGHT_SLIDES} />
      <NetworkSection />
      <WhatWeDoSection
        thumbnailSrc="/media/video-thumbnails/what-we-do.jpg"
        videoUrl="https://www.youtube.com/embed/Z-EDVBEiNwQ"
      />
      <NewsSection cards={NEWS_CARDS} />
      <NewsletterBand />
    </>
  );
}
