import React from "react";

export default function GetStartedForm() {
  return (
    <div className="get-started">
      <input
        type="email"
        className="gs-email"
        name=""
        placeholder="Email Address"
        id=""
      />
      <button type="submit" className="gs-submit">
        Get Started
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}
