import React from "react";

export default function Badge(props) {
  return (
    <div className="achievement-badge">
      <div>{props.count}</div>
      <div>{props.name}</div>
    </div>
  );
}
