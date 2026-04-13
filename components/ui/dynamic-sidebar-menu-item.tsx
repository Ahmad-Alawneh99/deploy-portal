'use client';

import { ReactNode } from 'react';
import { useSidebar } from './sidebar';
import Link from 'next/link';

interface DynamicSidebarMenuitemProps {
  icon: ReactNode
  text: string
  href: string
}

export function DynamicSidebarMenuitem({ icon, text, href }: DynamicSidebarMenuitemProps) {
  const { state } = useSidebar();

  console.log('state', state);

  return (
    <Link href={href} className={`flex m-2 ${state === 'expanded' ? 'justify-start gap-2' : 'justify-center'}`}>
      {icon}
      <span className={`
        transition-all duration-300 ease-in-out
        ${state === 'collapsed' ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'}
      `}
      >
        {text}
      </span>
    </Link>
  );
}
