// NextJS, React & Types
import type { AppProps } from "next/app";

// Styling
import { NextUIProvider } from "@nextui-org/react";

// Auth
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
