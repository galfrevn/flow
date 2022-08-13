import { useState } from "react";
import { useSession } from "next-auth/react";

const useCommentPost = (mutate: () => void) => {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);

  const handleCommentPost = async (id: string, content: string) => {
    setLoading(true);
    const response = await fetch(`/api/post/comment?_id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: {
          user: data?.user.id,
          content,
        },
      }),
    });

    setLoading(false);
    mutate();
  };

  return {
    loading,
    handleCommentPost,
  };
};

export default useCommentPost;
