import { Container, Row, styled } from "@nextui-org/react";

export const CommentInputContainer = styled(Container, {
  position: "fixed",
  bottom: "$0",
  left: "$0",
  width: "$screen",
  zIndex: "$1",
  borderTop: "$accents1 solid 1px",
  padding: "$4 $0",
  transition: "max-height 300ms ease",

  backgroundColor: "$backgroundAlpha",
  backdropFilter: "blur(8px)",
});
