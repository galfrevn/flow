'use client';

import { Toaster } from 'sonner';
import { NextUIProvider } from '@nextui-org/react';

import { SessionProvider } from 'next-auth/react';

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <>
      <Toaster richColors />
      <NextUIProvider>
        <SessionProvider>{children}</SessionProvider>
      </NextUIProvider>
    </>
  );
}
