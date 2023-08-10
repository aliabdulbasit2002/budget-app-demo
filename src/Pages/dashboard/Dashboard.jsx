import { Grid, GridItem, useToast } from "@chakra-ui/react";
import Navbar from "../../Components/Sidebar/Navbar";

const Dashboard = () => {
  return (
    <Grid templateColumns="repeat(12,1fr)">
      <GridItem>
        <Navbar />
      </GridItem>
      Dashboard
    </Grid>
  );
};

export default Dashboard;
