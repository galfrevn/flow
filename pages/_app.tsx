// NextJS, React & Types
import type { AppProps } from "next/app";

// Styling
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { globalCss } from "@nextui-org/react";

// Auth
import { SessionProvider } from "next-auth/react";

const globalStyles = globalCss({
  html: { backgroundColor: "$black" },
});

const theme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <SessionProvider>
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
