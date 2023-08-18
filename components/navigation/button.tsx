import Link from "next/link";

import { NavigationRoute } from "@/components/navigation/routes";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";

export const NavigationButton = (route: NavigationRoute) => {
  return (
    <Button
      as={Link}
      variant="light"
      href={route.path}
      className="justify-start"
      startContent={<route.icon className="w-6 h-6" />}
    >
      <p className="ml-1 text-lg font-medium">{route.label}</p>
    </Button>
  );
};

export const MiddleSizeNavigationButton = (route: NavigationRoute) => {
  return (
    <Tooltip showArrow content={route.label} placement="right">
      <Button
        as={Link}
        isIconOnly
        radius="full"
        variant="light"
        href={route.path}
        className="justify-center"
      >
        <route.icon className="w-6 h-6" />
      </Button>
    </Tooltip>
  );
};
