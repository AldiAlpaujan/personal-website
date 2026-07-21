import Link from 'next/link';
import { DownloadIcon } from 'lucide-react';
import GoogleDocsEmbed from '@/components/GoogleDocsEmbeded';
import { Button } from '@/lib/shadcn/ui/button';
import { Card } from '@/lib/shadcn/ui/card';

export default function Resume() {
  return (
    <Card className="h-[885px]">
      <Link
        href="https://drive.google.com/file/d/1p0pMZAV5lAEYpebWmyAo5QBtf7nThWT4/view?usp=drivesdk"
        target="_blank"
        className="w-fit"
      >
        <Button>
          <DownloadIcon />
          Download
        </Button>
      </Link>
      <GoogleDocsEmbed src="https://docs.google.com/document/d/1-67e7vrQbGGq_fL2mvIjO91lQQh0odn6_GOTAjr-LQ8/edit" />
    </Card>
  );
}
