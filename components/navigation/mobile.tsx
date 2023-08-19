"use client";

import { useSession } from "next-auth/react";

import { Drawer } from "vaul";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Avatar, Divider, Navbar, NavbarContent } from "@nextui-org/react";

export function MobileNavigation() {
  const { data: session } = useSession();

  return (
    <Drawer.Root shouldScaleBackground>
      <Navbar shouldHideOnScroll isBlurred isBordered className="bg-transparent flex sm:hidden">
        <Drawer.Trigger asChild>
          <Avatar isBordered src={String(session?.user.image)} size="sm" />
        </Drawer.Trigger>
        <NavbarContent justify="end" className="max-w-[200px]" >
          <Tabs variant="light" color="primary" fullWidth>
            <Tab key="recomended" title="Recomended"></Tab>
            <Tab key="following" title="Following"></Tab>
          </Tabs>
        </NavbarContent>
      </Navbar>

      <Divider orientation="horizontal" />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-background/50 backdrop-blur-sm" />
        <Drawer.Content className="bg-background flex flex-col rounded-t-[10px] h-[56%] z-50 mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-background border-t-[1px] border-divider rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-800 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium text-lg mb-2">Your menu</Drawer.Title>
              <p className="text-zinc-600 mb-2">
                Navigate through the app, discover and share your ideas with your followers!.
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
