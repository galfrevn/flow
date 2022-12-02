// NextJS, React & Types
import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "lib/get-server-session";
import { usePreserveScroll } from "hooks/usePreserveScroll";

import Feed from "components/Feed";
import AppMainLayout from "layout/main";

const Home: NextPage = () => {

  usePreserveScroll();

  return (
    <AppMainLayout>
      <Feed />
    </AppMainLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => getServerSession({ req, res }) 