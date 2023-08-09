import { Container } from "@chakra-ui/react";
import Navbar from "../Components/Sidebar/Navbar";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const RootLayout = () => {
  return (
    <Container maxW="container" px={0}>
      {/* <Navbar /> */}
      <Login />
      {/* <Register /> */}
    </Container>
  );
};

export default RootLayout;
