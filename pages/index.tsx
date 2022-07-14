// NextJS, React & Types
import { NextPage } from "next";

// Styling
import { Container, Text } from "@nextui-org/react";

// Auth
import { useSession } from "next-auth/react";
import LoadingScreen from "../components/LoadingScreen";

const App: NextPage = () => {
  const { data, status } = useSession();

  if (status === "loading") return <LoadingScreen />;

  return (
    <Container>
      <Text>{data?.user?.name}</Text>
      <img
        src={data?.user?.image as string}
        alt={`${data?.user?.name} profile picture`}
      />
    </Container>
  );
};

export default App;
