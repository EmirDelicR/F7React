import React, { useEffect } from "react";
import Chart from "chart.js";
import { stackedGraphOptions } from "./options";

export default function Stat(props) {
  useEffect(() => {
    const ctx = document.getElementById("stacked-chart").getContext("2d");
    const stackedChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [""],
        datasets: [
          {
            type: "bar",
            data: [props.graphData.data[0]],
            backgroundColor: "#76C6DE"
          },
          {
            type: "bar",
            backgroundColor: "#9ED7E8",
            data: [props.graphData.data[1]]
          },
          {
            type: "bar",
            backgroundColor: "#F1CE67",
            data: [props.graphData.data[2]]
          }
        ]
      },
      options: stackedGraphOptions
    });
  });

  return (
    <div className="stacked-graph-container">
      <canvas id="stacked-chart"></canvas>
    </div>
  );
}
