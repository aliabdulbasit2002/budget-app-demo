import { Flex, Spinner } from "@chakra-ui/react";

const LoadingIndicator = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        align="center"
        bgColor="#3f3f3f55"
        position="absolute"
        w="full"
        h="100vh"
        top={0}
      >
        <Spinner size="xl"/>
      </Flex>
    </>
  );
};

export default LoadingIndicator;
