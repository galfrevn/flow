import { getCurrentUser } from '@/lib/session';

import { OnboardingForm } from '@/components/onboarding/form';
import { redirect } from 'next/navigation';

export default async function OnboardingPage() {
  const user = await getCurrentUser();
  if (!user) return redirect('/authentication/start');

  return (
    <div className='mx-auto flex w-full flex-col space-y-6  sm:w-[350px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-4xl font-semibold tracking-tight'>
          Welcome to Flow
        </h1>
        <p className='text-zinc-500 text-muted-foreground'>
          Complete the steps below to get the best experience of this platform.
        </p>
      </div>
      <OnboardingForm />
    </div>
  );
}
