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
  title: "Expense Breakdown",
  pieHole: 0.4,
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
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="600px"
    />
  );
};

export default ExpenseBreakdown;
