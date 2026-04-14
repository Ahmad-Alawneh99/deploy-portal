'use client';
import { ReactNode } from 'react';
import { SidebarHeader, useSidebar } from './sidebar';

interface DynamicSidebarHeaderProps {
  icon: ReactNode
  text: string
}

export function DynamicSidebarHeader({ icon, text }: DynamicSidebarHeaderProps) {
  const { state } = useSidebar();

  return (
    <SidebarHeader className={`flex p-2 flex-row border-b-2 items-center mx-1 mb-2 gap-0 ${state === 'expanded' ? 'justify-start gap-2' : 'justify-center p-0'}`}>
      {icon}
      <span className={`
        transition-all duration-300 ease-in-out
        ${state === 'collapsed' ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}
      `}
      >
        {text}
      </span>
    </SidebarHeader>
  );
}
