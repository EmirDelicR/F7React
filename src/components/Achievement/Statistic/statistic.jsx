import React from "react";
import Stat from "../Statistic/stat";

export default function Statistic(props) {
  return (
    <div className="statistic-container">
      <Stat name={props.name} count={props.count} week={props.week} />
      {/* <Graph graphData={props.graphData} /> */}
    </div>
  );
}
