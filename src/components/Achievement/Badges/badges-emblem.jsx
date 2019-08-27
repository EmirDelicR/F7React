import React from "react";
import Emblem from "./emblem";
import { Button, Icon } from "framework7-react";
export default function BadgesEmblem() {
  return (
    <div className="achievement-emblems">
      <h5>AKTUELLE BADGES</h5>
      <div className="emblem-container">
        <Emblem emblem="/img.png" />
        <Emblem emblem="/img.png" />
        <Emblem emblem="/img.png" />
        <Button>
          <Icon f7="home" size="14px" color="blue"></Icon>
        </Button>
      </div>
    </div>
  );
}
