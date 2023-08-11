'use client';

import { SessionProvider } from 'next-auth/react';

interface OnboardingSessionExposerProps extends React.PropsWithChildren {}

export function OnboardingSessionExposer({
  children,
}: OnboardingSessionExposerProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
