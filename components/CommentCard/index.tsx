import { Col, Container, Grid, Loading, Text, User } from "@nextui-org/react";
import fetcher from "lib/fetcher";
import moment from "moment";
import React, { FC } from "react";
import { MoreVertical } from "react-feather";
import useSWR from "swr";

type CommentCardType = {
  createdAt: Date;
  content: string;
  _id: string;
};

const CommentCard: FC<CommentCardType> = ({ createdAt, content, _id }) => {
  const { data, isValidating, error } = useSWR(
    `/api/user/get?id=${_id}`,
    fetcher
  );

  if (isValidating)
    return (
      <Container display="flex" justify="center" css={{ p: "$20 $10" }}>
        <Loading color="primary" />
      </Container>
    );

  if (error) return <div>Error</div>;

  return (
    <Col as="article">
      <Container display="flex" justify="space-between" alignItems="center">
        <User
          size="md"
          bordered
          description={moment(createdAt).fromNow()}
          name={data.name}
          src={data.image}
          css={{ paddingLeft: "$0", mt: "$6" }}
        />
        <MoreVertical size={14} />
      </Container>
      <Grid.Container css={{ borderBottom: "$accents1 solid 1px" }}>
        <Grid css={{ pb: "$8", pt: "$2", px: "$10" }}>
          <Text size={14} css={{ lineHeight: "$md", letterSpacing: "$normal", pl: "52px" }}>
            {content}
          </Text>
        </Grid>
      </Grid.Container>
    </Col>
  );
};

export default CommentCard;
