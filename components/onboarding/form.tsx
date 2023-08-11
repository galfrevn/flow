'use client';

import { toast } from 'sonner';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { User } from 'next-auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  onboardingSchema,
  OnboardingSchema,
} from '@/lib/validations/onboarding';

import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';

export function OnboardingForm() {
  const { data: session, update: updateSession } = useSession();
  const router = useRouter();
  const [isCompletingOnboarding, setIsCompleatingOnboarding] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingSchema>({
    resolver: zodResolver(onboardingSchema),
  });

  async function onSubmit(data: any) {
    setIsCompleatingOnboarding(true);
    const response = await fetch(`/api/onboarding/${session?.user.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
      }),
    });

    if (!response?.ok) {
      setIsCompleatingOnboarding(false);
      return toast.error('Your information was not updated. Please try again.');
    }

    updateSession({ ...session?.user, onboarding: true });
    toast.success('Welcome to Flow!');
    router.push('/home');

    setIsCompleatingOnboarding(false);
  }

  return (
    <form className='flex flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Username'
        variant='bordered'
        errorMessage={errors.username?.message}
        color={errors.username?.message ? 'danger' : 'default'}
        description='Your username will be used to identify you on the platform.'
        startContent='@'
        {...register('username')}
      />

      <Input
        isDisabled={!session?.user.email}
        label='Full name'
        placeholder={String(session?.user.name)}
        variant='bordered'
        errorMessage={errors.name?.message}
        color={errors.name?.message ? 'danger' : 'default'}
        description='Your real life full name.'
        {...register('name')}
      />

      <Textarea
        maxRows={3}
        label='About me'
        variant='bordered'
        errorMessage={errors.about?.message}
        color={errors.about?.message ? 'danger' : 'default'}
        description='Tell us something about yourself.'
        {...register('about')}
      />

      <Button isLoading={isCompletingOnboarding} type='submit' color='primary'>
        {isCompletingOnboarding ? 'Finishing onboarding' : 'Finish onboarding'}
      </Button>
    </form>
  );
}
