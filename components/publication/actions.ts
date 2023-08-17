"use server";

import { z } from "zod";

import { database } from "@/lib/database";
import { revalidatePath } from "next/cache";

const removePublicationSchema = z.object({
  publicationId: z.string(),
});

type RemovePublicationSchema = z.infer<typeof removePublicationSchema>;

export async function removePublication(publication: RemovePublicationSchema) {
  try {
    const { publicationId } = removePublicationSchema.parse(publication);
    await database.publication.delete({
      where: { id: publicationId },
    });

    revalidatePath("home");
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.message);
    }

    throw new Error(JSON.stringify("Something went wrong"));
  }
}
