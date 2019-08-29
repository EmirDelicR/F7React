import React from "react";
import { Icon } from "framework7-react";

export default function favorite(props) {
  return (
    <div className="favorite-container">
      <div>
        <Icon f7="star" size="24px"></Icon>
      </div>
      <div>{props.name}</div>
    </div>
  );
}
