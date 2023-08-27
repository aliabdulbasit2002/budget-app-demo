/* eslint-disable react/prop-types */
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Sidebar/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useAuth } from "../Config/firebase";

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
    <InputGroup w="50%" mx="auto">
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

const RootLayout = () => {
  const location = useLocation();

  const routeName = location.pathname
    .split("/")
    .pop()
    .replace(/^\w/, (c) => c.toUpperCase());

  return (
    <Stack maxW="container" px={0} h="100vh" overflow="hidden">
      <Grid templateColumns="repeat(12,1fr)">
        <GridItem colSpan={2}>
          <Navbar />
        </GridItem>
        <GridItem colSpan={10} p={6} bg="gray.200">
          <Flex align="center">
            <Text fontSize="2xl" fontWeight="bold">
              {location.pathname === "/" ? "Dashboard" : routeName}
            </Text>
            <SearchBar />
            <Account />
          </Flex>
          <Outlet />
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default RootLayout;
