export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/articles', label: 'Articles' },
  { href: '/recherche', label: 'Recherche' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/contact', label: 'Contact' },
];
