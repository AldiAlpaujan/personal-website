import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Personal Website',
  description: 'This is my personal website',
};

export default function Page() {
  return (
    <>
      Blog Page
      <div className="w-full bg-red-50/10 h-[1000px]" />
    </>
  );
}
