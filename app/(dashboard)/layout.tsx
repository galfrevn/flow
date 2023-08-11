import { Logo } from '@/components/ui/icons/logo';

import { dashboardRoutes } from '@/components/navigation/routes';
import { NavigationButton } from '@/components/navigation/button';

import { Divider } from '@nextui-org/divider';

import { UserInformation } from '@/components/navigation/user';
import { CreatePublicationButton } from '@/components/publication/button';

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
              <NavigationButton {...route} key={route.id} />
            ))}
          </div>
          <CreatePublicationButton />
        </nav>
        <UserInformation />
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
