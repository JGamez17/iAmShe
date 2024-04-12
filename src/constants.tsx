import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <Icon icon="lucide:home" width="24" height="24" />,
    },
    {
        title: 'About',
        path: '/about',
        icon: <Icon icon="lucide:folder" width="24" height="24" />,
    },
    {
        title: 'AskShe',
        path: '/askshe',
        icon: <Icon icon="lucide:mail" width="24" height="24" />,
    },
    {
        title: 'Podcast',
        path: '/podcast',
        icon: <Icon icon="lucide:settings" width="24" height="24" />,
    },
    {
        title: 'Hair',
        path: '/hair',
        icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
    },
];