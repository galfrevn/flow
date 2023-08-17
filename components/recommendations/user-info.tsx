"use client";

import Link from "next/link";
import { Fragment } from "react";
import { User } from "@prisma/client";

import { useQuery } from "@tanstack/react-query";
import { useParams, usePathname } from "next/navigation";

import { Avatar, Button, Card, CardBody, Skeleton } from "@nextui-org/react";

import { Icons } from "@/components/ui/icons";

export function RecommendationUserInfomation() {
  const params = useParams();
  const pathname = usePathname();

  const { data: user, isLoading } = useQuery({
    enabled: !!params.id && pathname.includes("/p"),
    refetchOnWindowFocus: false,
    queryKey: ["p", params.id, "creator"],
    queryFn: () => fetch(`/api/p/${params.id}/creator`).then((res) => res.json()),
  });

  if (!params.id || !pathname.includes("/p")) return null;
  if (isLoading) return <RecommendationUserInfomationSkeleton />;

  return (
    <Card>
      <CardBody className="space-y-2">
        <div className="flex space-x-4">
          <div className="flex flex-col">
            <Link href={`/u/${user.username}`}>
              <Avatar isBordered src={String(user.image)} />
            </Link>
          </div>
          <div className="flex flex-col overflow-hidden">
            <RecommendationUserInfomationUser {...user} />
            <p className="max-w-lg mt-1 text-gray-500">{user.about}</p>
            <Button className="mt-2" radius="full" variant='flat' >
              Follow user
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

function RecommendationUserInfomationSkeleton() {
  return <Skeleton className="w-full h-40 rounded-lg" />;
}

export function RecommendationUserInfomationUser({ username, name, verified }: User) {
  return (
    <Fragment>
      <div className="flex items-center space-x-1">
        <Link href={`/u/${username}`}>
          <h5 className="font-semibold hover:underline leading-tight">{name}</h5>
        </Link>
        {verified && <Icons.verification className="text-primary w-5 " />}
      </div>
      <p className="text-gray-500 leading-tight">@{username}</p>
    </Fragment>
  );
}
