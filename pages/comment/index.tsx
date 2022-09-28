import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Fragment } from "react";
import useComment from "hooks/useComment";
import { getSession } from "next-auth/react";

// Components
import CommentHeader from "components/CommentHeader";
import CommentLengthProgressBar from "components/CommentLengthProgressBar";
import { Container, Loading, Row, User, Textarea } from "@nextui-org/react";
import { CommentBottomActions, CommentBottomActionsTop } from "components/CommentBottomActions";

const CommentPage: NextPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const { loading, content, setContent, handleCreatePost } =
    useComment();

  return (
    <Fragment>
      {session ? (
        <main>
          <CommentHeader
            content={content}
            loading={loading}
            handleCreate={handleCreatePost}
          />
          <Container css={{ mt: "$20" }} >
            <Row justify="space-between" >
              <User
                size="sm"
                css={{ pl: "$0" }}
                name={session.user?.name}
                src={session.user?.image}
              />

              <CommentLengthProgressBar content={content} />

            </Row>
            <Row>
              <Textarea
                bordered
                color="primary"
                autoFocus
                fullWidth
                minRows={10}
                maxRows={15}
                css={{ mt: "$8" }}
                aria-label="texteare"
                placeholder="What are yout thinking?"
                onChange={(e) => setContent(e.target.value)}
              />
            </Row>
          </Container>
          <CommentBottomActionsTop />
          <CommentBottomActions />
        </main>
      ) : (
        <Loading color="error" />
      )
      }
    </Fragment >
  );
};

export default CommentPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);

  if (!session)
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};
