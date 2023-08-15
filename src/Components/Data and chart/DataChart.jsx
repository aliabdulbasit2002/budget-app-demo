import Chart from "react-google-charts";

export const data = [
  ["Element", "Density", { role: "style" }],
  ["Mon", 8.94, "color: #25d41b"],
  ["Wed", 9.3, "color: #25d41b"],
  ["Thur", 11.45, "color: #25d41b"],
  ["Fri", 3.45, "color: #25d41b"],
  ["Sat", 1.45, "color: #25d41b"],
  ["Sun", 21.45, "color: #25d41b"],
];

export const options = {
  animation: {
    startup: true,
    easing: "linear",
    duration: 1500,
  },
  enableInteractivity: false,
};

const DataChart = () => {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="450px"
      data={data}
      options={options}
    />
  );
};

export default DataChart;
