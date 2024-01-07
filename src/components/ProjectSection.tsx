'use client';
import { defaultTags, projectsData } from '@/lib/projData';
import React, { useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { cn } from '@/lib/utils';
import { useInView, motion, AnimatePresence } from 'framer-motion';

export const ProjectSection = () => {
  const [tag, setTag] = useState('BlogX');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
    id='Project'
    >
      <h2 className='text-center text-4xl font-bold text-primary mb-12'>
        My Project
      </h2>
      <div className='text-primary flex justify-center items-center gap-2 py-6 mt-4 mb-8 md:mb-12'>
        {defaultTags.map((defaultTag) => (
          <button
            onClick={() => setTag(defaultTag.name)}
            key={defaultTag.id}
            className={cn(
              'rounded-full border-2 hover:border-primary/30 border-secondary px-6 py-3 text-xs cursor-pointer transition',
              {
                'border-blue-500 hover:border-blue-500':
                  defaultTag.name === tag,
              }
            )}
          >
            {defaultTag.name}
          </button>
        ))}
      </div>
      <motion.ul
        ref={ref}
        className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12 '
      >
        <AnimatePresence>
          {projectsData
            .filter((item) => item.tag.includes(tag))
            .map((project, idx) => (
             isInView && <motion.li
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ duration: 0.4, delay: 0.3 * idx }}
              
                key={project.id}
              >
                <ProjectCard
                  description={project.description}
                  imgUrl={project.image}
                  title={project.title}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
};
