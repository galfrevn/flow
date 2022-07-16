import { FullScreenContainer } from "./styles";
import { Loading, Text } from "@nextui-org/react";

const LoadingScreen = () => {
  return (
    <FullScreenContainer display="flex" justify="center" alignItems="center">
      <Loading color="error" />
    </FullScreenContainer>
  );
};

export default LoadingScreen;
