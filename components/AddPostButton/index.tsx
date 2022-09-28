import type { NextComponentType } from "next";

import { Button } from "@nextui-org/react";
import { Plus } from "react-feather";
import { useRouter } from "next/router";

const AddPostButton: NextComponentType = () => {
  const router = useRouter();

  return (
    <Button
      auto
      flat
      color="primary"
      css={{
        position: "fixed",
        right: "$10",
        bottom: "$10",
        padding: "$0",
        borderRadius: "$rounded",
        height: "$17",
        width: "$17",
      }}
      onPress={() => router.push("/comment")}
    >
      <Plus />
    </Button>
  );
};

export default AddPostButton;
