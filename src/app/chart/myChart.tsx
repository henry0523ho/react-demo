"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// 模擬數據
const data = [
  { date: "20240809", valueA: 4000, valueB: 2400, amt: 2400 },
  { date: "20240808", valueA: 3000, valueB: 1398, amt: 2210 },
  { date: "20240807", valueA: 2000, valueB: 9800, amt: 2290 },
  { date: "20240806", valueA: 2780, valueB: 3908, amt: 2000 },
  { date: "20240805", valueA: 1890, valueB: 4800, amt: 2181 },
  { date: "20240804", valueA: 2390, valueB: 3800, amt: 2500 },
  { date: "20240803", valueA: 3490, valueB: 4300, amt: 2100 },
];

const MyChart = () => {
  return (
    <div className="w-2/5 bg-secondary p-8 rounded-lg mt-6 text-center">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="valueB"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="valueA" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyChart;
