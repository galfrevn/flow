import { getCurrentUser } from "@/lib/session";

import { Box } from "lucide-react";
import { Logo } from "@/components/ui/icons/logo";

import { dashboardRoutes } from "@/components/navigation/routes";
import { MiddleSizeNavigationButton, NavigationButton } from "@/components/navigation/button";

import { Divider } from "@nextui-org/divider";

import { UserInformation } from "@/components/navigation/user";
import {
  MiddleSizePublicationCreationButton,
  PublicationCreationButton,
} from "@/components/publication/creation/button";
import { MiddleSizeLogoutButton } from "@/components/navigation/logout/button";
import { PublicationCreationModal } from "@/components/publication/creation/modal";

import { RecommendationsSearcher } from "@/components/recommendations/searcher";
import { RecommendationVerification } from "@/components/recommendations/verification";
import { RecommendationUserMedia } from "@/components/recommendations/user-media";
import { RecommendationUserInfomation } from "@/components/recommendations/user-info";

interface DashboardLayoutProps extends React.PropsWithChildren {
  params: any;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser();

  return (
    <section className="px-0 sm:px-2 max-w-[1400px] lg:pl-8 md:pr-0 xl:px-8 w-full mx-auto flex ">
      <aside className="py-2 hidden lg:flex flex-col max-w-[240px] min-w-[240px] h-screen pr-8 justify-between">
        <nav>
          <Logo width={50} height={50} />
          <div className="my-4 inline-grid space-y-2 w-full">
            {dashboardRoutes.map((route) => (
              <NavigationButton key={route.id} {...route} />
            ))}
            <NavigationButton
              id="profile"
              icon={Box}
              path={`/u/${user?.username}`}
              label="My Profile"
            />
          </div>
          <PublicationCreationButton />
        </nav>
        <UserInformation />
      </aside>

      {/* Middle size navigation */}
      <aside className="py-2 hidden sm:flex lg:hidden flex-col max-w-[80px] min-w-[80px] pr-4 h-screen justify-between">
        <nav className="flex flex-col items-center">
          <Logo width={50} height={50} />
          <div className="my-4 inline-grid justify-center space-y-3 w-full">
            {dashboardRoutes.map((route) => (
              <MiddleSizeNavigationButton key={route.id} {...route} />
            ))}
            <MiddleSizeNavigationButton
              label="My Profile"
              id="profile"
              icon={Box}
              path={`/u/${user?.username}`}
            />
          </div>
          <MiddleSizePublicationCreationButton />
        </nav>
        <MiddleSizeLogoutButton />
      </aside>

      <Divider orientation="vertical" className="hidden sm:block h-screen" />

      <PublicationCreationModal />
      {children}

      <Divider orientation="vertical" className="h-screen hidden xl:block" />
      <aside className="bg-background px-8 py-4 hidden xl:flex flex-col w-2/5 h-screen space-y-4">
        <RecommendationsSearcher />
        <RecommendationUserMedia />
        <RecommendationUserInfomation />
        <RecommendationVerification />
      </aside>
    </section>
  );
}
