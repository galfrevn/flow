import NextAuth from 'next-auth';
import { authenticationOptions } from '@/lib/authentication';

const handler = NextAuth(authenticationOptions);

export { handler as GET, handler as POST };
