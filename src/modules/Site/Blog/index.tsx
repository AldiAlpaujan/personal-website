import Empty from '@/components/Empty';
import PageHeader from '@/components/PageHeader';

export default function Blog() {
  return (
    <>
      <PageHeader title={'Blog'} description={'Some things I like to do'} />
      <div className="h-[78vh] w-full ">
        <Empty
          title={'Oops! No posts yet'}
          description={'Stay tuned — something new is coming soon.'}
        />
      </div>
    </>
  );
}
