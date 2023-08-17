import { Button } from "@nextui-org/button";

import { NavigationRoute } from "@/components/navigation/routes";
import Link from "next/link";

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
