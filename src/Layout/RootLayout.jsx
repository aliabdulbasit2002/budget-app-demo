import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Container maxW="container" px={0} minH="100vh">
      <Outlet />
    </Container>
  );
};

export default RootLayout;
