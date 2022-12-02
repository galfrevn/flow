import { Container, styled } from "@nextui-org/react";

export const NavigationContainer = styled(Container, {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100vw",
  zIndex: "$1",
  display: "flex",
  justifyContent: 'space-around',
  alignItems: "center",
  padding: "$5 $8",

  // Glassmorphism background
  backgroundColor: "$backgroundAlpha",
  boxShadow: "$md",
  backdropFilter: "blur( 8px )",
});
