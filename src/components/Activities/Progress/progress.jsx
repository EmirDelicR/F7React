import React from "react";
import ProgressBar from "./progress-bar";
import Favorite from "./favorite";

export default function progress() {
  return (
    <div className="progress-container">
      <h4>Status</h4>
      <div className="status">
        <span>Pflicht 144h</span>
        <span>
          Du hast noch <b>4h</b> offen.
        </span>
      </div>

      <div className="progress-bar-wrap">
        <ProgressBar />
      </div>

      <div className="favorite">
        <Favorite name="115 h" />
        <Favorite name="Ort" />
        <Favorite name="Transporte" />
        <Favorite name="Einsatzart" />
      </div>
    </div>
  );
}
