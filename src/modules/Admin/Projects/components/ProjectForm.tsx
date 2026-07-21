'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/lib/shadcn/ui/button';
import { Checkbox } from '@/lib/shadcn/ui/checkbox';
import { Input } from '@/lib/shadcn/ui/input';
import { Label } from '@/lib/shadcn/ui/label';
import { Textarea } from '@/lib/shadcn/ui/textarea';
import { Project, ProjectInput } from '@/types/project';
import TechMultiSelect from '../../components/TechMultiSelect';

export default function ProjectForm({
  project,
  onDone,
}: {
  project?: Project;
  onDone: () => void;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isEdit = Boolean(project);
  const { register, handleSubmit, control } = useForm<ProjectInput>({
    defaultValues: project ?? {
      image: '',
      title: '',
      description: '',
      techUsed: [],
      link: '',
      hidden: false,
    },
  });

  function onSubmit(values: ProjectInput) {
    setLoading(true);
    const req = fetch(isEdit ? `/api/admin/projects/${project!.id}` : '/api/admin/projects', {
      method: isEdit ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    }).then((res) => {
      if (!res.ok) throw new Error('Request failed');
      return res.json();
    });

    toast.promise(req, {
      loading: 'Saving...',
      success: () => {
        router.refresh();
        onDone();
        return isEdit ? 'Project updated' : 'Project created';
      },
      error: 'Failed to save project',
      finally: () => setLoading(false),
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => toast.error('Fill all required fields'))}
      className="flex flex-col gap-4"
    >
      <div className="grid gap-2">
        <Label>Title</Label>
        <Input {...register('title', { required: true })} placeholder="Project title" />
      </div>
      <div className="grid gap-2">
        <Label>Description</Label>
        <Textarea {...register('description', { required: true })} placeholder="Description" />
      </div>
      <div className="grid gap-2">
        <Label>Image path or URL</Label>
        <Input {...register('image', { required: true })} placeholder="/projects/foo.png" />
      </div>
      <div className="grid gap-2">
        <Label>Link (optional)</Label>
        <Input {...register('link')} placeholder="https://..." />
      </div>
      <div className="grid gap-2">
        <Label>Tech used</Label>
        <Controller
          control={control}
          name="techUsed"
          rules={{ validate: (value) => value.length > 0 || 'Pick at least one' }}
          render={({ field }) => <TechMultiSelect value={field.value} onChange={field.onChange} />}
        />
      </div>
      <div className="flex items-center gap-2">
        <Controller
          control={control}
          name="hidden"
          render={({ field }) => (
            <Checkbox
              id="hidden"
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(Boolean(checked))}
            />
          )}
        />
        <Label htmlFor="hidden">Hidden from public site</Label>
      </div>
      <Button type="submit" disabled={loading} className="w-fit">
        {isEdit ? 'Save changes' : 'Create project'}
      </Button>
    </form>
  );
}
