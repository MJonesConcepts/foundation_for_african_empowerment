import type { NavItem, FooterColumn, IconCard } from '@/types';

// =============================================
// SITE META
// =============================================
export const SITE_NAME = 'Foundation for African Empowerment';
export const SITE_URL = 'https://www.thefaeafrica.org/';
export const SITE_DESCRIPTION =
  'The target of the Foundation for African Empowerment (FAE) is to reach the most vulnerable children and young people including those with disabilities in many parts of Africa. Our initial activities and projects are in Tanzania Mainland and Zanzibar Island.';

// =============================================
// NAVIGATION
// =============================================
export const MAIN_NAV: NavItem[] = [
  {
    label: 'Where We Work',
    dropdown: [
      { label: 'Tanzania and Zanzibar Island', href: '/our-network/values' },
      { label: 'Partner Schools', href: '/our-network/partners' },
      { label: 'Explore Chemka Village', href: '/our-network/ceos' },
      { label: 'Explore Enjoro Maasai Community', href: '/our-network/global-organization' },
    ],
  },
  {
    label: 'What We Do',
    dropdown: [
      { label: "Change Children's Lives", href: '/our-impact/teachers' },
      { label: 'Why Disability Inclusive Education', href: '/our-impact/alumni' },
      { label: 'Emergency Response Initiatives', href: '/our-impact/communities' },
    ],
  },
  {
    label: 'How We Work',
    dropdown: [
      { label: 'Our Approach', href: '/learning/teaching' },
      { label: 'Projects', href: '/learning/community-impact-lab' },
      { label: 'Our Impact', href: '/learning/accelerator' },
    ],
  },
];

export const UTILITY_NAV: NavItem[] = [
  {
    label: 'What You Can Do',
    dropdown: [
      { label: 'Contribute Generously', href: '/get-involved/teach' },
      { label: 'Volunteer Your Skills', href: '/get-involved/launch' },
      { label: 'Be a Corporate Partner', href: '/get-involved/staff' },
      { label: 'Organize Fundraising Events', href: '/get-involved/collaborate' },
      { label: 'Become A Member', href: '/get-involved/newsletter' },
    ],
  },
  {
    label: 'News & Press',
    dropdown: [
      { label: 'News', href: '/news' },
      { label: 'Blog', href: '/blog' },
      { label: 'Videos', href: '/videos' },
      { label: 'Press', href: '/press' },
    ],
  },
];

// =============================================
// FOOTER
// =============================================
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Our Network',
    href: '/our-network',
    links: [
      { label: 'Our Values', href: '/our-network/values' },
      { label: 'Network Partners', href: '/our-network/partners' },
      { label: 'Network CEOs', href: '/our-network/ceos' },
      { label: 'Global Organization', href: '/our-network/global-organization' },
    ],
  },
  {
    heading: 'Our Impact',
    href: '/our-impact',
    links: [
      { label: 'Teachers Developing Students as Leaders', href: '/our-impact/teachers' },
      { label: 'Alumni Leadership', href: '/our-impact/alumni' },
      { label: 'Collective Leadership in Communities', href: '/our-impact/communities' },
      { label: 'Cross-Border Learning', href: '/our-impact/cross-border' },
      { label: 'Influencing the Global Discussion', href: '/our-impact/global-discussion' },
      { label: 'Research', href: '/our-impact/research' },
    ],
  },
  {
    heading: 'Our Learning & Insights',
    href: '/learning',
    links: [
      { label: 'Teaching as Collective Leadership', href: '/learning/teaching' },
      { label: 'Community Impact Lab', href: '/learning/community-impact-lab' },
      { label: 'Global Leadership Accelerator', href: '/learning/accelerator' },
      { label: "Girls' Education Initiative", href: '/learning/girls-education' },
      { label: 'Education in Emergencies', href: '/learning/emergencies' },
      { label: 'Climate Education & Leadership', href: '/learning/climate' },
      { label: 'Future of Work', href: '/learning/future-of-work' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Teach in Your Country', href: '/get-involved/teach' },
      { label: 'Launch a Network Partner', href: '/get-involved/launch' },
      { label: 'Join Our Staff', href: '/get-involved/staff' },
      { label: 'Collaborate With Us', href: '/get-involved/collaborate' },
      { label: 'Subscribe to Our Newsletters', href: '/get-involved/newsletter' },
    ],
  },
  {
    heading: 'Our Sites',
    links: [
      { label: 'Teach For All', href: '/' },
      { label: 'Network Teachers & Alumni', href: '/teachers-alumni' },
      { label: 'Learning & Insights Hub', href: '/learning' },
    ],
  },
];

export const SOCIAL_LINKS = [
  { platform: 'Facebook', href: 'https://www.facebook.com/teachforall', icon: 'facebook' },
  { platform: 'X / Twitter', href: 'https://x.com/teachforall', icon: 'x-twitter' },
  { platform: 'Instagram', href: 'https://www.instagram.com/teachforall', icon: 'instagram' },
  { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/251405/', icon: 'linkedin' },
];

// =============================================
// HOME PAGE CONTENT
// =============================================
export const ICON_CARDS: IconCard[] = [
  {
    id: 'mission',
    title: 'Our Mission',
    description:
      'To improve the quality of life for the most marginalized children including those with disabilities in Tanzania  through access to disability inclusive education, healthcare and nutrition; water, sanitation and hygiene; women economic empowerment, ending child violence, and awareness-raising and advocacy.',
    href: '/our-mission',
    bgClass: 'bg-light-red',
    colorVariant: 'red',
    iconName: 'bullseye',
  },
  {
    id: 'network',
    title: 'Our Network',
    description:
      'We are a network of independent organizations in 63 countries and a global organization that facilitates connection and learning.',
    href: '/our-network',
    bgClass: 'bg-light-teal',
    colorVariant: 'teal',
    iconName: 'globe',
  },
  {
    id: 'learning',
    title: 'Our Learning & Insights',
    description:
      'Teach For All is a learning network, developing knowledge and insights from classrooms and communities around the world.',
    href: '/learning',
    bgClass: 'bg-light-orange',
    colorVariant: 'orange',
    iconName: 'search',
  },
  {
    id: 'teachers',
    title: 'For Teachers & Alumni',
    description:
      'Connect with teachers and alumni from across the network, explore new opportunities, and access helpful resources.',
    href: '/teachers-alumni',
    bgClass: 'bg-light-grey',
    colorVariant: 'grey',
    iconName: 'graduation-cap',
  },
];
