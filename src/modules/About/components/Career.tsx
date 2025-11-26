import CareerCard from '@/components/CareerCard';
import { careers } from '@/lib/shadcn/variable';

export default function Career() {
  return (
    <div className="flex flex-col gap-3.5">
      {careers.map((career) => (
        <CareerCard key={career.title} career={career} />
      ))}
    </div>
  );
}
