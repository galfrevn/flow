import { Card, Col, Row, Button, Text, Grid, Link } from "@nextui-org/react";

const FeedCard = () => (
  <Grid.Container css={{ borderBottom: "$accents1 solid 1px" }} >
    <Grid css={{ py: "$8", px: "$10" }}>
      <Text size={14} css={{ lineHeight: "$md" }} >Make beautiful websites regardless of your design experience.</Text>
    </Grid>
  </Grid.Container>
);

export default FeedCard;
