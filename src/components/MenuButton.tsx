'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { AlignJustify } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-scroll';
import { navList } from './Navbar';
import { cn } from '@/lib/utils';

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className='md:hidden' variant={'ghost'} size={'icon'}>
          <AlignJustify size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-[300px] flex ' side={'left'}>
        <ul className=' w-full gap-3 mt-20 flex flex-col text-primary/70  '>
          {navList.map((item, idx) => (
            <Link
              onClick={() => setIsOpen(false)}
              to={item.to}
              offset={-100}
              spy={true}
              hashSpy={true}
              isDynamic={true}
              smooth={true}
              spyThrottle={500}
              duration={500}
              // delay={1000}
              activeClass='bg-secondary hover:bg-secondary text-primary  font-semibold text-primary'
              className={cn(
                ' flex  gap-4 py-3 px-4 cursor-pointer  hover:bg-secondary/40 border hover:border-border border-transparent transition rounded-md  text-start'
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
