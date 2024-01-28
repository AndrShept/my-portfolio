'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';

import { TabButton } from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="space-y-1">
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image
              fill
              alt="img"
              src="/typescript.png"
              className="object-cover"
            />
          </div>
          <span className="ml-2"> TypeScript</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image fill alt="img" src="/node.png" className="object-cover" />
          </div>
          <span className="ml-2"> Node.js</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image fill alt="img" src="/redux.png" className="object-cover" />
          </div>
          <span className="ml-2"> Redux</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image fill alt="img" src="/zustand.png" className="object-cover" />
          </div>
          <span className="ml-2"> Zustand</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image
              fill
              alt="img"
              src="/tailwind.png"
              className="object-cover"
            />
          </div>
          <span className="ml-2"> TailwindCSS</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image fill alt="img" src="/react.png" className="object-cover" />
          </div>
          <span className="ml-2"> React</span>
        </li>
        <li className="flex items-center">
          <div className="relative h-5 w-5">
            <Image
              className="rounded-full border border-white bg-white object-cover"
              fill
              alt="img"
              src="/next.png"
            />
          </div>
          <span className="ml-2"> Next</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>
          I am a self-taught developer, having independently acquired my
          knowledge and skills
        </li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul>
        <li>
          I have experience in self-learning various technologies and skills in
          the field of web development. I have learned JavaScript, TypeScript,
          React, Next, Redux, Zustand, Node.js, Prisma, MongoDB, HTML, CSS,
          TailwindCSS, and Git, and applied them to create my own pet projects
        </li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState('skills');

  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-primary"
    >
      <div className="grid   gap-8 px-4    py-8 sm:py-16 md:grid-cols-2 xl:gap-16">
        <div className="relative aspect-video max-h-[400px] max-w-[700px] overflow-hidden rounded-lg  border-2 hover:drop-shadow-md   ">
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
          <p className="text-start text-base md:text-lg">
            I am a web developer with a passion for creating interactive and
            responsive web applications. I have experience working with
            JavaScript, TypeScript, React, Next, Redux, Zustand, Node.js,
            Prisma, MongoDB, HTML, CSS, TailwindCSS and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
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
          <div className="mt-8 text-start">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
