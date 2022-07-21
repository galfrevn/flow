// NextJS, React & Types
import type { AppProps } from "next/app";

// Styling
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

// Auth
import { SessionProvider } from "next-auth/react";
import { Fragment } from "react";
import Head from "next/head";

const lightTheme = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: "Poppins, sans-serif",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    fonts: {
      sans: "Poppins, sans-serif",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>SocialPWA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="SocialPWA | Social media application made by Valentin Galfre" />
        <meta name="keywords" content="social, media, application, made, by, valentin, galfre" />
        <meta name="author" content="Valentín Galfré" />
      </Head>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <SessionProvider>
            <Component {...pageProps} />
          </SessionProvider>
        </NextUIProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
