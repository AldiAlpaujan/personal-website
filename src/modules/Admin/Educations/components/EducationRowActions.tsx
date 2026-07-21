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
import { Education } from '@/types/education';
import DeleteButton from '../../components/DeleteButton';
import EducationForm from './EducationForm';

export default function EducationRowActions({ education }: { education: Education }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-end gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon-sm">
            <PencilIcon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Education</DialogTitle>
          </DialogHeader>
          <EducationForm education={education} onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
      <DeleteButton url={`/api/admin/educations/${education.id}`} itemLabel="Education" />
    </div>
  );
}
