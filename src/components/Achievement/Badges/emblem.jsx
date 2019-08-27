import React from "react";

export default function Emblem(props) {
  return (
    <div className="achievement-emblem">
      <img src={props.emblem} alt="User emblem" />
    </div>
  );
}
