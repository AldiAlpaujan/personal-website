'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { firebaseAuth } from '@/lib/firebase/client';
import { Button } from '@/lib/shadcn/ui/button';
import { Card, CardDescription, CardTitle } from '@/lib/shadcn/ui/card';
import { Input } from '@/lib/shadcn/ui/input';

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' },
  });

  async function login({ email, password }: { email: string; password: string }) {
    const credential = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const idToken = await credential.user.getIdToken();

    const res = await fetch('/api/admin/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken }),
    });
    if (!res.ok) {
      throw new Error('Invalid credentials');
    }
  }

  function onSubmit(values: { email: string; password: string }) {
    setLoading(true);
    toast.promise(login(values), {
      loading: 'Signing in...',
      success: () => {
        router.replace('/admin');
        router.refresh();
        return 'Signed in';
      },
      error: 'Invalid email or password',
      finally: () => setLoading(false),
    });
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardTitle>Admin Login</CardTitle>
        <form onSubmit={handleSubmit(onSubmit, () => toast.error('Fill out both fields'))}>
          <div className="flex flex-col gap-2.5">
            <Input {...register('email', { required: true })} type="email" placeholder="Email" />
            <Input
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
            />
            <Button type="submit" disabled={loading} className="w-fit dark:bg-input/30">
              Sign in
            </Button>
          </div>
        </form>
        <CardDescription className="text-secondary-foreground text-xs lg:text-sm">
          Only the site owner can sign in here.
        </CardDescription>
      </Card>
    </div>
  );
}
