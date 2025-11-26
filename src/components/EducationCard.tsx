import Image from 'next/image';
import { formatDate } from '@/lib/shadcn/formatter';
import { Card } from '@/lib/shadcn/ui/card';
import { Education } from '@/types/education';

export default function EducationCard({ education }: { education: Education }) {
  return (
    <Card className="flex-row">
      <Image
        src={education.image}
        alt="company image"
        width={64}
        height={64}
        className="size-[70px] border rounded-[8px]"
      />
      <div className="flex-1">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-foreground text-lg">{education.univ}</h1>
          <div className="flex gap-3 text-sm text-tertiary-foreground">
            <p>{education.major}</p>
          </div>
          <div className="flex gap-3 text-sm text-tertiary-foreground">
            <p>{formatDate(education.endDate.toString(), 'MMM YYYY')}</p>
            <div className="size-1 bg-secondary rounded-full mt-2" />
            <p>
              {education.location} <span className="text-[10px]">{education.countryCode}</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
