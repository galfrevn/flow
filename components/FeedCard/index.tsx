import { Col, Text, Grid, Container, User, Row } from "@nextui-org/react";
import { Heart, MessageSquare, Pocket, Share } from "react-feather";

// Important
// #787F85 => $gray700 from @nextui-org/react

const FeedCard = () => (
  <Col as="article">
    <Container>
      <User size="sm" name="Valentín Galfré" css={{ paddingLeft: "$0" }}>
        <User.Link href="https://galfrevn.netlify.app">@galfre.vn</User.Link>
      </User>
    </Container>
    <Grid.Container css={{ borderBottom: "$accents1 solid 1px" }}>
      <Grid css={{ py: "$8", px: "$10" }}>
        <Text size={14} css={{ lineHeight: "$md", letterSpacing: "$normal" }}>
          Make beautiful websites regardless of your design experience.
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
