// React, Types & Routing
import { useRouter } from "next/router";

// Styling
import { NavigationContainer } from "./styles";
import { Button } from "@nextui-org/react";
import { Home, MessageCircle, Search, Send } from "react-feather";

const BottomNavigation = () => {
  const { push } = useRouter();

  return (
    <NavigationContainer as="nav">
      <Button auto color="gradient" css={{ bg: "$transparent" }} flat >
        <Home size={18} />
      </Button>
      <Button auto color="gradient" css={{ bg: "$transparent" }} flat >
        <Search size={18} />
      </Button>
      <Button auto color="gradient" css={{ bg: "$transparent" }} flat >
        <MessageCircle size={18} />
      </Button>
      <Button auto color="error" flat icon={<Send size={15} />} onPress={() => push("/comment")} >
        Add post
      </Button>
    </NavigationContainer>
  )
};

export default BottomNavigation;
