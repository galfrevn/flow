// NextJS, React & Types
import type { AppProps } from "next/app";
import { usePreserveScroll } from "hooks/usePreserveScroll";

// Styling
import { Fragment } from "react";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { createTheme, NextUIProvider } from "@nextui-org/react";

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
    fontWeights: {
      hairLine: 200,
      thin: 300,
      light: 400,
      normal: 500,
      medium: 600,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    }
  },
});

const themeProps: ThemeProviderProps = {
  defaultTheme: "system",
  attribute: "class",
  value: {
    light: lightTheme.className,
    dark: darkTheme.className,
  },
};

function MyApp({ Component, pageProps }: AppProps) {

  usePreserveScroll();

  return (
    <Fragment>
      <ThemeProvider {...themeProps}>
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
