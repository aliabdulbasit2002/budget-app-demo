import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../Components/Sidebar/Navbar";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ExpenseBreakdown from "../Components/ExpenseBreakdown";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Container maxW="container" px={0} minH="100vh">
      <Outlet />
    </Container>
  );
};

export default RootLayout;
