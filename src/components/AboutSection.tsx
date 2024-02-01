'use client';

import { TAB_DATA } from '@/lib/tabData';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { TabButton } from './TabButton';

export const AboutSection = () => {
  const [tab, setTab] = useState('skills');

  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-primary  "
    >
      <div className="grid   gap-8 px-4   py-8 sm:py-16 md:grid-cols-2 xl:gap-16">
        <div className="relative aspect-[4/3] max-h-[400px] max-w-[700px] overflow-hidden rounded-lg  border-2 hover:drop-shadow-md   ">
          <Image
            priority
            className="ml-auto rounded-lg  object-cover transition hover:scale-105"
            src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1447&q=80"
            alt="img"
            fill
          />
        </div>

        <div className="items-start">
          <h2 className="mb-4 text-4xl font-bold text-primary ">About Me</h2>
          <p className="text-start text-base text-muted-foreground md:text-lg">
            I am a web developer with a passion for creating interactive and
            responsive web applications. I have experience working with
            JavaScript, TypeScript, React, Next, React Hook Form, Redux,
            Zustand, Tanstack Query, Prisma, MongoDB, HTML, CSS, TailwindCSS and
            Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="mt-8 flex flex-row justify-start">
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
          <div className="mt-4 text-start">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
