'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { AboutSection } from './AboutSection';
import { BackgroundGradient } from './ui/background-gradient';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <section
      id="Home"
      className="grid grid-cols-1 gap-4 text-center lg:grid-cols-2 lg:text-start  "
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="place-self-center"
      >
        <h1 className=" mb-4 h-[105px] text-4xl font-extrabold text-primary sm:text-5xl lg:text-6xl ">
          <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
            Hello, I&apos;m{' '}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'React Developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Cool Developer :)',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="mb-6 text-lg text-muted-foreground lg:text-xl">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
        </p>
        <div className="space-x-4">
          {/* <Button
            size={'lg'}
            className='bg-gradient-to-r from-blue-500 to-sky-400 hover:opacity-90 transition text-white'
            variant={'secondary'}
          >
            Hire Me
          </Button>
          <Button className='text-primary' size={'lg'} variant={'outline'}>
            Download CV
          </Button> */}
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className=" mx-auto mt-4 lg:mt-0 "
      >
        <BackgroundGradient className='rounded-full' containerClassName='rounded-full'>
          <div className="relative h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]">
            <Image
              className="rounded-full object-cover  "
              alt="Hero-img"
              fill
              src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </BackgroundGradient>
      </motion.div>
    </section>
  );
};
