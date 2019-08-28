import React from "react";
import Emblem from "./emblem";
import { Button, Icon } from "framework7-react";
import user from "../../../static/me.png";

export default function BadgesEmblem() {
  return (
    <div className="achievement-emblems">
      <h4>AKTUELLE BADGES</h4>
      <div className="emblem-container">
        <Emblem emblem={user} />
        <Emblem emblem={user} />
        <Emblem emblem={user} />

        <div className="emblem-view-more">
          <div>
            <Icon f7="menu" size="36px" color="white"></Icon>
          </div>
          <div>ALLE ANSEHEN</div>
        </div>
      </div>
    </div>
  );
}
