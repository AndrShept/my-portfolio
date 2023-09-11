'use client';
import React from 'react';
import { Button } from './ui/button';
import { AlignJustify } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navList } from './Navbar';
import { cn } from '@/lib/utils';

export const MenuButton = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='md:hidden' variant={'ghost'} size={'icon'}>
          <AlignJustify size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-[300px] flex' side={'left'}>
        <nav className=''>
          <ul className='flex flex-col gap-3 mt-20  items-start '>
            {navList.map((item, idx) => (
              <Button asChild  variant={'ghost'} key={item.id + idx}>
                <Link
                  className={cn(
                    ' text-primary font-light  gap-2    ',
                    {
                      'border-blue-400': pathname === item.name,
                    }
                  )}
                  href={item.href}
                >
                {<item.icon strokeWidth={1.5} />}
                {item.name}
                </Link>
              </Button>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
