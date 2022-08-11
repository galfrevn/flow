import type { PostType } from "types/post";
import type { ParsedUrlQuery } from "querystring";
import type { GetStaticPropsContext, NextPage } from "next";
import { Fragment } from "react";
import { useSession } from "next-auth/react";

import Header from "components/Header";
import { UserType } from "types/user";
import { Row } from "@nextui-org/react";
import FeedCard from "components/FeedCard";

const PostPage: NextPage<{ post: PostType }> = ({ post }) => {
  const { data } = useSession();

  if (!data) return null;

  const postData = {
    content: post.content,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    user: post.user,
    image: post.image,
    likes: post.likes,
    _id: post._id,
  };

  return (
    <Fragment>
      <main>
        <Header withBackButton user={data.user as UserType} />
        <Row css={{ mt: "$20" }}>
          <FeedCard {...postData} />
        </Row>
      </main>
    </Fragment>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const data = await fetch("/api/post/get").then((res) =>
    res.json()
  );

  const paths = data.map((post: PostType) => ({
    params: { id: [post._id] },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export async function getStaticProps(ctx: GetStaticPropsContext<Params>) {
  const id = ctx.params?.id;
  const data = await fetch(`/api/post/${id}`).then((res) =>
    res.json()
  );
  const post = data[0];

  return {
    props: {
      post,
    },
  };
}
