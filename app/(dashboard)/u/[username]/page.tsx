import dayjs from "dayjs";

import { Suspense } from "react";
import { notFound } from "next/navigation";

import { Avatar } from "@nextui-org/avatar";

import { database } from "@/lib/database";
import { Button } from "@nextui-org/button";
import { Icons } from "@/components/ui/icons";
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";

import { UserBackdrop } from "@/components/user/backdrop";
import { PublicationBase } from "@/components/publication/base";
import { PublicationContent } from "@/components/publication/content";
import { PublicationSettings } from "@/components/publication/settings";
import {
  PublicationInteractions,
  PublicationInteractionsSkeleton,
} from "@/components/publication/interactions";

export const dynamic = 'force-dynamic'
interface UserPageProps {
  params: {
    username: string;
  };
}

export async function generateMetadata({ params }: UserPageProps) {
  const user = await database.user.findUnique({
    where: { username: params.username },
    select: { name: true, username: true },
  });

  if (!user) return notFound();

  return {
    title: `${user?.name} (@${user?.username})`,
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const user = await database.user.findUnique({
    where: { username: params.username },
    include: { publications: true },
  });

  if (!user) return notFound();

  return (
    <div className="w-full ">
      <div className="relative">
        <UserBackdrop user={user}  />
        <Avatar
          isBordered
          className="absolute -bottom-14 left-6 w-28 h-28"
          src={String(user?.image)}
        />

        <div className="flex gap-3 absolute -bottom-16 right-5">
          <Button variant="bordered" radius="full" isIconOnly>
            <Icons.dots />
          </Button>

          <Button radius="full" color="primary">
            Follow
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-3 mt-[70px] px-6 mb-8">
        <div>
          <div className="flex space-x-2 items-center">
            <h2 className="text-2xl font-semibold leading-tight">{user?.name}</h2>
            {user?.verified && (
              <Tooltip showArrow content="Verified user">
                <Icons.verification className="text-primary" />
              </Tooltip>
            )}
          </div>
          <p className="text-neutral-600">@{user?.username}</p>
        </div>
        <p>{user?.about}</p>

        <div className="flex space-x-2">
          <Chip
            startContent={<Icons.calendar className="w-4 h-4" />}
            color="warning"
            variant="flat"
          >
            Here since {dayjs(user.createdAt).format("MMMM YYYY")}
          </Chip>
          <Chip startContent={<Icons.repeat className="w-4 h-4" />} color="primary" variant="flat">
            0 followers
          </Chip>
        </div>
      </div>
      <Divider orientation="horizontal" />

      {user.publications.map((publication) => (
        <PublicationBase key={publication.id}>
          <PublicationContent {...publication} creator={user} />
          <PublicationSettings {...publication} creator={user} />
          <Suspense fallback={<PublicationInteractionsSkeleton />}>
            <PublicationInteractions id={publication.id} />
          </Suspense>
        </PublicationBase>
      ))}
    </div>
  );
}
