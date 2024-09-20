import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices2.map((price) => convertDate(price[0])),
      datasets: [
        {
          type: "line",
          label: "crypto1",
          data: prices1.map((price) => price[1]),
          borderColor: "#ddda1b",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          type: "line",
          label: "crypto2",
          data: prices2.map((price) => price[1]),
          borderColor: "#61c96f",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          type: "line",
          label: "Chart",
          data: prices1.map((price) => price[1]),
          borderColor: "#ddda1b",
          backgroundColor: "rgba(255, 255, 102, 0.8)",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
