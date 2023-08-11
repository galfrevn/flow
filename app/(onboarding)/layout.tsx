import { Logo } from '@/components/ui/icons/logo';

interface OnboardingLayoutProps extends React.PropsWithChildren {}
export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  return (
    <section className='container relative flex-col items-center h-screen justify-center grid md:max-w-none md:grid-cols-2 md:px-0'>
      <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r border-r-divider md:flex'>
        <div className='absolute inset-0 bg-zinc-950' />
        <div className='relative z-20 flex items-center gap-2 text-lg font-medium'>
          <Logo />
          Flow Inc.
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className='text-sm'>Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className='md:p-8'>
        <div className='md:hidden left-4 top-6 absolute z-20 flex items-center gap-2 text-lg font-medium'>
          <Logo />
          Flow Inc.
        </div>
        {children}
      </div>
    </section>
  );
}
