'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2Icon } from 'lucide-react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/lib/shadcn/ui/button';
import { Checkbox } from '@/lib/shadcn/ui/checkbox';
import { Input } from '@/lib/shadcn/ui/input';
import { Label } from '@/lib/shadcn/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/lib/shadcn/ui/select';
import { Career, CareerInput } from '@/types/career';

type CareerFormValues = Omit<CareerInput, 'responsibilities' | 'startDate' | 'endDate'> & {
  responsibilities: { text: string }[];
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
};

function toFormValues(career?: Career): CareerFormValues {
  if (!career) {
    return {
      image: '',
      title: '',
      linkTitle: '',
      link: '',
      company: '',
      location: '',
      countryCode: '',
      startDate: dayjs().format('YYYY-MM-DD'),
      endDate: '',
      currentlyWorking: true,
      workingType: '',
      workingSchema: 'Onsite',
      responsibilities: [{ text: '' }],
    };
  }

  return {
    image: career.image,
    title: career.title,
    linkTitle: career.linkTitle,
    link: career.link,
    company: career.company,
    location: career.location,
    countryCode: career.countryCode,
    startDate: dayjs(career.startDate).format('YYYY-MM-DD'),
    endDate: career.endDate ? dayjs(career.endDate).format('YYYY-MM-DD') : '',
    currentlyWorking: !career.endDate,
    workingType: career.workingType,
    workingSchema: career.workingSchema,
    responsibilities: career.responsibilities.map((text) => ({ text })),
  };
}

export default function CareerForm({ career, onDone }: { career?: Career; onDone: () => void }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isEdit = Boolean(career);
  const { register, handleSubmit, control, watch } = useForm<CareerFormValues>({
    defaultValues: toFormValues(career),
  });
  const { fields, append, remove } = useFieldArray({ control, name: 'responsibilities' });
  const currentlyWorking = watch('currentlyWorking');

  function onSubmit(values: CareerFormValues) {
    const payload: CareerInput = {
      image: values.image,
      title: values.title,
      linkTitle: values.linkTitle,
      link: values.link,
      company: values.company,
      location: values.location,
      countryCode: values.countryCode,
      startDate: new Date(values.startDate),
      endDate: values.currentlyWorking ? null : new Date(values.endDate),
      workingType: values.workingType,
      workingSchema: values.workingSchema,
      responsibilities: values.responsibilities.map((r) => r.text).filter(Boolean),
    };

    setLoading(true);
    const req = fetch(isEdit ? `/api/admin/careers/${career!.id}` : '/api/admin/careers', {
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
        return isEdit ? 'Career updated' : 'Career created';
      },
      error: 'Failed to save career',
      finally: () => setLoading(false),
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => toast.error('Fill all required fields'))}
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label>Title</Label>
          <Input {...register('title', { required: true })} placeholder="Job title" />
        </div>
        <div className="grid gap-2">
          <Label>Company</Label>
          <Input {...register('company', { required: true })} placeholder="Company" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label>Link title</Label>
          <Input {...register('linkTitle', { required: true })} placeholder="Company Website" />
        </div>
        <div className="grid gap-2">
          <Label>Link</Label>
          <Input {...register('link')} placeholder="https://..." />
        </div>
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
        <Label>Image path or URL</Label>
        <Input {...register('image', { required: true })} placeholder="/careers/foo.png" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label>Working type</Label>
          <Input {...register('workingType', { required: true })} placeholder="Full-time" />
        </div>
        <div className="grid gap-2">
          <Label>Working schema</Label>
          <Controller
            control={control}
            name="workingSchema"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Onsite">Onsite</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label>Start date</Label>
          <Input {...register('startDate', { required: true })} type="date" />
        </div>
        <div className="grid gap-2">
          <Label>End date</Label>
          <Input {...register('endDate')} type="date" disabled={currentlyWorking} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Controller
          control={control}
          name="currentlyWorking"
          render={({ field }) => (
            <Checkbox
              id="currentlyWorking"
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(Boolean(checked))}
            />
          )}
        />
        <Label htmlFor="currentlyWorking">Currently working here</Label>
      </div>
      <div className="grid gap-2">
        <Label>Responsibilities</Label>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <Input {...register(`responsibilities.${index}.text` as const, { required: true })} />
            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              <Trash2Icon className="size-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          className="w-fit"
          onClick={() => append({ text: '' })}
        >
          Add responsibility
        </Button>
      </div>
      <Button type="submit" disabled={loading} className="w-fit">
        {isEdit ? 'Save changes' : 'Create career'}
      </Button>
    </form>
  );
}
