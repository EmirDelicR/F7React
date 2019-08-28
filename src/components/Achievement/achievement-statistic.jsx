import React from "react";
import Statistic from "./Statistic/statistic";

export default function StatisticSegment() {
  const firstGraphData = {
    data: [5, 4, 4, 6, 3, 7, 6],
    labels: ["01.07", "", "", "04.07", "", "", "08.07"]
  };

  const secondGraphData = {
    data: [6, 4, 5, 4, 3, 3, 6, 5],
    labels: ["Mai", "", "", "", "", "", "", "September"]
  };

  return (
    <div className="achievement-statistic">
      <h5>ÜBERSICHT ÜBER DEINEN VERLAUF</h5>
      <Statistic
        name="EINSÄTZE"
        count="35"
        graphData={firstGraphData}
        week="1W"
        graphId="line-graph-1"
        count="+2"
      />
      <Statistic
        name="WEITER BILDUNG"
        count="7"
        graphData={secondGraphData}
        week="1J"
        graphId="line-graph-2"
        count="+4"
      />
    </div>
  );
}
