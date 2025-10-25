import Link from 'next/link';
import { Button } from '@/lib/shadcn/ui/button';
import { Card, CardDescription, CardTitle } from '@/lib/shadcn/ui/card';

export default function GetInTouch() {
  return (
    <Card className="bg-project-card border-0">
      <CardTitle className="text-foreground">Get In Touch</CardTitle>
      <CardDescription>
        Ready to take the next step? Don&apos;t hesitate to reach out if you&apos;re looking for a
        developer, have questions, or want to share ideas. I would be happy to collaborate with you.
      </CardDescription>
      <Link href={'/contact'}>
        <Button className="w-fit" size={'lg'}>
          Contact Me
        </Button>
      </Link>
    </Card>
  );
}
