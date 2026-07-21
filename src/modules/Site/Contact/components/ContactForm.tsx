'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/lib/shadcn/ui/button';
import { Card, CardDescription, CardTitle } from '@/lib/shadcn/ui/card';
import { Input } from '@/lib/shadcn/ui/input';
import { Textarea } from '@/lib/shadcn/ui/textarea';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function sendMessage({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }): Promise<string> {
    try {
      setLoading(true);
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      setLoading(false);
      const data = await res.json();
      if (data.success) {
        return 'Message sent successfully';
      }
    } catch (e) {
      setLoading(false);
      console.info(e);
    }
    return '';
  }

  function onSubmitForm(values: any) {
    toast.promise<{ message: string }>(
      () =>
        new Promise((resolve, reject) => {
          sendMessage(values).then((msg) => {
            if (msg === '') {
              return reject({ message: 'Failed to send message' });
            }
            return resolve({ message: msg });
          });
        }),
      {
        loading: 'Loading...',
        success: (data) => data.message,
        error: (err) => err.message,
      }
    );
  }

  function onFormError() {
    toast.error('Please fill out all the fields correctly.');
  }

  return (
    <Card>
      <CardTitle>Send me a message</CardTitle>
      <form onSubmit={handleSubmit(onSubmitForm, onFormError)}>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5">
            <Input {...register('name', { required: true })} type="text" placeholder="Name" />
            <Input
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              type="email"
              placeholder="Email"
            />
          </div>
          <Textarea
            {...register('message', { required: true })}
            placeholder="Type your message here."
          />
          <Button type="submit" disabled={loading} className="w-fit dark:bg-input/30">
            Send Message
          </Button>
        </div>
      </form>
      <CardDescription className="text-secondary-foreground text-xs lg:text-sm">
        I will reply as soon as possible
      </CardDescription>
    </Card>
  );
}
