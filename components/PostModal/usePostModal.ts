import { useRouter } from "next/router";
import { useState } from "react";

const usePostModal = (controls: { open: boolean; handleClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const router = useRouter();

  const refreshProps = () => {
    router.replace(router.asPath);
  };

  const handleCreatePost = async () => {
    if (!content) {
      return;
    }

    setLoading(true);
    const response = await fetch("/api/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (response.ok) {
      refreshProps();
    }

    setLoading(false);
    controls.handleClose();
  };

  return {
    loading,
    setContent,
    handleCreatePost,
  };
};

export default usePostModal;
