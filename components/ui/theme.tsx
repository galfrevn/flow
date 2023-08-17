"use client";

import dynamic from "next/dynamic";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { SessionProvider } from "next-auth/react";

const NotificationsProvider = dynamic(() => import("sonner").then((mod) => mod.Toaster));

const ComponentsProvider = dynamic(() =>
  import("@nextui-org/react").then((mod) => mod.NextUIProvider)
);

const queryClient = new QueryClient();

export function ThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <>
      <NotificationsProvider toastOptions={{ className: "font-sans" }} expand richColors />
      <ComponentsProvider>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>
        </QueryClientProvider>
      </ComponentsProvider>
    </>
  );
}
