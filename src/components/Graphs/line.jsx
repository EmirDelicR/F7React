import React, { useEffect } from "react";
import Chart from "chart.js";
import { lineGraphOptions, lineGraphDataSet } from "./options";

export default function Stat(props) {
  useEffect(() => {
    const ctx = document.getElementById(props.id).getContext("2d");
    let gradientFill = ctx.createLinearGradient(0, 0, 0, 80);
    gradientFill.addColorStop(0, "#A4D9E9");
    gradientFill.addColorStop(1, "white");

    lineGraphDataSet.backgroundColor = gradientFill;
    lineGraphDataSet.data = props.graphData.data;

    const lineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: props.graphData.labels,
        datasets: [lineGraphDataSet]
      },
      options: lineGraphOptions
    });
  });

  return (
    <div className="line-graph-container">
      <canvas id={props.id}></canvas>
    </div>
  );
}
