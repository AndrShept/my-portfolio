'use client'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const EmailSection = () => {

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-xl font-bold text-primary my-2'>
          Let&apos;s Connect
        </h5>
        <p className='text-muted-foreground mb-4 max-md'>
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className=' flex gap-2'>
          <Link
            target='_blank'
            className='h-12 w-12 relative '
            href={'https://github.com/AndrShept'}
          >
            <Image className='bg-black rounded-full' fill src={'/github-icon.svg'} alt='img' />
          </Link>
          <Link
            target='_blank'
            className='h-12 w-12 relative'
            href={'https://github.com/AndrShept'}
          >
            <Image className='bg-black rounded-full' fill src={'/linkedin-icon.svg'} alt='img' />
          </Link>
        </div>
      </div>
    </section>
  );
};
