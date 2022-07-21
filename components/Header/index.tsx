import { User } from "@nextui-org/react";
import { NextComponentType } from "next";
import { HeaderContainer } from "./styles";

const Header: NextComponentType = ({ user }: any) => {
  return (
    <HeaderContainer as="header">
      <User
        bordered
        name={user.name}
        src={user.image}
        altText={user.name}
        description="Fullstack Developer @Crombie"
      />
    </HeaderContainer>
  );
};

export default Header;
