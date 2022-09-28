import { Container, styled } from "@nextui-org/react";

export const HeaderContainer = styled(Container, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  zIndex: "$1",
  display: "flex",
  alignItems: "center",
  padding: "$4 $8",
  justifyContent: "space-between",

  borderBottom: "$accents1 solid 1px",

  // Glassmorphism background
  backgroundColor: "$backgroundAlpha",
  boxShadow: "$md",
  backdropFilter: "blur( 8px )",
});
