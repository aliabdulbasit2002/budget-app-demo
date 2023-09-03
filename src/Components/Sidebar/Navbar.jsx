/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Tooltip,
  useDisclosure,
  useToast,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { SiExpensify } from "react-icons/si";
import { PiPiggyBank } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { logout, useAuth } from "../../Config/firebase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation } from "react-router-dom";

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
    title: "Budgets",
    path: "budgets",
  },
  {
    iconSrc: <RiMessage2Line />,
    title: "Help & Support",
    path: "support",
  },
];

function Account() {
  const currentUser = useAuth();

  return (
    <Flex ms="auto" align="center" gap={3}>
      <FaRegUserCircle fontSize="2.5rem" />
      <Box fontSize="xs">
        <Text>{currentUser?.email}</Text>
        <Text color="green.500" fontWeight="semibold">
          {currentUser?.displayName ? currentUser?.displayName : "User"}
        </Text>
      </Box>
    </Flex>
  );
}

function SearchBar({ handleSearch }) {
  return (
    <InputGroup w="full" ms="auto">
      <InputRightElement pointerEvents="none">
        <AiOutlineSearch />
      </InputRightElement>
      <Input
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        _focusWithin={{ borderColor: "green", boxShadow: "none" }}
        bg="whiteAlpha.900"
      />
    </InputGroup>
  );
}

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
  const location = useLocation();

  const routeName = location.pathname
    .split("/")
    .pop()
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <>
      <Flex align="center" p={5}>
        <Tooltip label="menu" hasArrow>
          <Button
            ref={btnRef}
            bg="transparent"
            _hover={{ bg: "#0062ff22" }}
            onClick={onOpen}
          >
            <HiMenuAlt3 fontSize="2rem" color="limegreen" />
          </Button>
        </Tooltip>
        <Flex mx="auto" w="75%" >
          <Text fontSize="2xl" fontWeight="bold" display={{base: "none", lg: "inline-block"}}>
            {location.pathname === "/" ? "Dashboard" : routeName}
          </Text>
          <Flex w="80%" ms="auto">
            <SearchBar />
          </Flex>
        </Flex>
        <Account />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: "full", lg: "xs" }}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="whatsapp.700" pt={10} px={2}>
          <DrawerCloseButton color="white" fontSize="xl" mt={14} me={3}/>
          <DrawerHeader color="yellow.300" fontSize="3xl" fontFamily="cursive">Budget Buddy</DrawerHeader>
          <DrawerBody mt={10}>
            {navBarItems.map((navBarItem) => (
              <Flex
                as={Link}
                to={navBarItem.path}
                key={navBarItem.title}
                align="center"
                gap={3}
                onClick={onClose}
                _hover={{ backgroundColor: "#ffffff30" }}
                mt={5}
                p={2}
                fontSize="xl"
                borderRadius={4}
                transition="all 300ms ease-in-out"
                color="white"
              >
                <Box color="yellow.300">{navBarItem.iconSrc}</Box>
                {navBarItem.title}
              </Flex>
            ))}
          </DrawerBody>
          <DrawerFooter>
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
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
