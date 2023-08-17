
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { database } from "@/lib/database";
import { Divider } from "@nextui-org/divider";

import { PublicationBase } from "@/components/publication/base";
import { PublicationContent } from "@/components/publication/content";
import { PublicationSettings } from "@/components/publication/settings";
import {
  PublicationInteractions,
  PublicationInteractionsSkeleton,
} from "@/components/publication/interactions";

interface PublicationPageProps {
  params: {
    id: string;
  };
}

export default async function PublicationPage({ params }: PublicationPageProps) {
  const publication = await database.publication.findUnique({
    where: { id: params.id },
    include: { creator: true },
  });

  if (!publication) return notFound();

  return (
    <div>
      <Divider orientation="horizontal" />
      <PublicationBase key={publication.id}>
        <PublicationContent {...publication} />
        <PublicationSettings {...publication} />
        <Suspense fallback={<PublicationInteractionsSkeleton />}>
          <PublicationInteractions {...publication} />
        </Suspense>
      </PublicationBase>
      <Divider orientation="horizontal" />
    </div>
  );
}
