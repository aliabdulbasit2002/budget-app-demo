import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Img,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../images/login.jpg";

const Login = () => {
  return (
    <Center minH="100vh" py={{ base: 3, md: 0 }} bg="green.400">
      <Flex
        maxW="800px"
        h={{ base: "auto", md: "600px" }}
        px={3}
        justify="center"
      >
        <Img
          src={loginImg}
          w={{ base: 0, md: "50%" }}
          pos="center"
          display={{ base: "none", md: "block" }}
        />
        <Box w={{ base: "100%", md: "50%" }} bg="white" p={8}>
          <Heading textAlign="center">Log In</Heading>
          <form>
            <FormControl mt={3}>
              <FormLabel>Email</FormLabel>
              <Input type="email" variant="filled" />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Password</FormLabel>
              <Input type="password" variant="filled" />
            </FormControl>
            <Button colorScheme="green" mt={6} w="full">
              Register
            </Button>
          </form>
          <HStack mt={2} align="center">
            <Text as="span" fontSize="sm">
              Don't have an Account ?
            </Text>
            <Link
              as={RouterLink}
              to="/register"
              color="gray.500"
              fontWeight="semibold"
            >
              <Text>Register</Text>
            </Link>
          </HStack>
          <Box position="relative" my={10}>
            <Divider bg="gray.500" py="0.3" />
            <AbsoluteCenter bg="white" px="3">
              <Text fontWeight="bold" color="gray.400">
                OR
              </Text>
            </AbsoluteCenter>
          </Box>
          {/* Log-in with Google */}
          <Button leftIcon={<FcGoogle />} variant="solid" w="full">
            GOOGLE
          </Button>
        </Box>
      </Flex>
    </Center>
  );
};

export default Login;
