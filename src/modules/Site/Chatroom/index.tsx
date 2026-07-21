import Empty from '@/components/Empty';
import PageHeader from '@/components/PageHeader';

export default function Chatroom() {
  return (
    <>
      <PageHeader
        title={'Chat Room'}
        description={'A fun place to share your thoughts, give suggestions, and chat casually 👋'}
        hideCvButton
      />
      <div className="h-[78vh] w-full ">
        <Empty
          title={'Oops! This feature is not available yet'}
          description={'Stay tuned — something new is coming soon.'}
        />
      </div>
    </>
  );
}
