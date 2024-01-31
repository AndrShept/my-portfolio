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
      className={`mr-3 border-b-2 px-1 pb-2 font-semibold text-muted-foreground hover:text-primary ${buttonClasses}`}
      onClick={handleTabChange}
    >
      {children}
    </button>
  );
};
