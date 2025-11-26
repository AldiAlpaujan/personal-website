import { Card, CardDescription } from '@/lib/shadcn/ui/card';

export default function Intro() {
  const texts: string[] = [
    "Hi there! I'm Aldi Muhamad Alpaujan, a passionate and experienced software engineer with a strong focus on frontend development. Over the past three years, I’ve honed my skills in crafting responsive, dynamic, and high-performing web and mobile applications that deliver smooth and engaging user experiences.",
    'I specialize in using modern technologies such as React, Next.js, and Flutter, which enable me to build seamless, scalable, and efficient digital solutions. My approach to development goes beyond just writing code — I pay close attention to user experience, interface design, and performance optimization to ensure that every project not only looks great but also functions flawlessly across different devices and platforms.',
    'Collaboration plays a big role in my work. I enjoy working closely with cross-functional teams, contributing ideas, and solving problems together to bring creative concepts to life. I thrive in environments that value innovation, continuous learning, and clean, maintainable code.',
    "Outside of coding, I'm always exploring new technologies, refining my skills, and staying up to date with the latest trends in the frontend ecosystem. My goal is to keep growing as a developer while building products that make a meaningful impact.",
    "I'd be thrilled if we could work together as a team.",
    'Best regards.',
  ];

  return (
    <Card className="gap-4">
      {texts.map((text, index) => (
        <CardDescription key={index}>{text}</CardDescription>
      ))}
    </Card>
  );
}
