import { Container, styled } from "@nextui-org/react";

export const HeaderBottomActionsContainer = styled(Container, {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100vw",
  zIndex: "$2",
  display: "flex !important",
  alignItems: "center",
  padding: "$4 $0 $4 $4",
  justifyContent: "space-between",

  borderTop: "$accents1 solid 1px",

  // Glassmorphism background
  backgroundColor: "$backgroundAlpha",
  boxShadow: "$md",
  backdropFilter: "blur( 8px )",
});

export const HeaderBottomActionsTopContainer = styled(Container, {
  position: "fixed",
  bottom: 57,
  left: 0,
  width: "100vw",
  zIndex: "$1",
  display: "flex",
  alignItems: "center",
  padding: "$6 $8",
  justifyContent: "space-between",

  borderTop: "$accents1 solid 1px",

  // Glassmorphism background
  backgroundColor: "$backgroundAlpha",
  boxShadow: "$md",
  backdropFilter: "blur( 8px )",
});
