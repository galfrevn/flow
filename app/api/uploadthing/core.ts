import { createUploadthing, type FileRouter } from "uploadthing/next";

import { database } from "@/lib/database";
import { getToken } from "next-auth/jwt";
import { revalidatePath } from "next/cache";

const f = createUploadthing();

export const ourFileRouter = {
  backdrop: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      const session = await getToken({ req });
      return { userId: session?.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await database.user.update({
        where: { id: metadata.userId },
        data: { backdrop: file.url },
      });

      revalidatePath(`/u/[username]`);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
