import { Logo } from '@/components/ui/icons/logo';

import { dashboardRoutes } from '@/components/navigation/routes';
import { NavigationButton } from '@/components/navigation/button';

import { Button } from '@nextui-org/button';
import { User } from '@nextui-org/user';
import { Divider } from '@nextui-org/divider';

import { RecommendationsSearcher } from '@/components/recommendations/searcher';
import { RecommendationVerification } from '@/components/recommendations/verification';

interface DashboardLayoutProps extends React.PropsWithChildren {}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section className='container flex'>
      <aside className='py-2 flex flex-col w-1/4 h-screen pr-8 justify-between'>
        <nav>
          <Logo width={50} height={50} />
          <div className='my-4 inline-grid space-y-2 w-full'>
            {dashboardRoutes.map((route) => (
              <NavigationButton {...route} />
            ))}
          </div>

          <Button
            fullWidth
            radius='full'
            color='primary'
            className='font-medium text-md'
          >
            Publish
          </Button>
        </nav>

        <Button
          variant='light'
          radius='full'
          className='h-auto justify-start px-2'
        >
          <User
            name='Valentín Galfré'
            description='Technical Leader'
            className='justify-start my-2'
            avatarProps={{
              src: 'https://pbs.twimg.com/profile_images/1292298512542171136/kZlAHkwR_normal.jpg',
            }}
          />
        </Button>
      </aside>
      <Divider orientation='vertical' className='h-screen' />

      {children}

      <Divider orientation='vertical' className='h-screen' />
      <aside className='bg-background px-8 py-4 flex flex-col w-2/5 h-screen space-y-4'>
        <RecommendationsSearcher />
        <RecommendationVerification />
      </aside>
    </section>
  );
}
