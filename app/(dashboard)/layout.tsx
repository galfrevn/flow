import { getCurrentUser } from '@/lib/session';

import { Box } from 'lucide-react';
import { Logo } from '@/components/ui/icons/logo';

import { dashboardRoutes } from '@/components/navigation/routes';
import { NavigationButton } from '@/components/navigation/button';

import { Divider } from '@nextui-org/divider';

import { UserInformation } from '@/components/navigation/user';
import { PublicationCreationButton } from '@/components/publication/creation/button';
import { PublicationCreationModal } from '@/components/publication/creation/modal';

import { RecommendationsSearcher } from '@/components/recommendations/searcher';
import { RecommendationVerification } from '@/components/recommendations/verification';

interface DashboardLayoutProps extends React.PropsWithChildren {}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser();

  return (
    <section className='container flex'>
      <aside className='py-2 flex flex-col min-w-[240px] h-screen pr-8 justify-between'>
        <nav>
          <Logo width={50} height={50} />
          <div className='my-4 inline-grid space-y-2 w-full'>
            {dashboardRoutes.map((route) => (
              <NavigationButton {...route} key={route.id} />
            ))}
            <NavigationButton
              id='profile'
              icon={Box}
              path={`/u/${user?.username}`}
              label='My Profile'
            />
          </div>
          <PublicationCreationButton />
        </nav>
        <UserInformation />
      </aside>
      <Divider orientation='vertical' className='h-screen' />

      <PublicationCreationModal />
      {children}

      <Divider orientation='vertical' className='h-screen' />
      <aside className='bg-background px-8 py-4 flex flex-col w-2/5 h-screen space-y-4'>
        <RecommendationsSearcher />
        <RecommendationVerification />
      </aside>
    </section>
  );
}
