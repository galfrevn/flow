// NextJS, React & Types
import type { AppProps } from "next/app";

// Styling
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

// Auth
import { SessionProvider } from "next-auth/react";

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
  );
}

export default MyApp;
