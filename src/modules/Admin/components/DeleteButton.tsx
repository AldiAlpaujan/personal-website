'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2Icon } from 'lucide-react';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/lib/shadcn/ui/alert-dialog';
import { Button } from '@/lib/shadcn/ui/button';

export default function DeleteButton({ url, itemLabel }: { url: string; itemLabel: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function onConfirm() {
    setLoading(true);
    const req = fetch(url, { method: 'DELETE' }).then((res) => {
      if (!res.ok) throw new Error('Request failed');
      return res.json();
    });

    toast.promise(req, {
      loading: 'Deleting...',
      success: () => {
        router.refresh();
        return `${itemLabel} deleted`;
      },
      error: `Failed to delete ${itemLabel.toLowerCase()}`,
      finally: () => setLoading(false),
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon-sm" disabled={loading}>
          <Trash2Icon className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {itemLabel}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this{' '}
            {itemLabel.toLowerCase()}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={onConfirm}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
