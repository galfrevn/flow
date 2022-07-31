import { useState } from "react";
import { useSession } from "next-auth/react";

const useLikePost = () => {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);

  const handleLikePost = async (id: string) => {
    setLoading(true);
    const response = await fetch("/api/post/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        user: {
          id: data?.user.id,
        },
      }),
    });

    setLoading(false);
  };

  return {
    loading,
    handleLikePost,
  };
};

export default useLikePost;
