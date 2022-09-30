import { useState } from "react";
import { usePaginatePosts } from "components/Feed/useRequest";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const useComment = () => {
  const { data } = useSession();
  const { mutate } = usePaginatePosts();
  const { back, query } = useRouter();

  const { id } = query;

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

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
      body: JSON.stringify({
        content,
        user: {
          id: data?.user.id,
          name: data?.user.name,
          image: data?.user.image,
        },
        image,
      }),
    });

    if (response.ok) {
      mutate();
      back();
    }

    setLoading(false);
  };

  return {
    loading,
    content,
    setContent,
    setImage,
    handleCreatePost,
  };
};

export default useComment;
