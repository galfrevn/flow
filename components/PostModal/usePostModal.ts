import { useState } from "react";
import { usePaginatePosts } from "components/Feed/useRequest";
import { useSession } from "next-auth/react";

const usePostModal = (controls: { open: boolean; handleClose: () => void }) => {
  const { data } = useSession();
  const { mutate } = usePaginatePosts();

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const handleCreatePost = async () => {
    if (!content) {
      return;
    }

    console.log(data);

    setLoading(true);
    const response = await fetch("/api/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        user: data?.user?.name,
        image: data?.user?.image,
      }),
    });

    if (response.ok) {
      mutate();
      controls.handleClose();
    }

    setLoading(false);
  };

  return {
    loading,
    setContent,
    handleCreatePost,
  };
};

export default usePostModal;
