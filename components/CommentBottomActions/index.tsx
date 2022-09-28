// React, Types & Routing

// Styling
import { HeaderBottomActionsContainer, HeaderBottomActionsTopContainer } from "./styles";
import { Globe, Image, MapPin, PlusCircle } from "react-feather";
import { Button, Row, Spacer, Text } from "@nextui-org/react";

// Disable button when input is empty

export const CommentBottomActions = () => {
  return (
    <HeaderBottomActionsContainer >
      <Row css={{ width: "auto" }} >
        <Image size={18} color="#FFF" />
        <Spacer x={1} />
        <MapPin size={18} color="#FFF" />
      </Row>
      <Row css={{ width: "auto" }} justify="flex-end" >
        <Button
          auto
          light
          disabled
          css={{ padding: "$4", borderLeft: "$accents1 solid 1px", borderRadius: "0", pl: "$8" }}
        >
          <PlusCircle size={18} color="#FFF" />
        </Button>
      </Row>
    </HeaderBottomActionsContainer >
  );
};

export const CommentBottomActionsTop = () => {
  return (
    <HeaderBottomActionsTopContainer >
      <Row>
        <Globe size={18} />
        <Text size={14} css={{ ml: "$4", lineHeight: "$md", letterSpacing: "$normal" }}>
          Anyone can see answer
        </Text>
      </Row>
    </HeaderBottomActionsTopContainer >
  );
};