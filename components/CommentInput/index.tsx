import { Button, Textarea } from "@nextui-org/react";
import { FC, useState } from "react";
import { CommentInputContainer, ActionsRow } from "./styles";
import useCommentPost from "./useCommentPost";

type ContainerProps = {
  opened: boolean;
  maxHeight?: number;
};

const CommentInput: FC<{ postId: string; mutate: () => void }> = ({
  postId,
  mutate,
}) => {
  const { handleCommentPost, loading } = useCommentPost(mutate);

  const [content, setContent] = useState("");
  const [containerProps, setContainerProps] = useState<ContainerProps>({
    opened: false,
  });

  const handleOpenTextarea = () => {
    setContainerProps({
      opened: true,
      maxHeight: 240,
    });
  };

  const handleCloseTextarea = () => {
    setContainerProps({
      opened: false,
    });
  };

  return (
    <CommentInputContainer
      css={containerProps}
      onFocus={handleOpenTextarea}
      onBlur={handleCloseTextarea}
    >
      <Textarea
        color="primary"
        label="Add a comment"
        placeholder="What are you thinking?"
        fullWidth
        minRows={5}
        maxRows={5}
        maxLength={160}
        onChange={(e) => setContent(e.target.value)}
      />

      <ActionsRow justify="flex-end">
        <Button
          auto
          color="primary"
          onClick={() => handleCommentPost(postId, content)}
        >
          {loading ? "Posting..." : "Post"}
        </Button>
      </ActionsRow>
    </CommentInputContainer>
  );
};

export default CommentInput;
