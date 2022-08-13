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
import BottomNavigation from "components/BottomNavigation";

const Home: NextPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Fragment>
      {session ? (
        <main>
          <Header {...session} />
          <Feed />
          <AddPostButton />
          {/* <BottomNavigation /> */}
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
