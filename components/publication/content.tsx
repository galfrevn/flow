import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Publication, User } from "@prisma/client";

import Link from "next/link";

import { Avatar } from "@nextui-org/avatar";
import { Icons } from "@/components/ui/icons";
import { Image } from "@nextui-org/image";

type PublicationWithCreator = Publication & { creator: User };
interface PublicationContentProps extends PublicationWithCreator {}

export function PublicationContent({
  id,
  createdAt,
  content,
  creator,
  media,
}: PublicationContentProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
        <Avatar isBordered src={String(creator.image)} className="w-10 h-10" />
      </div>
      <div className="flex flex-col overflow-hidden">
        <PublicationCreatorName
          username={creator.username || "unknown"}
          completeName={creator.name || "Unknown"}
          createdAt={createdAt}
          isVerified={creator.verified}
        />
        <Link href={`/p/${id}`}>
          {/* Using media[0] because we will handle multiple media sources in the future */}
          <p className="mt-2 max-w-lg">{content}</p>
          {Boolean(media[0].length) && (
            <Image height={270} className="mt-4 w-full" src={media[0]} />
          )}
        </Link>
      </div>
    </div>
  );
}

dayjs.extend(relativeTime);
interface PublicationCreatorNameProps {
  username: string;
  isVerified: boolean;
  completeName: string;
  createdAt: Date;
}

export function PublicationCreatorName({
  username,
  isVerified,
  completeName,
  createdAt,
}: PublicationCreatorNameProps) {
  return (
    <div>
      <div className="flex items-center space-x-1">
        <Link href={`/u/${username}`}>
          <h5 className="font-semibold hover:underline leading-tight">{completeName}</h5>
        </Link>
        {isVerified && <Icons.verification className="text-primary w-5 " />}
        <p className="text-gray-500 leading-tight">@{username}</p>
      </div>
      <p className="text-gray-500">Published {dayjs(createdAt).fromNow()}</p>
    </div>
  );
}
