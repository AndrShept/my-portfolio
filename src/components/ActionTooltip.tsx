import React, { PropsWithChildren, ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const ActionTooltip = ({
  children,
  label,
  alignOffset
}: {
  children: ReactNode;
  label: string;
  alignOffset: number
}) => {
  return (
    <TooltipProvider  delayDuration={200}>
      <Tooltip >
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent alignOffset={alignOffset} align={'end'} sideOffset={5} >
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
