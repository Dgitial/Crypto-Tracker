import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // For the x-axis with categories
  LinearScale, // For the y-axis with numerical values
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { convertNumber } from "../../../../functions/convertNumbers";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ chartData, priceType, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType == "prices") {
              return "$" + value.toLocaleString();
            } else {
              return "$" + convertNumber(value);
            }
          },
        },
      },
      crypto2: {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value, index, ticks) {
            if (priceType == "prices") {
              return "$" + value.toLocaleString();
            } else {
              return "$" + convertNumber(value);
            }
          },
        },
      },
    },
  };

  return (
    // Render the Line chart with the data passed as a prop
    <Line data={chartData} options={options} />
  );
}

export default LineChart;
