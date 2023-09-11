'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, FileSpreadsheet, GanttChartSquare, User2 } from 'lucide-react';

import { MenuButton } from './MenuButton';

export const navList = [
  {
    name: 'Home',
    href: '/',
    id: Date.now(),
    icon: Home,
  },
  {
    name: 'About',
    href: '/about',
    id: Date.now(),
    icon: FileSpreadsheet,
  },
  {
    name: 'Projects',
    href: '/projects',
    id: Date.now(),
    icon: GanttChartSquare,
  },
  {
    name: 'Contact',
    href: '/contact',
    id: Date.now(),
    icon: User2,
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className='w-full    h-10 fixed top-0 flex  justify-between  p-8 items-center  mx-auto bg-secondary/30'>
      <div>LOGO</div>
      <nav>
        <ul className='hidden md:block'>
          {navList.map((item, idx) => (
            <Link
              className={cn(
                'px-3 py-3  border-b-2 border-transparent text-primary ',
                {
                  'border-blue-400': pathname === item.name,
                }
              )}
              href={item.href}
              key={item.id + idx}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <MenuButton />
      </nav>
    </header>
  );
};
