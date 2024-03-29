'use client';

import { cn } from '@/lib/utils';
import { FileSpreadsheet, GanttChartSquare, Home, User2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Link } from 'react-scroll';

import { MenuButton } from './MenuButton';
import { ModeToggle } from './ModeToggle';

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
    <header className="sticky min-w-[390px]    top-0 z-50 flex  h-10   items-center  justify-between border-b border-primary/10 bg-secondary/70 p-8 backdrop-blur-md">
      <button
        onClick={() => router.push('/')}
        className="relative h-10 w-10 cursor-pointer"
      >
        <Image
          alt="img"
          fill
          src={'/react.png'}
          className=" transition hover:opacity-90"
        />
      </button>
      <nav className="flex items-center">
        <ul className="hidden md:block">
          {navList.map((item, idx) => (
            //@ts-ignore
            
            <Link
              offset={-100}
              spy={true}
              hashSpy={true}
              isDynamic={true}
              smooth={true}
              spyThrottle={500}
              duration={500}
              // delay={1000}
              activeClass="border-blue-400 border font-semibold text-primary"
              className={cn(
                'cursor-pointer border-b-2 border-transparent  px-3 py-3 text-muted-foreground ',
              )}
              to={item.to}
              key={item.id + idx}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <MenuButton />
        <div className="ml-2">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
