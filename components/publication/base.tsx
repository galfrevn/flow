import { Fragment, PropsWithChildren } from "react";

import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";
import { cn } from "@/lib/tailwind";

interface PublicationBaseProps extends PropsWithChildren {
  hoverEffect?: boolean;
}

export function PublicationBase({ children, hoverEffect = true }: PublicationBaseProps) {
  return (
    <Fragment>
      <Card
        radius="none"
        className={cn(
          "bg-background relative",
          hoverEffect && "hover:bg-neutral-950 cursor-pointer"
        )}
      >
        <CardBody>{children}</CardBody>
      </Card>
      <Divider />
    </Fragment>
  );
}
