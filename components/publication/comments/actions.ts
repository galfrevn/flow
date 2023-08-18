"use server";

import { z } from "zod";

import { database } from "@/lib/database";
import { revalidatePath } from "next/cache";

const createPublicationCommentSchema = z.object({
  creatorId: z.string().cuid(),
  publicationId: z.string().cuid(),
  publicationContent: z.string().min(1).max(260),
});

type CreatePublicationSchema = z.infer<typeof createPublicationCommentSchema>;

export async function createComment(publication: CreatePublicationSchema) {
  try {
    const { creatorId, publicationId, publicationContent } =
      createPublicationCommentSchema.parse(publication);

    await database.comment.create({
      data: {
        creator: { connect: { id: creatorId } },
        publication: { connect: { id: publicationId } },
        content: publicationContent,
      },
    });

    revalidatePath("/p/[id]");
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.message);
    }

    throw new Error(JSON.stringify("Something went wrong"));
  }
}
