import { User } from "@nextui-org/react";
import { FC } from "react";
import { UserType } from "types/user";
import { HeaderContainer } from "./styles";

const Header: FC<{ user: UserType }> = ({ user }) => {
  return (
    <HeaderContainer as="header">
      <User
        bordered
        name={user.name}
        src={user.image}
        altText={user.name}
        description={user.description}
      />
    </HeaderContainer>
  );
};

export default Header;
