import React from "react";

export default function Badge(props) {
  return (
    <div className="badge">
      <img src={props.src} alt="User badge" />
    </div>
  );
}
