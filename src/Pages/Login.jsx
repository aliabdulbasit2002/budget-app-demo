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
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../Config/firebase";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../images/login.jpg";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = login;
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(login);
    setIsLoading(true);
    try {
      await signIn(email, password);

      setLogin({
        email: "",
        password: "",
      });
      toast({
        description: "Successfully Logged-in",
        duration: 3000,
        status: "success",
        colorScheme: "green",
      });
    } catch (error) {
      toast({
        description: "User Not Found",
        duration: 3000,
        status: "error",
        colorScheme: "red",
      });
      setError(true);
    }
    setIsLoading(false);
    navigate({ pathname: "/" });
  };

  return (
    <Center minH="100vh" py={{ base: 3, md: 0 }} bg="green.400">
      <VStack>
        <Heading>Budget Expense Tracker</Heading>
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
            {error && (
              <Text color="red.400" fontWeight="semibold">
                An Error has Occurred
              </Text>
            )}
            <form onSubmit={handleSubmit}>
              <FormControl mt={3}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  variant="filled"
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={3}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  variant="filled"
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="green"
                mt={6}
                w="full"
                isLoading={isLoading}
              >
                Log In
              </Button>
            </form>
            <HStack mt={2} align="center">
              <Text as="span" fontSize="sm">
                {"Don't have an Account ?"}
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
      </VStack>
    </Center>
  );
};

export default Login;
