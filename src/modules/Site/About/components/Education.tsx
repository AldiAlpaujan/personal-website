import EducationCard from '@/components/EducationCard';
import { Education as EducationType } from '@/types/education';

export default function Education({ educations }: { educations: EducationType[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      {educations.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </div>
  );
}
