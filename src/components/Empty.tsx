import Image from 'next/image';

export default function Empty(props: { title: string; description: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        src="/images/empty.png"
        alt="Empty-Image"
        width={105.8}
        height={105.8}
        className="mb-6"
      />
      <h1 className="font-bold text-xl mb-1">{props.title}</h1>
      <p className="text-sm text-tertiary-foreground w-[200px] text-center">{props.description}</p>
    </div>
  );
}
