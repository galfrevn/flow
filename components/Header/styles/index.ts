import { Container, styled } from "@nextui-org/react";

export const HeaderContainer = styled(Container, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  zIndex: "$1",
  display: "flex",
  alignItems: "center",
  padding: "$5 $10 $5 $4",

  // Glassmorphism background
  backgroundColor: "$backgroundContrast",
  boxShadow: "$md",
  backdropFilter: "blur( 8px )",
});
