import React, { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';

interface ModalImageProps {
  children: ReactNode;
  src: string;
}

export const ModalImage = ({ children, src }: ModalImageProps) => {
  return (
    <Dialog >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='p-1  max-w-[1000px] sm:h-[600px] h-[400px]  ' >
        <div className=' max-w-[1000px] relative '>
          <Image className='object-contain ' src={src} alt='img' fill />
        </div>
      </DialogContent>
    </Dialog>
  );
};
