import { z } from "zod";
import { getServerSession } from "next-auth/next";

import { database } from "@/lib/database";
import { authenticationOptions } from "@/lib/authentication";

const routeContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

export async function GET(_request: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context);

    const raw = await database.publication.findUnique({
      where: { id: params.id },
      select: { creator: true },
    });

    if (!raw) {
      return new Response(null, { status: 404 });
    }

    return new Response(JSON.stringify(raw.creator), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
