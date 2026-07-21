'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/lib/shadcn/ui/button';
import { Input } from '@/lib/shadcn/ui/input';
import { Label } from '@/lib/shadcn/ui/label';
import { Education, EducationInput } from '@/types/education';

type EducationFormValues = Omit<EducationInput, 'endDate'> & { endDate: string };

function toFormValues(education?: Education): EducationFormValues {
  if (!education) {
    return {
      image: '',
      univ: '',
      major: '',
      link: '',
      location: '',
      countryCode: '',
      endDate: dayjs().format('YYYY-MM-DD'),
    };
  }

  return {
    image: education.image,
    univ: education.univ,
    major: education.major,
    link: education.link,
    location: education.location,
    countryCode: education.countryCode,
    endDate: dayjs(education.endDate).format('YYYY-MM-DD'),
  };
}

export default function EducationForm({
  education,
  onDone,
}: {
  education?: Education;
  onDone: () => void;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isEdit = Boolean(education);
  const { register, handleSubmit } = useForm<EducationFormValues>({
    defaultValues: toFormValues(education),
  });

  function onSubmit(values: EducationFormValues) {
    const payload: EducationInput = { ...values, endDate: new Date(values.endDate) };

    setLoading(true);
    const req = fetch(isEdit ? `/api/admin/educations/${education!.id}` : '/api/admin/educations', {
      method: isEdit ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) throw new Error('Request failed');
      return res.json();
    });

    toast.promise(req, {
      loading: 'Saving...',
      success: () => {
        router.refresh();
        onDone();
        return isEdit ? 'Education updated' : 'Education created';
      },
      error: 'Failed to save education',
      finally: () => setLoading(false),
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => toast.error('Fill all required fields'))}
      className="flex flex-col gap-4"
    >
      <div className="grid gap-2">
        <Label>University</Label>
        <Input {...register('univ', { required: true })} placeholder="University name" />
      </div>
      <div className="grid gap-2">
        <Label>Major</Label>
        <Input {...register('major', { required: true })} placeholder="Major / degree" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label>Location</Label>
          <Input {...register('location', { required: true })} placeholder="City, Country" />
        </div>
        <div className="grid gap-2">
          <Label>Country code</Label>
          <Input {...register('countryCode', { required: true })} placeholder="ID" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label>Link (optional)</Label>
        <Input {...register('link')} placeholder="https://..." />
      </div>
      <div className="grid gap-2">
        <Label>Image path or URL</Label>
        <Input {...register('image', { required: true })} placeholder="/images/foo.png" />
      </div>
      <div className="grid gap-2">
        <Label>End date</Label>
        <Input {...register('endDate', { required: true })} type="date" />
      </div>
      <Button type="submit" disabled={loading} className="w-fit">
        {isEdit ? 'Save changes' : 'Create education'}
      </Button>
    </form>
  );
}
