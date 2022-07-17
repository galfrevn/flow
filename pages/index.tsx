// NextJS, React & Types
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

// Styling
import { Container, Loading } from "@nextui-org/react";

// Auth
import { getSession } from "next-auth/react";
import { Fragment } from "react";

import Header from "components/Header";
import Feed from "components/Feed";

const Home: NextPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(session);

  return (
    <Fragment>
      {session ? (
        <main>
          <Header {...session} />
          <Feed />
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
