"use client";

import { toast } from "sonner";

import { handleServerActionError } from "@/lib/errors";
import { createComment } from "@/components/publication/comments/actions";

import { useSession } from "next-auth/react";
import { useMemo, useState, useTransition } from "react";

import { Avatar, Button, Chip, CircularProgress, Textarea } from "@nextui-org/react";
import { useParams } from "next/navigation";

const maximumPublicationCharacters = 260;

export function PublicationCommentCreator() {
  const params = useParams();
  const { data: session } = useSession();

  let [isCreatingComment, startTransition] = useTransition();
  const [publicationContent, setPublicationContent] = useState("");

  const pendingCharactersPercentage = useMemo(
    () => (publicationContent.length * 100) / maximumPublicationCharacters,
    [publicationContent.length]
  );

  return (
    <div className="p-5 bg-background border-b-[1px] border-divider">
      <div className="flex gap-4">
        <div className="flex flex-col">
          <Avatar isBordered src={String(session?.user.image)} />
        </div>
        <div className="flex flex-col w-full">
          <Chip color="warning" variant="flat">
            Comment to this publication
          </Chip>

          <Textarea
            fullWidth
            isDisabled={isCreatingComment}
            minRows={6}
            maxRows={6}
            value={publicationContent}
            className="mt-2"
            onChange={(e) => setPublicationContent(e.target.value)}
            placeholder="I like this publication because..."
          />
          <p className="text-xs text-neutral-500 mt-2">
            By publishing this comment, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-full flex justify-end">
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
              isLoading={isCreatingComment}
              isDisabled={pendingCharactersPercentage === 0 || pendingCharactersPercentage > 100}
              color="warning"
              radius="full"
              variant="shadow"
              onClick={() =>
                startTransition(async () => {
                  try {
                    await createComment({
                      creatorId: String(session?.user.id),
                      publicationId: String(params.id),
                      publicationContent,
                    });
                    toast.success("Comment created successfully!");
                    setPublicationContent("");
                  } catch (error) {
                    handleServerActionError(error);
                    setPublicationContent("");
                  }
                })
              }
            >
              {isCreatingComment ? 'Publishing Comment' : 'Publish Comment'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
