import React from "react";

export default function progressBar() {
  const data = 50;

  return (
    <div className="progress-bar">
      <div style={setProgressWidth(data)} className="progress"></div>
    </div>
  );
}
const setProgressWidth = size => {
  return { width: size * 1.1 + "%" };
};
