import React, { useEffect } from "react";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { barGraphOptions } from "./options";

export default function Stat(props) {
  useEffect(() => {
    const ctx = document.getElementById("bar-chart").getContext("2d");

    const barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: props.graphData.labels,
        datasets: [
          {
            data: props.graphData.data,
            backgroundColor: "#76C6DE"
          }
        ]
      },
      options: barGraphOptions
    });
  });

  return (
    <div className="bar-graph-container">
      <canvas id="bar-chart"></canvas>
    </div>
  );
}
