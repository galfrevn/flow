"use client";

import Link from "next/link";
import { Fragment } from "react";

import { Image, Skeleton } from "@nextui-org/react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export function RecommendationUserMedia() {
  const params = useParams();

  const { data: publications, isLoading } = useQuery({
    enabled: !!params.username,
    refetchOnWindowFocus: false,
    queryKey: ["user", params.username, "media"],
    queryFn: () => fetch(`/api/user/${params.username}/media`).then((res) => res.json()),
  });

  if (!params.username) return null;
  if (isLoading) return <RecommendationUserMediaSkeleton />;

  return (
    <Fragment>
      <div className="grid gap-4">
        {publications?.map((publication: { id: string; media: string }) => (
          <Link href={`/p/${publication.id}`} key={publication.id}>
            <Image radius="sm" src={publication.media} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

function RecommendationUserMediaSkeleton() {
  return (
    <Fragment>
      <div className="grid gap-4">
        <Skeleton className="w-full h-28 rounded-lg" />
        <Skeleton className="w-full h-28 rounded-lg" />
      </div>
    </Fragment>
  );
}
