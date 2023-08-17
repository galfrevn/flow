import { Fragment, PropsWithChildren } from "react";

import { Divider } from "@nextui-org/divider";
import { Card, CardBody } from "@nextui-org/card";

interface PublicationBaseProps extends PropsWithChildren {}
export function PublicationBase({ children }: PublicationBaseProps) {
  return (
    <Fragment>
      <Card radius="none" className="bg-background hover:bg-neutral-950 cursor-pointer relative">
        <CardBody>{children}</CardBody>
      </Card>
      <Divider />
    </Fragment>
  );
}
