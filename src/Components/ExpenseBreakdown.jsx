import { Flex, Stack, Stat, Text } from "@chakra-ui/react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";

const ExpenseBreakdown = () => {
  const budgetArray = useSelector((state) => state.appReducer.budget);

  // Create an empty object to store expense breakdown data
  const expenseData = {};

  var totalExpense = 0;

  // Iterate through each budget and accumulate expense data
  budgetArray.forEach((budget) => {
    if (!expenseData[budget.name]) {
      expenseData[budget.name] = 0;
    }

    totalExpense += parseFloat(budget.finance);
    expenseData[budget.name] += parseFloat(budget.finance);
    return totalExpense;
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
        {totalExpense === 0 ? (
          <Flex
            justify="center"
            fontSize="sm"
            alignItems="center"
            h="200px"
            bg="whiteAlpha.900"
            color="gray.500"
          >
            Pie chart data of expenses will show here
          </Flex>
        ) : (
          <Chart chartType="PieChart" data={data} options={options} />
        )}
      </Stat>
    </Stack>
  );
};

export default ExpenseBreakdown;
