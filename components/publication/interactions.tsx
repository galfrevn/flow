import { database } from "@/lib/database";

import { Publication, User } from "@prisma/client";

import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import { Icons } from "@/components/ui/icons";

type PublicationWithCreator = Publication & { creator: User };
interface PublicationInteractionsProps extends PublicationWithCreator {}

async function getInteractions(publicationId: string) {
  const where = { publication: { id: publicationId } };
  return await database.$transaction([
    database.like.count({ where }),
    database.comment.count({ where }),
    database.republication.count({ where }),
  ]);
}

export async function PublicationInteractions({ id }: PublicationInteractionsProps) {
  const interactions = await getInteractions(id);

  return (
    <div className="pl-14 flex justify-between gap-4 mt-4 w-full">
      <div className="flex space-x-2">
        <Button radius="full" variant="flat" color="danger">
          <Icons.heart className="w-4 h-4" />
          {interactions[0]} Likes
        </Button>
        <Button radius="full" variant="flat" color="primary">
          <Icons.comment className="w-4 h-4" />
          {interactions[1]} Comments
        </Button>
        <Button radius="full" variant="flat" color="success">
          <Icons.repeat className="w-4 h-4" />
          {interactions[2]} Reposts
        </Button>
      </div>
      <Button isIconOnly radius="full" variant="flat" color="warning">
        <Icons.bookmark className="w-4 h-4" />
      </Button>
    </div>
  );
}

export function PublicationInteractionsSkeleton() {
  return (
    <div className="pl-14 flex justify-between gap-4 mt-4 w-full">
      <div className="flex space-x-2">
        <Skeleton className="w-[99px] h-10 rounded-full dark:bg-danger/20" />
        <Skeleton className="w-[135px] h-10 rounded-full dark:bg-primary/20" />
        <Skeleton className="w-[117px] h-10 rounded-full dark:bg-success/20" />
      </div>
      <Skeleton className="w-10 h-10 rounded-full dark:bg-warning/20" />
    </div>
  );
}
