import type { PostType } from "types/post";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Text,
  User,
  Card,
  Button,
  Loading,
  Row,
} from "@nextui-org/react";
import { Heart, MessageSquare, Share2 } from "react-feather";

import moment from "moment";
import useLikePost from "./useLikePost";
import { useSession } from "next-auth/react";

const FeedCard: FC<PostType> = ({
  content,
  createdAt,
  user,
  image,
  likes,
  comments,
  _id,
  noButton,
}) => {
  const { push } = useRouter();
  const { data } = useSession();

  const [liked, setLiked] = useState(true);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    setLikesCount(likes.length);
    likes.includes(data?.user.id as string) ? setLiked(true) : setLiked(false);
  }, [setLikesCount, likes, data, setLiked]);

  const LikePost = (id: string) => {
    handleLikePost(id);
    setLiked(!liked);
    setLikesCount(likesCount + (liked ? -1 : 1));
  };

  const handleAddComment = (id: string) => {
    if (!noButton) push(`/post/${id}`);
  };

  const { handleLikePost, loading: loadingLikePost } = useLikePost();

  return (
    <Card
      isPressable
      variant="bordered"
      css={{ m: "$0 $8", bg: "$backgroundAlpha" }}
    >
      {/* POST HEADER */}
      <Card.Header>
        <User
          size="md"
          bordered
          pointer
          description={moment(createdAt).fromNow()}
          name={user.name}
          src={user.image}
          css={{ paddingLeft: "$0", zIndex: "0" }}
        />
      </Card.Header>

      {/* POST CONTENT */}
      <Card.Body css={{ py: "$2" }}>
        <Text size={13} css={{ lineHeight: "$md", letterSpacing: "$normal" }}>
          {content}
        </Text>
      </Card.Body>

      {/* POST ACTIONS */}
      <Card.Footer >
        <Row justify="space-between"  >
          <Row css={{ gap: "$6" }}>
            {/* LIKE BUTTON */}
            <Button
              auto
              color="error"
              onClick={() => LikePost(_id)}
              css={{ bg: liked ? "$error" : "$accents0" }}
              disabled={loadingLikePost}
              icon={!loadingLikePost ? <Heart size={18} stroke="#FFF" fill="#FFF" /> : <Loading type="spinner" color="currentColor" />}
            >
              {likesCount}
            </Button>
            {/* COMMENT BUTTON */}
            <Button
              auto
              onPress={() => handleAddComment(_id)}
              css={{ bg: "$accents0" }}
              icon={<MessageSquare size={18} stroke="#FFF" fill="#FFF" />}
            >
              {comments.length}
            </Button>
          </Row>
          {/* SHARE BUTTON */}
          <Button
            auto
            css={{ bg: "$accents0", px: "$10" }}
            icon={<Share2 size={18} stroke="#FFF" fill="#FFF" />}
          />
        </Row>
      </Card.Footer>

    </Card>
  )
};

export default FeedCard;
