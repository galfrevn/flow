import { Fragment, useState } from "react";
import type { NextComponentType } from "next";

import { Button } from "@nextui-org/react";
import { Plus } from "react-feather";
import PostModal from "components/PostModal";

const AddPostButton: NextComponentType = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
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
        onPress={() => setOpen(true)}
      >
        <Plus />
      </Button>

      <PostModal controls={{ open, handleClose: () => setOpen(false) }} />
    </Fragment>
  );
};

export default AddPostButton;
