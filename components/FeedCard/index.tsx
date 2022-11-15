import type { PostType } from "types/post";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Col,
  Text,
  Grid,
  Container,
  User,
  Row,
  Image,
  Dropdown,
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
import { useSession } from "next-auth/react";

// Important
// #787F85 => $gray700 from @nextui-org/react
// #F4256D => $red700 from @nextui-org/react

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
  const router = useRouter();
  const { data } = useSession();

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    setLikesCount(likes.length);
    likes.includes(data?.user.id as string) ? setLiked(true) : setLiked(false);
  }, []);

  const handleLike = (id: string) => {
    handleLikePost(id);
    setLiked(!liked);
    setLikesCount(likesCount + (liked ? -1 : 1));
  };

  const handleAddComment = (id: string) => {
    if (!noButton) router.push(`/post/${id}`);
  };

  const { handleLikePost, loading } = useLikePost();


  console.log(user.id, data.user.id)

  return (
    <Col as="article">
      <Container display="flex" justify="space-between" alignItems="center">
        <User
          size="md"
          bordered
          description={moment(createdAt).fromNow()}
          name={user.name}
          src={user.image}
          css={{ paddingLeft: "$0", zIndex: "0" }}
        />

        <Dropdown>
          <Dropdown.Trigger>
            <MoreVertical size={14} />
          </Dropdown.Trigger>
          <Dropdown.Menu color="secondary" >
            {user.id !== data?.user.id ?
              <Dropdown.Item key="settings" >
                Chat with user
              </Dropdown.Item> :
              <Dropdown.Item key="logout" color="error" >
                Delete post
              </Dropdown.Item>
            }
          </Dropdown.Menu>
        </Dropdown>


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
            <IconContainer span={3} onClick={() => handleAddComment(_id)}>
              <MessageSquare size={18} stroke="#787F85" />
              <Text size={12} color="$gray700">
                {comments.length}
              </Text>
            </IconContainer>
            <IconContainer span={3} onClick={() => handleLike(_id)}>
              <Heart
                size={18}
                stroke={liked ? "#F4256D" : "#787F85"}
                fill={liked ? "#F4256D" : "transparent"}
              />
              <Text size={12} color={liked ? "$red700" : "$gray700"}>
                {likesCount}
              </Text>
            </IconContainer>
            <IconContainer span={3}>
              <Pocket size={18} stroke="#787F85" />
            </IconContainer>
            <IconContainer span={3}>
              <Share size={18} stroke="#787F85" />
            </IconContainer>
          </Row>
        </Container>
      </Grid.Container>
    </Col>
  );
};

export default FeedCard;
