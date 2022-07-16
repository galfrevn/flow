import { GetServerSidePropsContext, NextPage } from "next";
// Styling
import { Button, Container } from "@nextui-org/react";

import { getSession, signIn } from "next-auth/react";

const Login: NextPage = () => {
  return (
    <Container>
      <Button flat color="error" onClick={() => signIn("github")}>
        Sign in with Github
      </Button>
    </Container>
  );
};

export default Login;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);

  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};
