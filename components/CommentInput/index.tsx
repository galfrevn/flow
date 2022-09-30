import { Button, Textarea } from "@nextui-org/react";
import { FC, useState } from "react";
import { CommentInputContainer } from "./styles";
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

  return (
    <CommentInputContainer>
      
    </CommentInputContainer>
  );
};

export default CommentInput;
