import { Card, CardTitle } from '@/lib/shadcn/ui/card';
import TechList from './TechList';

export default function Technologies() {
  return (
    <Card className="px-0 py-4">
      <CardTitle className="px-4 text-foreground">Technologies</CardTitle>
      <div className="w-full relative overflow-auto scrollbar-hide">
        <TechList />
        <TechList reverse />
        <TechList />
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>
    </Card>
  );
}
