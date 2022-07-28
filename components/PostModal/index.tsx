import React, { FC } from "react";
import { Modal, Button, Text, Textarea, Loading } from "@nextui-org/react";
import usePostModal from "./usePostModal";

const PostModal: FC<{
  controls: {
    open: boolean;
    handleClose: () => void;
  };
}> = ({ controls }) => {
  const { loading, setContent, handleCreatePost } = usePostModal(controls);

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={controls.open}
      onClose={controls.handleClose}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          What are you thinking?
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Textarea
          bordered
          required
          label="Write your thoughts"
          placeholder="Enter your amazing ideas."
          onChange={(e) => setContent(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={controls.handleClose}>
          Close
        </Button>
        <Button auto onPress={handleCreatePost}>
          Submit and share
        </Button>
        {loading && <Loading color="primary" />}
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;
