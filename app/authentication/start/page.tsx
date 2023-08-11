'use client' 

import { Button } from '@nextui-org/button';
import { signIn } from 'next-auth/react';

export default function AuthenticationPage() {
  return (
    <div>
      <h1>Authentication</h1>
      <Button onClick={() => signIn('github')}>Log in</Button>
    </div>
  );
}
