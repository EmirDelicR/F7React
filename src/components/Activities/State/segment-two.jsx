import React from "react";
import BarGraph from "../../Graphs/bar";

export default function SegmentTwo() {
  const firstGraphData = {
    data: [5, 4, 4, 6, 3, 7, 6],
    labels: ["30.07", "", "01.08", "", "03.08", "", "03.08"]
  };

  return (
    <div className="segment-two-container">
      <BarGraph graphData={firstGraphData} />
      <div className="segment-two-control">
        <button className="active" onClick={() => handleClick()}>
          1 W
        </button>
        <button onClick={() => handleClick()}>2 W</button>
        <button onClick={() => handleClick()}>1 M</button>
        <button onClick={() => handleClick()}>1 J</button>
      </div>
    </div>
  );
}

const handleClick = () => {
  let activeButton = document.querySelector(".active");
  activeButton.classList.remove("active");
  event.target.classList.add("active");
};
