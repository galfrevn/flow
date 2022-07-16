import { Avatar, Container, Text } from "@nextui-org/react";
import { NextComponentType } from "next";
import React from "react";
import { HeaderContainer } from "./styles";

const Header: NextComponentType = ({ user }: any) => {
  return (
    <HeaderContainer as="header">
      <Avatar squared size="sm" src={user.image} />
    </HeaderContainer>
  );
};

export default Header;
