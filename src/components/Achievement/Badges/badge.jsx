import React from "react";

export default function Badge(props) {
  return (
    <div className="achievement-badge">
      <p>{props.count}</p>
      <span>{props.name}</span>
    </div>
  );
}
