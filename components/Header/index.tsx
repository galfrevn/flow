// React, Types & Routing
import type { UserType } from "types/user";
import { FC } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

// Styling
import { HeaderContainer } from "./styles";
import { Dropdown, Text, User } from "@nextui-org/react";
import { ChevronLeft } from "react-feather";

const Header: FC<{ user: UserType; withBackButton?: boolean }> = ({
  user,
  withBackButton = false,
}) => {
  const router = useRouter();

  return (
    <HeaderContainer as="header">
      {withBackButton && <ChevronLeft onClick={() => router.back()} />}
      <Dropdown placement="bottom-left">
        <Dropdown.Trigger>
          <User
            bordered
            name={user.name}
            src={user.image}
            altText={user.name}
            description={user.description ?? "What are you thinking?"}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu color="secondary">
          <Dropdown.Item>
            <Text size={14} color="error" onClick={() => signOut()}>
              Log out
            </Text>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </HeaderContainer>
  );
};

export default Header;
