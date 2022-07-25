import React from "react";
import logo2 from "./img/favicon.ico";

export default function AllYouWant() {
  return (
    <div className="all-you-want">
      <div className="want-text">
        <img src={logo2} alt="Netflix" width={30} />
        <span>Watch all you want.</span>
      </div>
      <div className="want-btn">
        <a href="/" id="join-now">
          Join Now
        </a>
      </div>
    </div>
  );
}
