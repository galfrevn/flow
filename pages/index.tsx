// NextJS, React & Types
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

// Styling
import { Loading } from "@nextui-org/react";

// Auth
import { getSession } from "next-auth/react";
import { Fragment } from "react";

import Header from "components/Header";
import Feed from "components/Feed";
import AddPostButton from "components/AddPostButton";

// Posts
import Post from "models/post";

const Home: NextPage = ({
  session,
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Fragment>
      {session ? (
        <main>
          <Header {...session} />
          <Feed posts={posts} />
          <AddPostButton />
        </main>
      ) : (
        <Loading color="error" />
      )}
    </Fragment>
  );
};

export default Home;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);

  const posts = await Post.find().sort("-createdAt").exec();

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
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
};
