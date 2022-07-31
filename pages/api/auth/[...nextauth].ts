import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// MongoDB Adapter
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],

  // MongoDB Adapter
  adapter: MongoDBAdapter(clientPromise),

  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.SECRET,
  jwt: { secret: process.env.SECRET },
});
