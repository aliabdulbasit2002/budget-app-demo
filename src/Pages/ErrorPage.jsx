import { Box, Center, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Center minH="100vh" display="flex" flexDir="column">
      <Text fontWeight="semibold" fontSize="2xl">
        404 | Page Not Found
      </Text>

      <Link to="/" as={RouterLink} color="green">
        Go back to Home
      </Link>
    </Center>
  );
};

export default ErrorPage;
