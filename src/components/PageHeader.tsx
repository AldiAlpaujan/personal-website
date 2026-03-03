import { ReactNode } from 'react';
import Link from 'next/link';
import { DownloadIcon, Phone } from 'lucide-react';
import { Button } from '@/lib/shadcn/ui/button';
import SidebarToggle from './Sidebar/SidebarToggle';

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
        {typeof props.description === 'string' ? (
          <p className="text-sm text-tertiary-foreground">{props.description}</p>
        ) : (
          props.description
        )}
      </div>
      <div className="md:hidden">
        <SidebarToggle />
      </div>
      <div className="hidden md:flex gap-2.5">
        {!props.hideCvButton && (
          <Link
            href="https://drive.google.com/file/d/1p0pMZAV5lAEYpebWmyAo5QBtf7nThWT4/view?usp=drivesdk"
            target="_blank"
          >
            <Button>
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
