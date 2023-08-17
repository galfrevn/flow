import { Metadata } from "next";
import { Fragment } from "react";

import { Card, CardBody } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import { Divider } from "@nextui-org/divider";

export const metadata: Metadata = {
  title: 'Home'
}

export default function OnboardingPageSkeleton() {
  return (
    <section>
      {new Array(4).fill(0).map((_, index) => (
        <Fragment key={`skeleton-${index}`}>
          <Card
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
                    <div className={"h-60 rounded-lg bg-default-100"}></div>
                  </Skeleton>
                </div>
              </div>
            </CardBody>
          </Card>
          <Divider />
        </Fragment>
      ))}
    </section>
  );
}
