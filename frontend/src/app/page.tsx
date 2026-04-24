import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import NetworkSection from '@/components/sections/WhereSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import NewsSection from '@/components/sections/NewsSection';
import NewsletterBand from '@/components/sections/NewsletterBand';
import type { NewsCard } from '@/types';
import FocusSection from '@/components/sections/FocusSection';
import type { FocusSlide } from '@/components/sections/FocusSection';
import { info } from 'console';

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
      'Get involved and change a life! ',
    href: '/news/teach-for-ukraine-stability',
    imageSrc:
      '/media/news/DSC05969.jpg',
    imageAlt: 'Get involved with FAE and change a life',
    date: '2026-01-15',
    category: 'Impact',
  },
  {
    id: '2',
    title:
      'Participatory approach helped to identify three priority projects at Chemka Village School in Tanzania',
    href: '/news/steam-journey-system-change',
    imageSrc:
      '/media/news/IMG_7228.jpg',
    imageAlt: 'Chemka Village School in Tanzania',
    date: '2026-02-03',
    category: 'Impact',
  },
  {
    id: '3',
    title:
      'Women and young people at Rundugai Village in Kilimanjaro region are geared towards improving access to education for children',
    href: '/news/future-of-education-youth',
    imageSrc:
      '/media/news/IMG-20161014-WA0025.jpg',
    imageAlt: 'Access to education for children',
    date: '2025-06-20',
    category: 'Impact',
  },
  {
    id: '4',
    title:
      'Why not join our Board of Directors?',
    href: '/news/action-learning-framework-colombia',
    imageSrc:
      '/media/news/join-the-board.jpg',
    imageAlt: 'Teachers in a professional development workshop in Colombia',
    date: '2026-02-10',
    category: 'Recruiting',
  },
];

const SPOTLIGHT_SLIDES: FocusSlide[] = [
  {
    id: '1',
    imageSrc: 'https://mariosonline.site/images/fae/slide-1.jpg',
    imageAlt: 'Description of image one',
    heading: 'Join our team and make a difference',
    body: 'We are currently recruiting more Board members and Advisers. \nIf you are interested to become our Board member or Adviser, please  send a letter of interest and your CV to us today at email: info@thefaeafrica.org.',
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
