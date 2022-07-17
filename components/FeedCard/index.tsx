import { Card, Col, Row, Button, Text, Grid, Link } from "@nextui-org/react";

const FeedCard = () => (
  <Card css={{ p: "$6" }} variant="bordered">
    <Card.Header>
      <img
        alt="nextui logo"
        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
        width="34px"
        height="34px"
      />
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" }}>
            Next UI
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text css={{ color: "$accents8" }}>nextui.org</Text>
        </Grid>
      </Grid.Container>
    </Card.Header>
    <Card.Body css={{ py: "$2" }}>
      <Text>Make beautiful websites regardless of your design experience.</Text>
    </Card.Body>
  </Card>
);

export default FeedCard;
