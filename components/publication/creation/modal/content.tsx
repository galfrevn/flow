"use client";

import { toast } from "sonner";

import { handleServerActionError } from "@/lib/errors";
import { createPublication } from "@/components/publication/creation/modal/action";

import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { PublicationCreationModalGifs } from "@/components/publication/gifs/input";

import {
  Avatar,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Image,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import { Icons } from "@/components/ui/icons";

const maximumPublicationCharacters = 260;

export function PublicationCreationModalContent() {
  const { data: session } = useSession();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClosePublicationModal = () => router.replace(pathname, { scroll: false });

  let [isCreatingPublication, startTransition] = useTransition();

  const [publicationStep, setPublicationStep] = useState("content");
  const [publicationContent, setPublicationContent] = useState("");
  const [publicationMedia, setPublicationMedia] = useState("");

  useEffect(() => {
    if (publicationMedia) setPublicationStep("content");
  }, [publicationMedia]);

  const pendingCharactersPercentage = useMemo(
    () => (publicationContent.length * 100) / maximumPublicationCharacters,
    [publicationContent.length]
  );

  return (
    <ModalContent className="bg-background border-divider border-1">
      <ModalHeader className="flex flex-col gap-1">Share your thoughts!</ModalHeader>
      <ModalBody>
        {publicationStep === "content" && (
          <div className="flex gap-4">
            <div className="flex flex-col">
              <Avatar isBordered src={String(session?.user.image)} />
            </div>
            <div className="flex flex-col w-full">
              <Chip color="primary" variant="dot">
                Everyone can see this
              </Chip>
              {publicationMedia && (
                <div className="relative">
                  <Tooltip showArrow placement="bottom" content="Remove content">
                    <Button
                      isIconOnly
                      variant="flat"
                      radius="full"
                      className="absolute top-4 right-4 z-40"
                      onClick={() => setPublicationMedia("")}
                    >
                      <Icons.close />
                    </Button>
                  </Tooltip>
                  <Image className="mt-2 mb-1" src={publicationMedia} />
                </div>
              )}
              <Textarea
                fullWidth
                minRows={6}
                maxRows={6}
                value={publicationContent}
                onChange={(e) => setPublicationContent(e.target.value)}
                placeholder="What are you thinking?"
              />
              <p className="text-xs text-neutral-500">
                By creating this publication, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        )}
        {publicationStep === "gifs" && (
          <PublicationCreationModalGifs
            setPublicationStep={setPublicationStep}
            setPublicationMedia={setPublicationMedia}
          />
        )}
      </ModalBody>
      <Divider orientation="horizontal" />
      <ModalFooter className="flex">
        <div className="w-full flex justify-between">
          <div className="flex space-x-2">
            <Tooltip showArrow placement="bottom" content="Add phothos or videos">
              <Button
                isDisabled={Boolean(publicationMedia)}
                isIconOnly
                radius="full"
                variant="light"
                color="primary"
              >
                <Icons.image className="w-5 h-5" />
              </Button>
            </Tooltip>
            <Tooltip showArrow placement="bottom" content="Add and animated Gif">
              <Button
                isDisabled={Boolean(publicationMedia)}
                isIconOnly
                radius="full"
                variant="light"
                color="primary"
                onClick={() => setPublicationStep("gifs")}
              >
                <Icons.gif className="w-5 h-5" />
              </Button>
            </Tooltip>
          </div>
          <div className="flex space-x-2">
            <CircularProgress
              showValueLabel
              value={pendingCharactersPercentage}
              color={
                pendingCharactersPercentage >= 90
                  ? "danger"
                  : pendingCharactersPercentage > 50
                  ? "warning"
                  : "primary"
              }
            />
            <Button
              isLoading={isCreatingPublication}
              isDisabled={pendingCharactersPercentage === 0 || pendingCharactersPercentage > 100}
              color="primary"
              radius="full"
              variant="shadow"
              onClick={() =>
                startTransition(async () => {
                  try {
                    await createPublication({
                      publicationMedia,
                      publicationContent,
                      id: String(session?.user.id),
                      publicationVisibility: "PUBLIC",
                    });
                    toast.success("Publication created successfully!");
                    handleClosePublicationModal();
                  } catch (error) {
                    handleServerActionError(error);
                  }
                })
              }
            >
              Save and Publish
            </Button>
          </div>
        </div>
      </ModalFooter>
    </ModalContent>
  );
}
