import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartComponent = ({ data }) => {
  return (
    <>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis ticks={[""]} />
        <YAxis ticks={[1, 5, 10, 15]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="data"
          stroke="#f00"
          activeDot={{ r: 10 }}
        />
      </LineChart>
    </>
  );
};

export default LineChartComponent;
