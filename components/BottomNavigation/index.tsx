// React, Types & Routing
import type { UserType } from "types/user";
import { FC } from "react";
import { useRouter } from "next/router";

// Styling
import { NavigationContainer } from "./styles";

const BottomNavigation = () => {
  const router = useRouter();

  return <NavigationContainer as="header">aa</NavigationContainer>;
};

export default BottomNavigation;
