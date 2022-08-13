import { Container, Row, styled } from "@nextui-org/react";

export const CommentInputContainer = styled(Container, {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100vw",
  zIndex: "$1",
  height: "100%",
  borderRadius: "$xl $xl 0 0",
  maxHeight: "88px",
  marginTop: "$5",
  borderTop: "$accents1 solid 1px",
  padding: "$8 $4 $12 $4",
  transition: "max-height 300ms ease",

  backgroundColor: "$backgroundContrast",
  boxShadow: "$xl",
});

export const ActionsRow = styled(Row, {
  justifyContent: "flex-end",
  mt: "$9",
});
