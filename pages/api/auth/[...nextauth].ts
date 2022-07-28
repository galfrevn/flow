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
  /* adapter: MongoDBAdapter(clientPromise, {
    collections: {
      Accounts: "accounts",
      Sessions: "sessions",
      Users: "users",
      VerificationTokens: "verificationTokens",
    },
  }), */

  secret: process.env.SECRET,
  session: { strategy: "jwt" },
  jwt: { secret: process.env.SECRET },
});
