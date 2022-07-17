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
  backgroundColor: "rgba( 22, 24, 26, 0.85 )",
  boxShadow: "rgb(0 0 0 / 37%) -1px 4px 20px 0px",
  backdropFilter: "blur( 8px )",
});
