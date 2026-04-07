// =============================================
// NAVIGATION
// =============================================

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

// =============================================
// CONTENT / CMS TYPES
// =============================================

export interface NewsCard {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  date?: string;
  category?: string;
}

export interface IconCard {
  id: string;
  title: string;
  description: string;
  href: string;
  bgClass: string;
  colorVariant: 'red' | 'teal' | 'orange' | 'grey';
  iconName: string;
}

export interface FooterColumn {
  heading: string;
  href?: string;
  links: NavDropdownItem[];
}

// =============================================
// API RESPONSE TYPES
// =============================================

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
}
