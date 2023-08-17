import { Stack, Stat, Text } from "@chakra-ui/react";
import Chart from "react-google-charts";

export const data = [
  ["Mon", "Hours per Day"],
  ["Tue", 11],
  ["Wed", 2],
  ["Thursday", 2],
  ["Friday", 2],
  ["Sat", 7],
  ["Sun", 7],
];

export const options = {
  is3D: true,
  animation: {
    startup: true,
    easing: "linear",
    duration: 1500,
  },
  enableInteractivity: true,
};

const ExpenseBreakdown = () => {
  return (
    <Stack>
      <Text fontWeight="bold">Expense Breakdown</Text>
      <Stat rounded="xl" overflow="hidden">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
        />
      </Stat>
    </Stack>
  );
};

export default ExpenseBreakdown;
