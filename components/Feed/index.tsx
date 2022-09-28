import React, { Fragment } from "react";
import type { PostType } from "types/post";

import {
  Button,
  Container,
  Loading,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";

import FeedCard from "components/FeedCard";
import { usePaginatePosts } from "components/Feed/useRequest";

const Feed = () => {
  const { posts, error, isLoadingMore, size, setSize, isReachingEnd } =
    usePaginatePosts();

  if (error)
    return (
      <Container display="flex" justify="center" css={{ p: "$20 $10" }}>
        <Text>Something went wrong 😢</Text>
      </Container>
    );
  if (posts.length === 0)
    return (
      <Container display="flex" justify="center" css={{ p: "$20 $10" }}>
        <Loading color="primary" />
      </Container>
    );

  return (
    <Container display="flex" justify="center" css={{ p: "$20 0 $10 0" }}>
      {posts.map((post: PostType) => (
        <Fragment key={post._id}>
          <Row>
            <FeedCard {...post} />
          </Row>
          <Spacer y={1} />
        </Fragment>
      ))}

      <Button
        color="primary"
        css={{ mt: "$10" }}
        disabled={isLoadingMore || isReachingEnd}
        onPress={() => setSize(size + 1)}
      >
        {isLoadingMore
          ? "Loading..."
          : isReachingEnd
          ? "No more posts"
          : "Load more"}
      </Button>
    </Container>
  );
};

export default Feed;
