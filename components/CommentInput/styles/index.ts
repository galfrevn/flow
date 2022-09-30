import { Container, Row, styled } from "@nextui-org/react";

export const CommentInputContainer = styled(Container, {
  position: "fixed",
  bottom: "$0",
  left: "$0",
  width: "$screen",
  zIndex: "$1",
  height: "$full",
  maxHeight: "$18",
  marginTop: "$5",
  borderTop: "$accents1 solid 1px",
  padding: "$4 $8",
  transition: "max-height 300ms ease",

  backgroundColor: "$backgroundAlpha",
  backdropFilter: "blur(8px)",
});

export const ActionsRow = styled(Row, {
  justifyContent: "flex-end",
  mt: "$9",
});
