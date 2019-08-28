import React from "react";
import StackedGraph from "../../Graphs/stacked";

export default function SegmentThree() {
  const graphData = {
    data: [6, 5, 2]
  };

  return (
    <div className="segment-three-container">
      <h2>Montag, 30.06.2019</h2>
      <h4>13h, 5 Tätigkeiten</h4>
      <div className="graph-segment">
        <div>
          <StackedGraph graphData={graphData} />
        </div>
        <div>
          <p style={calculatePadding(graphData.data[2])}>RK Tätigkeit</p>
          <p style={calculatePadding(graphData.data[1])}>Weiterbildung, FFOÖ</p>
          <p style={calculatePadding(graphData.data[0])}>FF Einsatz</p>
        </div>
      </div>
    </div>
  );
}

const calculatePadding = size => {
  return { paddingTop: size / 3 + "rem" };
};
