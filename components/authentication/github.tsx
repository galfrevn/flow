'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { toast } from 'sonner';
import { signIn as authenticate } from 'next-auth/react';
import { Button } from '@nextui-org/react';

export function AuthenticationGithubButton() {
  const [isGitHubLoading, setIsGitHubLoading] = useState(false);
  const searchParams = useSearchParams();

  const handleAuthenticate = async () => {
    setIsGitHubLoading(true);

    await authenticate('github', {
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/home',
    });
  };

  return (
    <Button
      color='primary'
      onClick={handleAuthenticate}
      isLoading={isGitHubLoading}
    >
      {isGitHubLoading ? 'Starting now' : 'Start now'}
    </Button>
  );
}
