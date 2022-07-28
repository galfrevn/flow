import React, { FC, Fragment } from "react";
import type { PostType } from "types/post";

import { Container, Row, Spacer } from "@nextui-org/react";
import FeedCard from "components/FeedCard";

const Feed: FC<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <Container css={{ p: "$20 0 $10 0" }}>
      {posts.map((post: PostType) => (
        <Fragment key={post._id}>
          <Row>
            <FeedCard {...post} />
          </Row>
          <Spacer y={1} />
        </Fragment>
      ))}
    </Container>
  );
};

export default Feed;
