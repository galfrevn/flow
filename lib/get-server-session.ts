import type { GetServerSidePropsContext } from "next";
import type { NextAuthOptions } from "next-auth";

import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

interface getServerSessionProps
  extends Pick<GetServerSidePropsContext, "req" | "res"> {
  redirectPath?: string;
}

/**
 * Receives Next.js getServerSideProps context that contains the server
 * request and response, and an optional redirectPath.
 * This functions tries to authenticate the user with NextAuth and returns
 * the session object.
 *
 * @param {getServerSessionProps} props Next.js getServerSideProps context & redirectPath
 * @returns {Session} Current user session
 * @throws Redirection to ¨redirectPath¨
 *
 */
export const getServerSession = async ({
  req,
  res,
  redirectPath,
}: getServerSessionProps) => {
  const session = await unstable_getServerSession(
    req,
    res,
    authOptions as NextAuthOptions
  );

  if (session) {
    return {
      props: { session },
    };
  }
  return {
    redirect: { destination: redirectPath ?? "/auth/signin", permanent: false },
  };
};
