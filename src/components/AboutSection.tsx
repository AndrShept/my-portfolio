'use client';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import { TabButton } from './TabButton';
import { motion } from 'framer-motion';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='space-y-1'>
        <li className='flex items-center'>
          <div className='h-5 w-5 relative'>
            <Image fill alt='img' src='/node.png' />
          </div>
          <span className='ml-2'> Node.js</span>
        </li>
        <li className='flex items-center'>
          <div className='h-5 w-5 relative'>
            <Image fill alt='img' src='/redux.png' />
          </div>
          <span className='ml-2'> Redux</span>
        </li>
        <li className='flex items-center'>
          <div className='h-5 w-5 relative'>
            <Image fill alt='img' src='/tailwind.png' />
          </div>
          <span className='ml-2'> TailwindCSS</span>
        </li>
        <li className='flex items-center'>
          <div className='h-5 w-5 relative'>
            <Image fill alt='img' src='/react.png' />
          </div>
          <span className='ml-2'> React</span>
        </li>
        <li className='flex items-center'>
          <div className='h-5 w-5 relative'>
            <Image
              className='bg-white rounded-full border border-white'
              fill
              alt='img'
              src='/next.png'
            />
          </div>
          <span className='ml-2'> Next</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul>
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState('skills');

  return (
    <motion.section
    id='About'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='text-primary'
    >
      <div className='grid   md:grid-cols-2 gap-8   py-8 px-4 xl:gap-16 sm:py-16'>
        <Image
          className='rounded-md ml-auto'
          src='/about-image.png'
          alt='img'
          width={500}
          height={500}
        />
        <div className='items-start'>
          <h2 className='text-4xl font-bold text-primary mb-4'>About Me</h2>
          <p className='text-base md:text-lg text-start'>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                setTab={setTab}
                itemId={item.id}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          <div className='mt-8 text-start'>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
