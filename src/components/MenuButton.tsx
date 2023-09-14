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
      <SheetContent className='w-[300px] flex ' side={'left'}>
        <ul className=' w-full gap-3 mt-20 flex flex-col text-primary/70  '>
          {navList.map((item, idx) => (
            <Link
              href={item.href}
              className={cn(
                ' flex  gap-4 py-3 px-4 cursor-pointer hover:bg-secondary/40 border hover:border-border border-transparent transition rounded-md  text-start',
                {
                  'bg-secondary text-primary  hover:bg-secondary ': pathname === item.href,
           

                }
              )}
              key={item.id + idx}
            >
              <item.icon strokeWidth={1.5} />

              <span> {item.name}</span>
            </Link>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
