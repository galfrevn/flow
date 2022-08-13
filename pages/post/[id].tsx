import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { CommentType } from "types/post";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment } from "react";

import useSWR from "swr";
import fetcher from "lib/fetcher";

import { Col, Container, Loading, Row, Text } from "@nextui-org/react";

import Header from "components/Header";
import FeedCard from "components/FeedCard";
import CommentInput from "components/CommentInput";
import CommentCard from "components/CommentCard";

const PostPage: NextPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;

  const { isValidating, data, error, mutate } = useSWR(
    `/api/post/${id}`,
    fetcher
  );

  if (isValidating) {
    return (
      <Container display="flex" justify="center" css={{ p: "$20 $10" }}>
        <Loading color="primary" />
      </Container>
    );
  }

  if (error) {
    return <div>failed to load</div>;
  }

  return (
    <Fragment>
      {session ? (
        <main>
          <Header withBackButton {...session} />
          <Row css={{ mt: "$20" }}>
            <FeedCard noButton {...data} />
          </Row>
          <Col css={{ pb: "$28" }}>
            {data?.comments.map((comment: CommentType, index: number) => (
              <CommentCard {...comment} key={index} />
            ))}
          </Col>
          <CommentInput postId={data._id} mutate={mutate} />
        </main>
      ) : (
        <Loading color="error" />
      )}
    </Fragment>
  );
};

export default PostPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);

  if (!session)
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};
