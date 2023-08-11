import { LayoutGrid, LucideIcon, Search, BellDot, Mail, BadgeCheck, User } from 'lucide-react';

export interface NavigationRoute {
  id: string;
  path: string;
  label: string;
  icon: LucideIcon;
}

export const dashboardRoutes: NavigationRoute[] = [
  {
    id: 'homepage',
    path: '/home',
    label: 'Homepage',
    icon: LayoutGrid,
  },
  {
    id: 'explore',
    path: '/explore',
    label: 'Explore',
    icon: Search,
  },
  {
    id: 'notifications',
    path: '/notifications',
    label: 'Notifications',
    icon: BellDot,
  },
  {
    id: 'messages',
    path: '/messages',
    label: 'Messages',
    icon: Mail,
  },
  {
    id: 'verified',
    path: '/verified',
    label: 'Verified',
    icon: BadgeCheck,
  },
  {
    id: 'profile',
    path: '/profile',
    label: 'Profile',
    icon: User,
  },
];
