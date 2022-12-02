import { Button, Row, Textarea } from "@nextui-org/react";
import CommentLengthProgressBar from "components/CommentLengthProgressBar";
import { FC, useState } from "react";
import { Send } from "react-feather";
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
      <Row justify="space-between" css={{ gap: "$5" }} align="center"  >
        <Textarea
          bordered
          color="error"
          fullWidth
          autoFocus
          minRows={1}
          maxRows={3}
          aria-label="texteare"
          placeholder="Start writting in here"
          onChange={(e) => setContent(e.target.value)}
        />

        <Button color="error" flat auto disabled={!content} onPress={() => handleCommentPost(postId, content)} >
          Submit
        </Button>
      </Row>
    </CommentInputContainer>
  );
};

export default CommentInput;
