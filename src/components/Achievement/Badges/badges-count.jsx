import React from "react";
import Badge from "./badge";

export default function BadgesCount() {
  return (
    <div className="achievement-count">
      <h5>ÜBERSICHT</h5>
      <div className="badges-container">
        <Badge name="EINSÄTZE" count="35" />
        <Badge name="TÄTIGKEITEN" count="75" />
        <Badge name="PERSONEN" count="+4" />
        <Badge name="WEITERBILDUNG" count="+4" />
      </div>
    </div>
  );
}
