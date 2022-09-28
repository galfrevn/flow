import { useState } from "react";
import { useSession } from "next-auth/react";

// #TODO: Remove any
const useCommentPost = (mutate: any) => {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);

  const handleCommentPost = async (id: string, content: string) => {
    setLoading(true);

    const comment = {
      user: data?.user.id,
      content,
    };

    const response = await fetch(`/api/post/comment?_id=${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    });

    setLoading(false);
    mutate({
      optimisticData: comment,
      rollbackOnError: true,
      revalidate: false,
    });
  };

  return {
    loading,
    handleCommentPost,
  };
};

export default useCommentPost;
