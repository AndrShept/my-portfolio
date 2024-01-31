'use client';

import { Code2, Eye, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { ActionTooltip } from './ActionTooltip';
import { ModalImage } from './ModalImage';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) => {
  return (
    <section className="group flex max-w-md   flex-col h-full">
      <div
        className="relative h-52 rounded-t-xl border-2 md:h-56"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <Image
          src={imgUrl}
          alt="img"
          fill
          className="rounded-t-xl object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center rounded-t-lg bg-[#181818] bg-opacity-0   transition group-hover:bg-opacity-80">
          <div className="space-x-4 opacity-0 group-hover:opacity-100">
            <ActionTooltip label="Zoom Image" alignOffset={-9}>
              {/* <a href={previewUrl} target='_blank' rel='noopener noreferrer'> */}
              <ModalImage src={imgUrl}>
                <button className="cursor-pointer rounded-full border-2 border-white/70 p-3 text-white/70 transition hover:border-white hover:text-white">
                  <ZoomIn size={30} />
                </button>
              </ModalImage>
              {/* </a> */}
            </ActionTooltip>
            <ActionTooltip label="Go to Blog" alignOffset={-5}>
              <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer rounded-full border-2 border-white/70 p-3 text-white/70 transition hover:border-white hover:text-white">
                  <Eye size={30} />
                </button>
              </a>
            </ActionTooltip>

            <ActionTooltip label="GitHub Code" alignOffset={-11}>
              <a href={gitUrl} target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer rounded-full border-2 border-white/70 p-3 text-white/70 transition hover:border-white hover:text-white">
                  <Code2 size={30} />
                </button>
              </a>
            </ActionTooltip>
          </div>
        </div>
      </div>
      <div className="flex  flex-col flex-1 rounded-b-xl bg-secondary px-4 py-6 text-primary">
        <h5 className="mb-2 text-xl font-semibold ">{title}</h5>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </section>
  );
};
