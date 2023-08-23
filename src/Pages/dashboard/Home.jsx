import {
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import ExpenseBreakdown from "../../Components/ExpenseBreakdown";
import DataChart from "../../components/Data and chart/DataChart";
import TotalExpence from "../../components/Data and chart/TotalExpence";
import TotalBudget from "../../components/Data and chart/TotalBudget";
import ExpenseHistory from "../../components/ExpenseHistory";
import WeeklyChart from "../../components/Data and chart/WeeklyChart";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderChart = () => {
    if (activeTab === "Monthly") {
      return <DataChart />;
    } else if (activeTab === "Weekly") {
      return <WeeklyChart />;
    }
    // Add additional cases for other tabs if needed
  };
  return (
    <Grid
      templateColumns="repeat(12,1fr)"
      mt={10}
      py={5}
      columnGap={{ md: "8", xl: "10" }}
    >
      <GridItem colSpan={7}>
        <HStack mb={6} gap={6} mt={6}>
          <TotalExpence />
          <TotalBudget />
        </HStack>
        <HStack mb={6} gap={6}>
          <Text
            fontWeight="bold"
            color={activeTab === "Monthly" ? "green.500" : "black"}
            borderBottom={activeTab === "Monthly" ? "1px solid": "1px solid transparent"}
            cursor="pointer"
            onClick={() => handleTabChange("Monthly")}
          >
            Monthly
          </Text>
          <Text
            fontWeight="bold"
            color={activeTab === "Weekly" ? "green.500" : "black"}
            borderBottom={activeTab === "Weekly" ? "1px solid": "1px solid transparent"}
            cursor="pointer"
            onClick={() => handleTabChange("Weekly")}
          >
            Weekly
          </Text>
        </HStack>
        {renderChart()}
      </GridItem>
      <GridItem colSpan={5}>
        <ExpenseBreakdown />
        <ExpenseHistory />
      </GridItem>
    </Grid>
  );
};

export default Home;
