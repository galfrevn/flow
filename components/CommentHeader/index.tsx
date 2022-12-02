// React, Types & Routing
import type { FC } from "react";
import { useRouter } from "next/router";

// Styling
import { HeaderContainer } from "./styles";
import { X } from "react-feather";
import { Button, Loading } from "@nextui-org/react";

// Disable button when input is empty

interface CommentHeaderProps {
  content: string;
  loading: boolean;
  handleCreate: () => Promise<void>;
}

const CommentHeader: FC<CommentHeaderProps> = ({ content, loading, handleCreate }) => {
  const router = useRouter();

  return (
    <HeaderContainer as="header">
      <X onClick={() => router.back()} />
      <Button
        flat
        rounded
        color="error"
        css={{ width: "$5", px: "$3" }}
        onPress={handleCreate}
        disabled={content.length === 0 || loading}
      >
        {loading ? <Loading type="spinner" color="currentColor" size="sm" /> : "Publish"}
      </Button>
    </HeaderContainer>
  );
};

export default CommentHeader;
