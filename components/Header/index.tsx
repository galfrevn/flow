// React, Types & Routing
import type { UserType } from "types/user";
import { useRouter } from "next/router";

// Styling
import { HeaderContainer } from "./styles";
import { User } from "@nextui-org/react";
import { ChevronLeft } from "react-feather";

interface HeaderProps {
  user: UserType;
  withBackButton?: boolean;
}

const Header = ({ user, withBackButton = false }: HeaderProps) => {
  const { push, back } = useRouter();
  const { description, name, image, id } = user;

  return (
    <HeaderContainer as="header">
      {withBackButton && <ChevronLeft onClick={() => back()} />}
      <User
        pointer
        bordered
        name={name}
        src={image}
        altText={name}
        description={description ?? "What are you thinking?"}
        onClick={() => push(`/user/${id}`)}
      />
    </HeaderContainer>
  );
};

export default Header;
