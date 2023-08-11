/* eslint-disable react/prop-types */
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { SiExpensify } from "react-icons/si";
import { PiPiggyBank } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { logout } from "../../Config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navBarItems = [
  {
    iconSrc: <AiOutlineHome />,
    title: "Dashboard",
    path: "/",
  },
  {
    iconSrc: <SiExpensify />,
    title: "Expenses",
    path: "expenses",
  },
  {
    iconSrc: <PiPiggyBank />,
    title: "Budget",
    path: "budget",
  },
  {
    iconSrc: <RiMessage2Line />,
    title: "Help & Support",
  },
];

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      setIsLoading(false);
      toast({
        description: "successfully logged-out",
        status: "success",
        duration: 4000,
        colorScheme: "green",
      });
      navigate({ pathname: "/login" });
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 4000,
      });
    }
  };
  return (
    <>
      <Flex
        direction="column"
        h="100vh"
        bg="green.700"
        color="whiteAlpha.900"
        fontWeight="semibold"
        pt={10}
      >
        Dashboard
        <Box mx={{ base: "0", xl: 5 }} flex="1" mt={14}>
          {navBarItems.map((navBarItem) => (
            <Flex
              as={Link}
              to={navBarItem.path}
              key={navBarItem.title}
              align="center"
              gap={3}
              _hover={{ backgroundColor: "#ffffff30" }}
              mt={2}
              p={2}
              borderRadius={4}
              transition="all 300ms ease-in-out"
            >
              {navBarItem.iconSrc}
              {navBarItem.title}
            </Flex>
          ))}
        </Box>
        <Button
          onClick={handleLogout}
          colorScheme="green"
          w="80%"
          mx="auto"
          mb={2}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
