import React from "react";
import Badge from "../Badges/badge";

export default function Stat(props) {
  return (
    <div className="stat-container">
      <p>{props.week}</p>
      <Badge name={props.name} count={props.count} />
    </div>
  );
}
