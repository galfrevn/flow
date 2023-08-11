import '@/components/ui/globals.css';
import { ThemeProvider } from '@/components/ui/theme';

import { cn } from '@/lib/tailwind';

import { Outfit as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

interface RootLayoutProps extends React.PropsWithChildren {}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className='dark'>
      <body className={cn('font-sans', fontSans.variable)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
