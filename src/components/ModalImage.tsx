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
      <DialogContent className=" aspect-video h-auto  max-w-[1400px]  ">
        <div className="  relative max-w-[1400px]   ">
          <Image className="object-contain h-auto " src={src} alt="img" fill />
        </div>
      </DialogContent>
    </Dialog>
  );
};
