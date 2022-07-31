import { FC, useState } from "react";
import type { PostType } from "types/post";

import {
  Col,
  Text,
  Grid,
  Container,
  User,
  Row,
  Image,
} from "@nextui-org/react";
import {
  Heart,
  MessageSquare,
  MoreVertical,
  Pocket,
  Share,
} from "react-feather";

import moment from "moment";
import { IconContainer } from "./styles";
import useLikePost from "./useLikePost";
import { getSession, useSession } from "next-auth/react";

// Important
// #787F85 => $gray700 from @nextui-org/react

const FeedCard: FC<PostType> = ({
  content,
  createdAt,
  user,
  image,
  likes,
  _id,
}) => {
  const { data } = useSession();

  const [liked, setLiked] = useState(
    likes.includes(data?.user?.id as string) ? true : false
  );
  const [likesCount, setLikesCount] = useState(likes.length);

  const handleLike = (id: string) => {
    handleLikePost(id);
    setLiked(!liked);
    setLikesCount(likesCount + (liked ? -1 : 1));
  };

  const { handleLikePost, loading } = useLikePost();

  return (
    <Col as="article">
      <Container display="flex" justify="space-between" alignItems="center">
        <User
          size="md"
          bordered
          description={moment(createdAt).fromNow()}
          name={user.name}
          src={user.image}
          css={{ paddingLeft: "$0" }}
        />
        <MoreVertical size={14} />
      </Container>
      <Grid.Container css={{ borderBottom: "$accents1 solid 1px" }}>
        <Grid css={{ py: "$8", px: "$10" }}>
          {image && (
            <Image
              alt={`${user.name}'s post`}
              src={image as string}
              css={{ borderRadius: "$sm", marginBottom: "$10" }}
              showSkeleton
            />
          )}
          <Text size={14} css={{ lineHeight: "$md", letterSpacing: "$normal" }}>
            {content}
          </Text>
        </Grid>
        <Container>
          <Row css={{ pb: "$8" }}>
            <IconContainer span={3}>
              <MessageSquare size={18} stroke="#787F85" />
              <Text size={12} color="$gray700">
                1,432
              </Text>
            </IconContainer>
            <IconContainer span={3} onClick={() => handleLike(_id)}>
              <Heart
                size={18}
                stroke={liked ? "red" : "#787F85"}
                fill={liked ? "red" : ""}
              />
              <Text size={12} color="$gray700">
                {likesCount}
              </Text>
            </IconContainer>
            <IconContainer span={2}>
              <Pocket size={18} stroke="#787F85" />
            </IconContainer>
            <IconContainer span={2}>
              <Share size={18} stroke="#787F85" />
            </IconContainer>
          </Row>
        </Container>
      </Grid.Container>
    </Col>
  );
};

export default FeedCard;
