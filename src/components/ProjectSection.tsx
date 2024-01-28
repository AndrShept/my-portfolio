'use client';

import { projectsData, tabs } from '@/lib/projData';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';

import { ProjectCard } from './ProjectCard';

export const ProjectSection = () => {
  const [tabState, setTabState] = useState('BlogX');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex flex-col items-center" id="Project">
      <h2 className="mb-12 text-center text-4xl font-bold text-primary">
        My Project
      </h2>
      <div className="mb-8 mt-4 flex items-center justify-center gap-2 py-6 text-primary md:mb-12">
        {tabs.map((tab) => (
          <button
            onClick={() => setTabState(tab.name)}
            key={tab.id}
            className={cn(
              'cursor-pointer rounded-full border-2 border-secondary px-6 py-3 text-xs transition hover:border-primary/30',
              {
                'border-blue-500 hover:border-blue-500': tab.name === tabState,
              },
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <motion.ul
        ref={ref}
        className="grid  gap-8 md:grid-cols-2 md:gap-12 xl:grid-cols-3 "
      >
        <AnimatePresence>
          {projectsData
            .filter((item) => item.tag.includes(tabState))
            .map(
              (project, idx) =>
                isInView && (
                  <motion.li
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
                ),
            )}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
};
