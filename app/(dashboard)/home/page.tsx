import { Suspense } from "react";

import { database } from "@/lib/database";

import { PublicationBase } from "@/components/publication/base";
import { PublicationContent } from "@/components/publication/content";
import { PublicationSettings } from "@/components/publication/settings";
import { PublicationInteractions, PublicationInteractionsSkeleton } from "@/components/publication/interactions";

export const dynamic = "force-dynamic";

async function getRecentPublications() {
  return await database.publication.findMany({
    where: { visibility: "PUBLIC" },
    orderBy: { createdAt: "desc" },
    include: { creator: true },
  });
}

export default async function Homepage() {
  const publications = await getRecentPublications();

  return (
    <div className="w-full">
      {publications.map((publication) => (
        <PublicationBase key={publication.id}>
          <PublicationContent {...publication} />
          <PublicationSettings {...publication} />
          <Suspense fallback={<PublicationInteractionsSkeleton />} >
            <PublicationInteractions {...publication} />
          </Suspense>
        </PublicationBase>
      ))}
      {publications.map((publication) => (
        <PublicationBase key={publication.id}>
          <PublicationContent {...publication} />
          <PublicationSettings {...publication} />
          <Suspense fallback={<PublicationInteractionsSkeleton />} >
            <PublicationInteractions {...publication} />
          </Suspense>
        </PublicationBase>
      ))}
      {publications.map((publication) => (
        <PublicationBase key={publication.id}>
          <PublicationContent {...publication} />
          <PublicationSettings {...publication} />
          <Suspense fallback={<PublicationInteractionsSkeleton />} >
            <PublicationInteractions {...publication} />
          </Suspense>
        </PublicationBase>
      ))}
    </div>
  );
}
