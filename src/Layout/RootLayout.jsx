import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../Components/Sidebar/Navbar";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import ExpenseBreakdown from "../Components/ExpenseBreakdown";

const RootLayout = () => {
  return (
    <Container maxW="container" px={0} minH="100vh" bg="gray.500">
      <Grid templateColumns="repeat(12,1fr)" p={2}>
        <GridItem colSpan={3}>
          <Navbar />
        </GridItem>
        <GridItem colSpan={6}>
          <Dashboard />
        </GridItem>
        <GridItem colSpan={3}>
          <ExpenseBreakdown />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default RootLayout;
