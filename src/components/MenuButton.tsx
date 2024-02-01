'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { navList } from './Navbar';
import { Button } from './ui/button';

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant={'ghost'} size={'icon'}>
          <AlignJustify size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-[300px] " side={'left'}>
        <ul className=" mt-20 flex w-full flex-col gap-3 text-primary/70  ">
          {navList.map((item, idx) => (
            //@ts-ignore
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
              activeClass="bg-secondary hover:bg-secondary text-primary  font-semibold text-primary"
              className={cn(
                ' flex  cursor-pointer gap-4 rounded-md border  border-transparent px-4 py-3 text-start transition hover:border-border  hover:bg-secondary/40',
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
