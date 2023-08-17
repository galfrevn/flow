import { z } from "zod";
import { getServerSession } from "next-auth/next";

import { database } from "@/lib/database";
import { authenticationOptions } from "@/lib/authentication";

const routeContextSchema = z.object({
  params: z.object({
    username: z.string(),
  }),
});

export async function GET(_request: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context);

    const session = await getServerSession(authenticationOptions);
    if (!session?.user || params.username !== session?.user.username) {
      return new Response(null, { status: 403 });
    }

    const media = await database.publication.findMany({
      where: { creator: { username: params.username } },
      select: { media: true, id: true },
      take: 4,
    });


    return new Response(JSON.stringify(media), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
