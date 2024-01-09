import React, { ReactNode, useTransition } from 'react';

interface TabButtonProps {
  active: boolean;
  setTab: (str: string) => void;
  itemId: string;
  children: ReactNode;
}

export const TabButton = ({
  active,
  setTab,
  itemId,
  children,
}: TabButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleTabChange = () => {
    startTransition(() => {
      setTab(itemId);
    });
  };
  const buttonClasses = active
    ? 'text-primary border-b-2 border-blue-500'
    : 'text-muted-foreground';
  return (
    <button
    className={`mr-3 px-1 font-semibold hover:text-primary text-muted-foreground border-b-2 ${buttonClasses}`}
     onClick={handleTabChange}>

        {children}
<span></span>
    </button>
  );
};
