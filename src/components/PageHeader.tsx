import { ReactNode } from 'react';
import Link from 'next/link';
import { DownloadIcon, Phone } from 'lucide-react';
import { Button } from '@/lib/shadcn/ui/button';

export default function PageHeader(props: {
  title: string;
  description: string | ReactNode;
  hideCvButton?: boolean;
  hideContactButton?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="mb-0.5 text-2xl font-bold">{props.title}</h1>
        {typeof props.description === 'string' ? <p>{props.description}</p> : props.description}
      </div>
      <div className="flex gap-2.5">
        {!props.hideCvButton && (
          <Link
            href="https://drive.google.com/file/d/141QU50SAi5MLwRD8IbkeMtNAKETrOZrp/view?usp=drive_link"
            target="_blank"
          >
            <Button className="bg-background text-tertiary-foreground border-[1.9px] hover:bg-background hover:scale-105">
              <DownloadIcon />
              Download Cv
            </Button>
          </Link>
        )}
        {!props.hideContactButton && (
          <Link href={'/contact'}>
            <Button size={'icon'}>
              <Phone />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
