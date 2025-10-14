import * as React from 'react';
import { cn } from '@/lib/shadcn/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn('p-4 bg-background border-[1.8px] flex flex-col gap-3 rounded-lg', className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-bold text-base lg:text-lg', className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-tertiary-foreground text-sm lg:text-base', className)}
      {...props}
    />
  );
}
export { Card, CardTitle, CardDescription };
