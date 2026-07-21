import CareerCard from '@/components/CareerCard';
import { Career as CareerType } from '@/types/career';

export default function Career({ careers }: { careers: CareerType[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      {careers.map((career) => (
        <CareerCard key={career.id} career={career} />
      ))}
    </div>
  );
}
