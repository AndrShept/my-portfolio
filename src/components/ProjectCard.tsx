'use client';
import { Code2, Eye } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

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
  const router = useRouter();
  return (
    <div className='max-w-md group '>
      <div
        className='h-52 md:h-56 rounded-t-xl relative'
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <Image
          src={imgUrl}
          alt='img'
          fill
          className='object-cover rounded-t-xl'
        />
        <div className='rounded-t-xl absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition flex   items-center justify-center'>
          <div className='space-x-4 opacity-0 group-hover:opacity-100'>
            <button
              onClick={() => router.push(previewUrl)}
              className='p-3 rounded-full border-2 border-white/70 text-white/70 hover:text-white hover:border-white cursor-pointer transition'
            >
              <Eye size={30} />
            </button>
            <button
              onClick={() => router.push(gitUrl)}
              className='p-3 rounded-full border-2 border-white/70 text-white/70 hover:text-white hover:border-white cursor-pointer transition'
            >
              <Code2 size={30} />
            </button>
            <div></div>
          </div>
        </div>
      </div>
      <div className='text-primary rounded-b-xl bg-secondary py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2 '>{title}</h5>
        <p className='text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
};
