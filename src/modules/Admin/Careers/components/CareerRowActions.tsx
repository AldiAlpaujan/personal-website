'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import { Button } from '@/lib/shadcn/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/shadcn/ui/dialog';
import { Career } from '@/types/career';
import DeleteButton from '../../components/DeleteButton';
import CareerForm from './CareerForm';

export default function CareerRowActions({ career }: { career: Career }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-end gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon-sm">
            <PencilIcon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Edit Career</DialogTitle>
          </DialogHeader>
          <CareerForm career={career} onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
      <DeleteButton url={`/api/admin/careers/${career.id}`} itemLabel="Career" />
    </div>
  );
}
