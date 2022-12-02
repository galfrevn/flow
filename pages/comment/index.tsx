import type { NextPage } from "next";
import { Fragment } from "react";
import { useSession } from "next-auth/react";
import useComment from "hooks/useComment";

// Components
import CommentHeader from "components/CommentHeader";
import CommentLengthProgressBar from "components/CommentLengthProgressBar";
import { Container, Row, User, Textarea } from "@nextui-org/react";
import { CommentBottomActions, CommentBottomActionsTop } from "components/CommentBottomActions";

const CommentPage: NextPage = () => {

  const { loading, content, setContent, handleCreatePost } =
    useComment();

  const { data } = useSession()

  return (
    <Fragment>
      <CommentHeader
        content={content}
        loading={loading}
        handleCreate={handleCreatePost}
      />
      <Container css={{ mt: "$20" }} >
        <Row justify="space-between" >
          <User
            bordered
            size="md"
            css={{ pl: "$0" }}
            name={data?.user?.name}
            description="What are you thinking?"
            src={String(data?.user?.image)}
          />

          <CommentLengthProgressBar content={content} />

        </Row>
        <Row>
          <Textarea
            bordered
            color="error"
            autoFocus
            fullWidth
            minRows={10}
            maxRows={15}
            css={{ mt: "$8" }}
            aria-label="texteare"
            placeholder="Start writting in here"
            onChange={(e) => setContent(e.target.value)}
          />
        </Row>
      </Container>
      <CommentBottomActionsTop />
      <CommentBottomActions />
    </Fragment >
  );
};

export default CommentPage;
