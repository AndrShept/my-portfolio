import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ModalImageProps {
  children: ReactNode;
  src: string;
}

export const ModalImage = ({ children, src }: ModalImageProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className=" aspect-video max-h-full   max-w-[1350px]  ">
        <Image className="object-contain  " src={src} alt="img" fill />
      </DialogContent>
    </Dialog>
  );
};
