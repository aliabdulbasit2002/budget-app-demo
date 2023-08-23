/* eslint-disable no-unused-vars */
import { Stack, Stat, Text } from "@chakra-ui/react";
import React from "react";
import Chart from "react-google-charts";
import { useSelector } from "react-redux";

// Function to get the ISO week number of a date
function getWeekNumber(date) {
  const target = new Date(date.getTime());
  target.setHours(0, 0, 0, 0);
  target.setDate(target.getDate() + 3 - ((target.getDay() + 6) % 7));
  const week1 = new Date(target.getFullYear(), 0, 4);

  return (
    1 +
    Math.round(
      ((target - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7
    )
  );
}

const WeeklyChart = () => {
  const budgetArray = useSelector((state) => state.appReducer.budget);

  // Create an empty object to store weekly data
  const weeklyData = {};

  // Iterate through each budget and accumulate data by week
  budgetArray.forEach((budget) => {
    const startDate = new Date(budget.startDate);
    const weekNumber = getWeekNumber(startDate); // Implement getWeekNumber function

    if (!weeklyData[weekNumber]) {
      weeklyData[weekNumber] = {
        budgetTotal: 0,
        expenseTotal: 0,
      };
    }

    weeklyData[weekNumber].budgetTotal += parseFloat(budget.amount);
    weeklyData[weekNumber].expenseTotal += parseFloat(budget.finance);
  });

  // Create the data array for the chart
  const data = [["Week", "Budget Amount", "Expense Amount"]];
  Object.entries(weeklyData).forEach(
    ([weekNumber, { budgetTotal, expenseTotal }]) => {
      data.push([`Week ${weekNumber}`, budgetTotal, expenseTotal]);
    }
  );

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

export default WeeklyChart;
