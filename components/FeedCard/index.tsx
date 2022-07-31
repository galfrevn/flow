import { FC } from "react";
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

// Important
// #787F85 => $gray700 from @nextui-org/react

const FeedCard: FC<PostType> = ({ content, createdAt, user, image }) => (
  <Col as="article">
    <Container display="flex" justify="space-between" alignItems="center">
      <User
        size="md"
        bordered
        description={moment(createdAt).fromNow()}
        name={user.name}
        src={user.image}
        css={{ paddingLeft: "$0" }}
      ></User>
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
          <Col span={3} css={{ display: "flex", alignItems: "center", gap: 6 }}>
            <MessageSquare size={18} stroke="#787F85" />
            <Text size={12} color="$gray700">
              1,432
            </Text>
          </Col>
          <Col span={3} css={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Heart size={18} stroke="#787F85" />
            <Text size={12} color="$gray700">
              2,432
            </Text>
          </Col>
          <Col span={2} css={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Pocket size={18} stroke="#787F85" />
          </Col>
          <Col span={2} css={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Share size={18} stroke="#787F85" />
          </Col>
        </Row>
      </Container>
    </Grid.Container>
  </Col>
);

export default FeedCard;
