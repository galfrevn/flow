import { Metadata } from "next";
import { Suspense } from "react";

import "@/components/ui/globals.css";
import { ThemeProvider } from "@/components/ui/theme";

import { cn } from "@/lib/tailwind";

import { Outfit as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    absolute: "Flow",
    template: "%s / Flow",
  },
  colorScheme: "dark",
  themeColor: "#000000",
};

interface RootLayoutProps extends React.PropsWithChildren {}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("font-sans ", fontSans.variable)}>
        <Suspense>
          <ThemeProvider>
            <div vaul-drawer-wrapper="" className="h-screen">
              {children}
            </div>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
