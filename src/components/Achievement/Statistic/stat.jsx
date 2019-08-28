import React from "react";

export default function Stat(props) {
  return (
    <div className="stat-container">
      <p>{props.week}</p>
      <p>{props.count}</p>
      <span>{props.name}</span>
    </div>
  );
}
