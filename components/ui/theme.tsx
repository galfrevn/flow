"use client";

import { Toaster } from "sonner";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <>
      <Toaster toastOptions={{ className: "font-sans" }} expand richColors />
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>
        </QueryClientProvider>
      </NextUIProvider>
    </>
  );
}
