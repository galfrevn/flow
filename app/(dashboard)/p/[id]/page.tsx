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

import { PublicationCommentCreator } from "@/components/publication/comments/creator";
import {
  PublicationComments,
  PublicationCommentsSkeleton,
} from "@/components/publication/comments/list";

interface PublicationPageProps {
  params: {
    id: string;
  };
}

export default async function PublicationPage({ params }: PublicationPageProps) {
  const publication = await database.publication.findUnique({
    where: { id: params.id },
    include: { creator: true, comments: true },
  });

  if (!publication) return notFound();

  return (
    <div>
      <Divider orientation="horizontal" />
      <PublicationBase hoverEffect={false} key={publication.id}>
        <PublicationContent {...publication} />
        <PublicationSettings {...publication} />
        <Suspense fallback={<PublicationInteractionsSkeleton />}>
          <PublicationInteractions id={publication.id} />
        </Suspense>
      </PublicationBase>
      <PublicationCommentCreator />
      <Suspense fallback={<PublicationCommentsSkeleton />}>
        <PublicationComments id={publication.id} />
      </Suspense>
    </div>
  );
}
