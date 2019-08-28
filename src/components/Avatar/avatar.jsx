import React from "react";
import user from "../../static/me.png";

export default function Avatar() {
  return (
    <div className="Avatar">
      <img src={user} alt="User avatar" />
    </div>
  );
}
