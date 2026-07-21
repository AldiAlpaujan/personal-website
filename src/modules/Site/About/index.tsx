import PageHeader from '@/components/PageHeader';
import { getCareers } from '@/lib/firebase/repositories/careers';
import { getEducations } from '@/lib/firebase/repositories/educations';
import TabsView from './components/TabsView';

export default async function About() {
  const [careers, educations] = await Promise.all([getCareers(), getEducations()]);

  return (
    <>
      <PageHeader
        title={'About Me'}
        description={'Let me share a bit about who i am'}
        hideCvButton
      />
      <TabsView careers={careers} educations={educations} />
    </>
  );
}
