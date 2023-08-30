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
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { db, signUp } from "../Config/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";
import registerImg from "../images/register.jpg";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { firstName, lastName, email, password } = registerUser;
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(registerUser);
    setIsLoading(true);
    try {
      const res = await signUp(email, password);
      setDoc(doc(db, "users", res.user.uid), {
        ...registerUser,
        timeStamp: serverTimestamp(),
        subscription: false,
      });
      setRegisterUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      toast({
        description: "Successfully Registered",
        duration: 3000,
        status: "success",
        colorScheme: "green",
      });
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
    navigate({ pathname: "/" });
  };

  return (
    <Center minH="100vh" bg="green.400">
      <Flex
        maxW="800px"
        h={{ base: "auto", md: "600px" }}
        px={3}
        justify="center"
      >
        <Img
          src={registerImg}
          w={{ base: 0, md: "50%" }}
          pos="center"
          display={{ base: "none", md: "block" }}
        />
        <Box w={{ base: "100%", md: "50%" }} bg="white" p={8}>
          <Heading textAlign="center">Register</Heading>
          {error && (
            <Text color="red.400" fontWeight="semibold">
              An Error has Occured
            </Text>
          )}
          <form onSubmit={handleSubmit}>
            <HStack mt={4}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  name="firstName"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  name="lastName"
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>
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
              isDisabled={!firstName || !lastName || !email || !password}
            >
              Register
            </Button>
          </form>
          <HStack mt={2} align="center">
            <Text as="span" fontSize="sm">
              Already have an Account ?
            </Text>
            <Link
              as={RouterLink}
              to="/login"
              color="gray.500"
              fontWeight="semibold"
            >
              <Text>log In</Text>
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

export default Register;
