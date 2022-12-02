import {
  Text,
  User,
  Card,
  Loading,
  Container,
} from "@nextui-org/react";

import fetcher from "lib/fetcher";
import moment from "moment";
import React, { FC, memo } from "react";
import useSWR from "swr";

type CommentCardType = {
  createdAt: Date;
  content: string;
  _id: string;
  user: string;
};

const CommentCard: FC<CommentCardType> = ({
  createdAt,
  content,
  _id,
  user,
}) => {
  const { data, isValidating, error } = useSWR(
    `/api/user/get?id=${user}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isValidating)
    return (
      <Container display="flex" justify="center" css={{ p: "$20 $10" }}>
        <Loading color="error" />
      </Container>
    );

  if (error) return <div>Error</div>;

  return (
    <Card
      isPressable
      variant="bordered"
      css={{ m: "$0 $8", bg: "$backgroundAlpha" }}
    >
      <Card.Header>
        <User
          size="md"
          bordered
          pointer
          description={moment(createdAt).fromNow()}
          name={data.name}
          src={data.image}
          css={{ paddingLeft: "$0", zIndex: "0" }}
        />
      </Card.Header>

      <Card.Body css={{ py: "$2", pb: "$8" }}>
        <Text size={13} css={{ lineHeight: "$md", letterSpacing: "$normal" }}>
          {content}
        </Text>
      </Card.Body>

    </Card >
  )
};

export default memo(CommentCard);