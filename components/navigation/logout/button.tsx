"use client";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

import { Icons } from "@/components/ui/icons";
import { signOut } from "next-auth/react";

export const MiddleSizeLogoutButton = () => {
  const handleLogout = () => signOut({ callbackUrl: "/authentication/start" });

  return (
    <Tooltip showArrow content="Logout" placement="right">
      <Button
        isIconOnly
        radius="full"
        variant="flat"
        color="danger"
        className="justify-center ml-4"
        onClick={handleLogout}
      >
        <Icons.close />
      </Button>
    </Tooltip>
  );
};
