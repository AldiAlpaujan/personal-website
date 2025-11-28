import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon } from 'lucide-react';
import { formatDate, getDurationLabel } from '@/lib/shadcn/formatter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/lib/shadcn/ui/accordion';
import { Card } from '@/lib/shadcn/ui/card';
import { Career } from '@/types/career';

export default function CareerCard({ career }: { career: Career }) {
  return (
    <Card className="flex-row">
      <Image
        src={career.image}
        alt="company image"
        width={64}
        height={64}
        className="size-[70px] border rounded-[8px]"
      />
      <div className="flex-1">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-foreground text-lg">{career.title}</h1>
          <div className="flex flex-wrap gap-3 text-sm text-tertiary-foreground">
            <Link href={career.link} target="_blank">
              <p>{career.linkTitle}</p>
            </Link>
            <div className="size-1 bg-secondary rounded-full mt-2 hidden sm:block" />
            <p className="text-secondary-foreground">{`[ ${career.company} ]`}</p>
            <div className="size-1 bg-secondary rounded-full mt-2 hidden sm:block" />
            <p>
              {career.location} <span className="text-[10px]">{career.countryCode}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-tertiary-foreground">
            <p>{`${formatDate(career.startDate.toString(), 'MMM YYYY')} - ${formatDate(career.endDate.toString(), 'MMM YYYY')}`}</p>
            <div className="size-1 bg-secondary rounded-full mt-2 hidden sm:block" />
            <p className="text-secondary-foreground">
              {getDurationLabel(career.startDate, career.endDate)}
            </p>
            <div className="size-1 bg-secondary rounded-full mt-2 hidden sm:block" />
            <p>{career.workingType}</p>
            <div className="size-1 bg-secondary rounded-full mt-2 hidden sm:block" />
            <p>{career.workingSchema}</p>
          </div>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer py-0 gap-2 text-secondary-foreground mt-2.5">
              <ChevronDownIcon className="pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
              Show Responsibilities
            </AccordionTrigger>
            <AccordionContent className="mt-2 flex flex-col gap-2.5">
              {career.responsibilities.map((responsibility) => (
                <div key={responsibility} className="flex items-start gap-2.5  ">
                  <div className="size-1.5 bg-[#B3B3B3] rounded-full mt-2" />
                  <p className="flex-1 text-tertiary-foreground">{responsibility}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
}
