import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/lib/shadcn/ui/tabs';
import Career from './Career';
import Education from './Education';
import Intro from './Intro';
import Resume from './Resume';

export default function TabsView() {
  const tabs: { value: string; label: string; content: React.ReactNode }[] = [
    {
      value: 'intro',
      label: 'Me',
      content: <Intro />,
    },
    {
      value: 'resume',
      label: 'Resume',
      content: <Resume />,
    },
    {
      value: 'career',
      label: 'Career',
      content: <Career />,
    },
    {
      value: 'education',
      label: 'Education',
      content: <Education />,
    },
  ];
  return (
    <Tabs defaultValue={tabs[0].value} className="h-full">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-2.5">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
