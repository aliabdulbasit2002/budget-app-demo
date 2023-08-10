import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Sidebar/Navbar";

const RootLayout = () => {
  return (
    <Container maxW="container" px={0} minH="100vh">
      <Grid templateColumns="repeat(12,1fr)">
        <GridItem colSpan={2}>
          <Navbar />
        </GridItem>
        <GridItem colSpan={10}>
          <Outlet />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default RootLayout;
