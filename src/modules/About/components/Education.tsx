import EducationCard from '@/components/EducationCard';
import { educations } from '@/lib/shadcn/variable';

export default function Education() {
  return (
    <div className="flex flex-col gap-3.5">
      {educations.map((education) => (
        <EducationCard key={education.univ} education={education} />
      ))}
    </div>
  );
}
