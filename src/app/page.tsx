import PageHeader from '@/components/PageHeader';

export default function Home() {
  return (
    <>
      <PageHeader
        title="Hi, I'm Aldi 👋"
        description={
          <div className="flex gap-2 items-center">
            <div className="size-2 rounded-full bg-green-600" />
            <p className="text-sm text-tertiary-foreground">Available for new projects</p>
          </div>
        }
      />
      <div className="w-full bg-red-50/10 h-[1000px]" />
    </>
  );
}
