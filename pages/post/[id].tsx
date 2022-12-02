import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "lib/get-server-session";
import { CommentType } from "types/post";
import { useRouter } from "next/router";

import useSWR from "swr";
import fetcher from "lib/fetcher";

import { Container, Loading, Row, Text } from "@nextui-org/react";

import FeedCard from "components/FeedCard";
import CommentInput from "components/CommentInput";
import CommentCard from "components/CommentCard";
import AppMainLayout from "layout/main";
import { usePreserveScroll } from "hooks/usePreserveScroll";

const PostPage: NextPage = () => {

  const router = useRouter();
  const { id } = router.query;

  usePreserveScroll();

  const { isValidating, data: post, mutate } = useSWR(
    `/api/post/${id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isValidating) {
    return (
      <Container display="flex" justify="center" css={{ p: "$20 $10" }}>
        <Loading color="error" />
      </Container>
    );
  }

  return (
    <AppMainLayout>
      <Container display="flex" css={{ p: "$20 0 $20 0" }}>

        <FeedCard noButton {...post} />

        <Text size={13} css={{ lineHeight: "$md", letterSpacing: "$normal", m: "$10 $8 $4 $8" }} >
          {post?.comments?.length} Comments
        </Text>

        {post?.comments.map((comment: CommentType, index: number) => (
          <Row key={comment._id} css={{ mb: "$4 " }} >
            <CommentCard {...comment} key={index} />
          </Row>
        ))}

        <CommentInput postId={post?._id} mutate={mutate} />
      </Container>
    </AppMainLayout>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => getServerSession({ req, res }) 