import Link from "next/link";

import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Icons } from "@/components/ui/icons";

export function PublicationCreationButton() {
  return (
    <Button
      fullWidth
      as={Link}
      href="?publication=create"
      scroll={false}
      radius="full"
      color="primary"
      className="font-medium text-md"
    >
      Publish
    </Button>
  );
}

export function MiddleSizePublicationCreationButton() {
  return (
    <Tooltip showArrow content="Publish" placement="right">
      <Button
        fullWidth
        isIconOnly
        as={Link}
        href="?publication=create"
        scroll={false}
        radius="full"
        color="primary"
        className="font-medium text-md"
      >
        <Icons.comment className="w-5 h-5" />
      </Button>
    </Tooltip>
  );
}
