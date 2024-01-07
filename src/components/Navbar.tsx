'use client';
import { Link } from 'react-scroll';
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, FileSpreadsheet, GanttChartSquare, User2 } from 'lucide-react';

import { MenuButton } from './MenuButton';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const navList = [
  {
    name: 'Home',
    href: '/',
    id: Date.now(),
    icon: Home,
    to: 'Home',
  },
  {
    name: 'About',
    href: '/about',
    id: Date.now(),
    icon: FileSpreadsheet,
    to: 'About',
  },
  {
    name: 'Projects',
    href: '/projects',
    id: Date.now(),
    icon: GanttChartSquare,
    to: 'Project',
  },
  {
    name: 'Contact',
    href: '/contact',
    id: Date.now(),
    icon: User2,
    to: 'Contact',
  },
];

export const Navbar = () => {
  const router = useRouter();
  return (
    <header className='w-full    h-10 sticky top-0 flex  justify-between  p-8 items-center  mx-auto bg-secondary/70 backdrop-blur-sm z-50 border-primary/10 border-b'>
      <button
        onClick={() => router.push('/')}
        className='relative h-10 w-10 cursor-pointer'
      >
        <Image alt='img' fill src={'/react.png'} className=' hover:opacity-90 transition' />
      </button>
      <nav className='flex items-center'>
        <ul className='hidden md:block'>
          {navList.map((item, idx) => (
            <Link
              offset={-100}
              spy={true}
              hashSpy={true}
              isDynamic={true}
              smooth={true}
              spyThrottle={500}
              duration={500}
              // delay={1000}
              activeClass='border-blue-400 border font-semibold text-primary'
              className={cn(
                'cursor-pointer px-3 py-3  border-b-2 border-transparent text-muted-foreground '
              )}
              to={item.to}
              key={item.id + idx}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <MenuButton />
        <div className='ml-2'>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
