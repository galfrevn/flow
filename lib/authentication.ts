import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';

import GitHubProvider from 'next-auth/providers/github';

import { environmentVariables } from '@/environment.mjs';
import { database } from '@/lib/database';

export const authenticationOptions: NextAuthOptions = {
  adapter: PrismaAdapter(database as any),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  secret: environmentVariables.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: environmentVariables.GITHUB_CLIENT_ID,
      clientSecret: environmentVariables.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const databaseSavedUser = await database.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!databaseSavedUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: databaseSavedUser.id,
        name: databaseSavedUser.name,
        email: databaseSavedUser.email,
        picture: databaseSavedUser.image,
      };
    },
  },
};
