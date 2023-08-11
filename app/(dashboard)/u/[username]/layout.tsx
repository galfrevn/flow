import Link from 'next/link';

import { Icons } from '@/components/ui/icons';

import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/divider';

interface UsernameLayoutProps extends React.PropsWithChildren {}
export default function HomepageLayout({ children }: UsernameLayoutProps) {
  return (
    <section className='relative w-4/5'>
      <header className='p-2 flex items-center gap-4 bg-background/80 backdrop-blur-sm z-50 sticky top-0'>
        <Button as={Link} href='/home' radius='full' variant='light' isIconOnly>
          <Icons.back className='w-5' />
        </Button>

        <div>
          <h2 className='font-semibold text-lg leading-tight'>
            Valentín Galfré
          </h2>
          <p className='text-neutral-600 text-sm'>20k publications</p>
        </div>
      </header>
      <Divider orientation='horizontal' />

      <main className='scrollbar-hide pb-4 absolute top-0 h-screen overflow-y-scroll pt-14'>
        {children}
      </main>
    </section>
  );
}
