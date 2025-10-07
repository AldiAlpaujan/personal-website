import PageHeader from '../PageHeader';

export default function HomeHeader() {
  return (
    <PageHeader
      title="Hi, I'm Aldi 👋"
      description={
        <div className="flex gap-2 items-center">
          <div className="size-2 rounded-full bg-green-600" />
          <p className="text-sm text-tertiary-foreground">Available for new projects</p>
        </div>
      }
    />
  );
}
