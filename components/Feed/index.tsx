import { Container, Row, Spacer, Text } from "@nextui-org/react";
import FeedCard from "components/FeedCard";
import React from "react";

const Feed = () => {
  return (
    <Container css={{ p: "$20 0 $10 0" }}>
      <Row>
        <FeedCard />
      </Row>
      <Spacer y={1} />
      <Row>
        <FeedCard />
      </Row>
      <Spacer y={1} />
      <Row>
        <FeedCard />
      </Row>
      <Spacer y={1} />
      <Row>
        <FeedCard />
      </Row>
      <Spacer y={1} />
      <Row>
        <FeedCard />
      </Row>
    </Container>
  );
};

export default Feed;
