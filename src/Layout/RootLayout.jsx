/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Sidebar/Navbar";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

function Account() {
  return (
    <Flex ms="auto" align="center" gap={3}>
      <FaRegUserCircle fontSize="2.5rem" />
      <Box fontSize="xs">
        <Text>Test User</Text>
        <Text color="green.500" fontWeight="semibold">
          Admin
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
      />
    </InputGroup>
  );
}

const RootLayout = () => {
  return (
    <Container maxW="container" px={0} minH="100vh">
      <Grid templateColumns="repeat(12,1fr)">
        <GridItem colSpan={2}>
          <Navbar />
        </GridItem>
        <GridItem colSpan={10} p={6} bg="gray.100">
          <Flex align="center">
            <Text fontSize="2xl" fontWeight="bold">
              Dashboard
            </Text>
            <SearchBar />
            <Account />
          </Flex>
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default RootLayout;
