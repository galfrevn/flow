import { getServerSession } from 'next-auth/next';
import { authenticationOptions } from '@/lib/authentication';

export async function getCurrentUser() {
  const session = await getServerSession(authenticationOptions);

  return session?.user;
}
