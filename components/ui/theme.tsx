'use client';

import { NextUIProvider } from '@nextui-org/react';

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
