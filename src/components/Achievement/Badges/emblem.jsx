import React from "react";

export default function Emblem(props) {
  return (
    <div className="achievement-emblem">
      <div className="achievement-emblem-inner">
        <img src={props.emblem} alt="User emblem" />
      </div>
    </div>
  );
}
