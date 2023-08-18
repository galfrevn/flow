import { Fragment } from "react";

import Link from "next/link";

import { database } from "@/lib/database";

import { Avatar } from "@nextui-org/avatar";
import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardBody } from "@nextui-org/card";

import { PublicationBase } from "@/components/publication/base";
import { PublicationCreatorName } from "@/components/publication/content";

async function getComments(publicationId: string) {
  const where = { publication: { id: publicationId } };
  return await database.comment.findMany({ where, include: { creator: true }, orderBy: { createdAt: "desc" } });
}

type PublicationCommentsProps = { id: string };
export async function PublicationComments({ id }: PublicationCommentsProps) {
  const comments = await getComments(id);

  return (
    <div className="w-full">
      {comments.map((comment) => (
        <PublicationBase hoverEffect={false}>
          <div className="flex space-x-4">
            <header className="flex flex-col">
              <Link href={`/u/${comment.creator.username}`}>
                <Avatar isBordered src={String(comment.creator.image)} className="w-10 h-10" />
              </Link>
            </header>
            <div className="flex flex-col overflow-hidden">
              <PublicationCreatorName
                username={comment.creator.username || "unknown"}
                completeName={comment.creator.name || "Unknown"}
                createdAt={comment.createdAt}
                isVerified={comment.creator.verified}
              />
              <p className="mt-2 max-w-lg">{comment.content}</p>
            </div>
          </div>
        </PublicationBase>
      ))}
    </div>
  );
}

export function PublicationCommentsSkeleton() {
  return (
    <Fragment>
      {[...Array(3)].map((_, i) => (
        <Card
          key={`skeleton-${i}`}
          radius="none"
          className="bg-background hover:bg-neutral-950 cursor-pointer relative"
        >
          <CardBody>
            <div className="w-full flex gap-4">
              <div className="flex flex-col">
                <Skeleton className="w-full rounded-full">
                  <div className="h-10 w-10 rounded-lg bg-default-200"></div>
                </Skeleton>
              </div>
              <div className="w-full flex flex-col overflow-hidden">
                <Skeleton className="w-full rounded-lg mt-4">
                  <div className="h-20 rounded-lg bg-default-100"></div>
                </Skeleton>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </Fragment>
  );
}
