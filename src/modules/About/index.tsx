import PageHeader from '@/components/PageHeader';
import TabsView from './components/TabsView';

export default function About() {
  return (
    <>
      <PageHeader
        title={'About Me'}
        description={'Let me share a bit about who i am'}
        hideCvButton
      />
      <TabsView />
    </>
  );
}
