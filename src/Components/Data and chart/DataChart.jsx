import { Stat } from "@chakra-ui/react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";

const DataChart = () => {
  const budgetArray = useSelector((state) => state.appReducer.budget);

  // Create an empty object to store monthly data
  const monthlyData = {};

  // Iterate through each budget and accumulate data
  budgetArray.forEach((budget) => {
    const startDate = new Date(budget.startDate);
    const monthName = startDate.toLocaleString("default", { month: "long" });

    if (!monthlyData[monthName]) {
      monthlyData[monthName] = {
        budgetTotal: 0,
        expenseTotal: 0,
      };
    }

    monthlyData[monthName].budgetTotal += parseFloat(budget.amount);
    monthlyData[monthName].expenseTotal += parseFloat(budget.finance);
  });

  // Create the data array for the chart
  const data = [["Month", "Budget Amount", "Expense Amount"]];
  Object.entries(monthlyData).forEach(([monthName, { budgetTotal, expenseTotal }]) => {
    data.push([monthName, budgetTotal, expenseTotal]);
  });

  const options = {
    enableInteractivity: false,
    height: 450,
    width: "100%"
  };

  return (
    <Stat rounded="xl" overflow="hidden">
      <Chart
        chartType="ColumnChart"
        data={data}
        options={options}
      />
    </Stat>
  );
};

export default DataChart;

