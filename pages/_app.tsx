// NextJS, React & Types
import type { AppProps } from "next/app";

// Styling
import { createTheme, NextUIProvider } from "@nextui-org/react";

// Auth
import { SessionProvider } from "next-auth/react";

const theme = createTheme({
  type: "dark",
  theme: {
    fonts: {
      sans: "Poppins, sans-serif",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
