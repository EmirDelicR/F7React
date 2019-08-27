import React from "react";
import Statistic from "./Statistic/statistic";

export default function StatisticSegment() {
  return (
    <div className="achievement-statistic">
      <h5>ÜBERSICHT ÜBER DEINEN VERLAUF</h5>
      <Statistic name="EINSÄTZE" count="35" graphData="data" week="1W" />
    </div>
  );
}
