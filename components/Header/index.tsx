// React, Types & Routing
import type { UserType } from "types/user";
import { FC } from "react";
import { useRouter } from "next/router";

// Styling
import { HeaderContainer } from "./styles";
import { User } from "@nextui-org/react";
import { ChevronLeft } from "react-feather";

const Header: FC<{ user: UserType; withBackButton?: boolean }> = ({
  user,
  withBackButton = false,
}) => {
  const router = useRouter();

  return (
    <HeaderContainer as="header">
      {withBackButton && <ChevronLeft onClick={() => router.back()} />}
      <User
        bordered
        name={user.name}
        src={user.image}
        altText={user.name}
        description={user.description ?? "What are you thinking?"}
      />
    </HeaderContainer>
  );
};

export default Header;
