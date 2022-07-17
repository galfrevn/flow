import { Container, Row, Spacer, Text } from "@nextui-org/react";
import FeedCard from "components/FeedCard";
import React from "react";

const Feed = () => {
  return (
    <Container css={{ margin: "$8 0" }}>
      <Text>Your feed</Text>

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
