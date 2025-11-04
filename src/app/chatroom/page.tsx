import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chatroom | Personal Website',
  description: 'This is my personal website',
};

export default function Page() {
  return (
    <>
      Chatroom Page
      <div className="w-full bg-red-50/10 h-[1000px]" />
    </>
  );
}
