import { z } from 'zod';
import { getServerSession } from 'next-auth/next';

import { database } from '@/lib/database';
import { authenticationOptions } from '@/lib/authentication';
import { onboardingSchema } from '@/lib/validations/onboarding';

const routeContextSchema = z.object({
  params: z.object({
    user: z.string(),
  }),
});

export async function PATCH(
  request: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context);

    const session = await getServerSession(authenticationOptions);
    if (!session?.user || params.user !== session?.user.id) {
      return new Response(null, { status: 403 });
    }

    const body = await request.json();
    const payload = onboardingSchema.parse(body);

    await database.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name: payload.name,
        username: payload.username,
        about: payload.about,
        onboarding: true,
      },
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
