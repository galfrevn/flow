"use client";

import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { User } from "@prisma/client";
import { Button, Image, Tooltip } from "@nextui-org/react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@nextui-org/modal";

import { UploadDropzone } from "@/lib/uploadthing";

import { Icons } from "@/components/ui/icons";

interface UserBackdropProps {
  user: User;
}

export function UserBackdrop({ user }: UserBackdropProps) {
  const router = useRouter();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const { data: session } = useSession();
  const isCurrentUser = session?.user?.id === user?.id;

  return (
    <div className="relative">
      <Image
        width="100%"
        height={230}
        radius="none"
        className="min-h-[230px] max-h-[230px] bg-contain object-cover bg-center"
        src={
          user.backdrop ||
          "https://pbs.twimg.com/profile_banners/1146924282922057728/1593995949/1500x500"
        }
        alt={`${user?.name} backdrop image`}
      />
      {isCurrentUser && (
        <Tooltip showArrow content="Change backdrop image">
          <Button
            isIconOnly
            radius="full"
            color="default"
            variant="flat"
            className="absolute right-4 bottom-4 z-40"
            onClick={onOpen}
          >
            <Icons.image className="w-5 h-5" />
          </Button>
        </Tooltip>
      )}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-background border-divider border-1">
          <ModalBody>
            <UploadDropzone
              endpoint="backdrop"
              className="border-none py-8 cursor-pointer ut-button:bg-primary ut-button:px-8 ut-button:rounded-full"
              onClientUploadComplete={() => {
                toast.success("Backdrop image successfully uploaded");
                router.refresh();
                onClose();
              }}
              onUploadError={(error: Error) => {
                toast.error("Something went wrong with the upload", { description: error.message });
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
