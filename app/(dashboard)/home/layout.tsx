"use client";

import { Divider, Tab, Tabs } from "@nextui-org/react";
import { MobileNavigation } from "@/components/navigation/mobile";

interface HomepageLayoutProps extends React.PropsWithChildren {}
export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <section className="relative w-full lg:w-4/5">
      <header className="hidden sm:block bg-background/80 backdrop-blur-md z-50 sticky top-0">
        <div className="p-4 ">
          <h2 className="font-medium text-xl">Homepage</h2>
          <p className="text-neutral-600">Discover and share your own ideas with the community.</p>

          <Tabs variant="underlined" color="primary" fullWidth className=" mt-4">
            <Tab key="recomended" title="Recomended"></Tab>
            <Tab key="following" title="Following"></Tab>
          </Tabs>
        </div>

        <Divider orientation="horizontal" />
      </header>

      <MobileNavigation />

      <main className="w-full scrollbar-hide pb-4 absolute top-0 h-screen overflow-y-scroll pt-16 sm:pt-36">
        {children}
      </main>
    </section>
  );
}
