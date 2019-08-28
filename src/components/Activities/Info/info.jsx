import React from "react";
import { Fab, Icon } from "framework7-react";

export default function info() {
  return (
    <div className="info-container">
      <p>Hier wäre noch Platz für Zusatzinfo-</p>
      <p>haben wir hier noch Infos - wenn ja,</p>
      <p>welche wären spannend?</p>
      <Fab position="right-bottom" slot="fixed" color="green">
        <Icon ios="f7:add" aurora="f7:add" md="material:add"></Icon>
        <Icon ios="f7:close" aurora="f7:close" md="material:close"></Icon>
      </Fab>
    </div>
  );
}
