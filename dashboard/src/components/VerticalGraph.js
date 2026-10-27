import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Chart Configuration Options
export const options = {
  responsive: true,
  maintainAspectRatio: false, // Prevents canvas from scaling infinitely or hiding
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings Stock Prices",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div style={{ height: "300px", width: "100%", marginTop: "20px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}

// Added default export as fallback
export default VerticalGraph;