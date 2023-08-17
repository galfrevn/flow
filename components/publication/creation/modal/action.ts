"use server";

import { z } from "zod";
import { Visibility } from "@prisma/client";

import { database } from "@/lib/database";
import { revalidatePath } from "next/cache";

const createPublicationSchema = z.object({
  id: z.string().cuid(),
  publicationVisibility: z.enum([Visibility.PUBLIC, Visibility.PRIVATE, Visibility.HIDDEN]),
  publicationContent: z.string().min(1).max(260),
  publicationMedia: z.string(),
});

type CreatePublicationSchema = z.infer<typeof createPublicationSchema>;

export async function createPublication(publication: CreatePublicationSchema) {
  try {
    const { publicationContent, publicationVisibility, publicationMedia, id } =
      createPublicationSchema.parse(publication);

    await database.publication.create({
      data: {
        creator: { connect: { id } },
        content: publicationContent,
        media: { set: [publicationMedia] },
        visibility: publicationVisibility,
      },
    });

    revalidatePath("home");
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.message);
    }

    throw new Error(JSON.stringify('Something went wrong'));
  }
}
