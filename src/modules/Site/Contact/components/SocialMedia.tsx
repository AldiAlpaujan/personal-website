import Link from 'next/link';
import { Button } from '@/lib/shadcn/ui/button';
import { Card, CardTitle } from '@/lib/shadcn/ui/card';
import { cn } from '@/lib/shadcn/utils';

export default function SocialMedia() {
  const socialMedia: { icon: string; label: string; color: string; url: string }[] = [
    {
      icon: 'icon-[lucide--mail]',
      color: 'bg-red-600 dark:bg-red-600',
      label: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=aldi.m.alpaujan.2@gmail.com',
    },
    {
      icon: 'icon-[mingcute--whatsapp-line]',
      color: 'bg-green-600 dark:bg-green-600',
      label: 'Whatsapp',
      url: 'https://wa.me/6285156496541',
    },
    {
      icon: 'icon-[lucide--send]',
      color: 'bg-blue-600 dark:bg-blue-600',
      label: 'Telegram',
      url: 'https://t.me/proyekaldi',
    },
    {
      icon: 'icon-[lucide--instagram] ',
      color: 'bg-orange-600 dark:bg-orange-600',
      label: 'Instagram',
      url: 'https://www.instagram.com/aldialpaujan',
    },
    {
      icon: 'icon-[lucide--linkedin]',
      color: 'bg-[#0070F3] dark:bg-[#0070F3]',
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/aldi-m-alpaujan',
    },
  ];

  return (
    <Card>
      <CardTitle>Find me on social media</CardTitle>
      <div className="w-full flex flex-wrap gap-2.5 [&>*]:flex-1">
        {socialMedia.map((elm) => (
          <Link key={elm.label} href={elm.url} target="_blank">
            <Button className={cn('text-sm border-none text-white font-medium w-full', elm.color)}>
              <span className={cn(elm.icon, 'size-5')} />
              {elm.label}
            </Button>
          </Link>
        ))}
      </div>
    </Card>
  );
}
