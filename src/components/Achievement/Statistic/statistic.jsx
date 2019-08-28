import React from "react";
import Stat from "../Statistic/stat";
import LineGraph from "../../Graphs/line";

export default function Statistic(props) {
  return (
    <div className="statistic-container">
      <div>
        <Stat name={props.name} count={props.count} week={props.week} />
      </div>

      <div>
        <div className="text-right">{props.count}</div>
        <div>
          <LineGraph graphData={props.graphData} id={props.graphId} />
        </div>
      </div>
    </div>
  );
}
