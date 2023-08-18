"use client";

import { Fragment, useTransition } from "react";
import { useSession } from "next-auth/react";

import { toast } from "sonner";
import { Publication, User } from "@prisma/client";

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Icons } from "@/components/ui/icons";

import { handleServerActionError } from "@/lib/errors";
import { removePublication } from "@/components/publication/actions";

type PublicationWithCreator = Publication & { creator: User };
interface PublicationSettingsProps extends PublicationWithCreator {}

export function PublicationSettings({ creator, id }: PublicationSettingsProps) {
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  let [isRemovingPublication, startTransition] = useTransition();

  const isCreator = session?.user?.id === creator.id;

  return (
    <Fragment>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            className="absolute top-3 right-3"
            isIconOnly
            variant="light"
            radius="full"
          >
            <Icons.dots />
          </Button>
        </DropdownTrigger>
        <DropdownMenu onAction={onOpen}>
          {/* @ts-ignore */}
          {isCreator ? <DropdownItem key="remove">Remove</DropdownItem> : null}
        </DropdownMenu>
      </Dropdown>
      <Modal isDismissable={!isRemovingPublication} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-background border-divider border-1">
          <ModalHeader className="flex flex-col gap-1">Remove publication</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to remove this post? This actions cannot be undone.</p>
          </ModalBody>
          <ModalFooter>
            <Button isDisabled={isRemovingPublication} variant="flat" onPress={onClose}>
              No, Leave
            </Button>
            <Button
              isLoading={isRemovingPublication}
              variant="flat"
              color="danger"
              onClick={() =>
                startTransition(async () => {
                  try {
                    await removePublication({ publicationId: id });
                    toast.success("Publication removed successfully!");
                    onClose();
                  } catch (error) {
                    handleServerActionError(error);
                  }
                })
              }
            >
              Yes, Remove publication
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
}
