'use client';
import { defaultTags, projectsData } from '@/lib/projData';
import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { cn } from '@/lib/utils';

export const ProjectSection = () => {
  const [tag, setTag] = useState('All');
  return (
    <>
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
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12 '>
        {projectsData
          .filter((item) => item.tag.includes(tag))
          .map((project) => (
            <ProjectCard
              key={project.id}
              description={project.description}
              imgUrl={project.image}
              title={project.title}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
      </div>
    </>
  );
};
