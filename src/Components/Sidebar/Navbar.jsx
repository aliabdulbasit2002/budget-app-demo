/* eslint-disable react/prop-types */
import { Box, Button, Flex } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { SiExpensify } from "react-icons/si";
import { PiPiggyBank } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const navBarItems = [
  {
    iconSrc: <AiOutlineHome />,
    title: "Dashboard",
    path: "/"
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

const Navbar = ({ handleLogout, isLoading }) => {
  return (
    <>
      <Flex
        direction="column"
        w="15vw"
        h="100vh"
        bg="green.700"
        color="whiteAlpha.900"
        fontWeight="bold"
        pt={10}
      >
        Dashboard
        <Box mx={{base: "0", xl: 5}} flex="1" mt={14}>
          {navBarItems.map((navBarItem, index) => (
            <Flex
              as={Link}
              // to={navBarItem.path}
              key={index}
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
