'use client';

import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../ui/button';
import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string
  className?: string
  children: ReactNode
}

export function ButtonLink({ href, className, children, ...variants }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${buttonVariants(variants)} ${className || ''}`}>
      {children}
    </Link>
  );
};
