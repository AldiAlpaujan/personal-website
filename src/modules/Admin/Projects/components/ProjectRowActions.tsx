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
import { Project } from '@/types/project';
import DeleteButton from '../../components/DeleteButton';
import ProjectForm from './ProjectForm';

export default function ProjectRowActions({ project }: { project: Project }) {
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
            <DialogTitle>Edit Project</DialogTitle>
          </DialogHeader>
          <ProjectForm project={project} onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
      <DeleteButton url={`/api/admin/projects/${project.id}`} itemLabel="Project" />
    </div>
  );
}
