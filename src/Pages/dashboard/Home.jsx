import { Grid, GridItem, HStack } from "@chakra-ui/react";
import TotalExpence from "../../Components/Data and chart/TotalExpence";
import TotalBudget from "../../Components/Data and chart/TotalBudget";
import ExpenseBreakdown from "../../Components/ExpenseBreakdown";
import DataChart from "../../components/Data and chart/DataChart";

const Home = () => {
  return (
    <Grid templateColumns="repeat(12,1fr)" mt={10} py={5} columnGap={{md: "8", xl: "10"}}>
      <GridItem colSpan={7}>
        <HStack mb={6} gap={6}>
          <TotalExpence />
          <TotalBudget />
        </HStack>
        <DataChart />
      </GridItem>
      <GridItem colSpan={5}>
        <ExpenseBreakdown />
      </GridItem>
    </Grid>
  );
};

export default Home;
