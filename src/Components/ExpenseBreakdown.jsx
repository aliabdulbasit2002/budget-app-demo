import { Stack, Stat, Text } from "@chakra-ui/react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";



const ExpenseBreakdown = () => {
  const budgetArray = useSelector((state) => state.appReducer.budget);

  // Create an empty object to store expense breakdown data
  const expenseData = {};

  // Iterate through each budget and accumulate expense data
  budgetArray.forEach((budget) => {
    if (!expenseData[budget.name]) {
      expenseData[budget.name] = 0;
    }

    expenseData[budget.name] += parseFloat(budget.finance);
  });

  // Create the data array for the chart
  const data = [["Budget Name", "Expense Amount"]];
  Object.entries(expenseData).forEach(([budgetName, expenseAmount]) => {
    data.push([budgetName, expenseAmount]);
  });

  const options = {
    is3D: true,
    animation: {
      startup: true,
      easing: "linear",
      duration: 1500,
    },
    enableInteractivity: true,
  };

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