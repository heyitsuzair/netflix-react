import React from "react";

import logo from "../assets/img/logo-2.png";
import logo2 from "../assets/img/favicon.ico";
import OnlyOn1 from "./OnlyOn1";
import OnlyOnSlider from "./OnlyOnSlider";

export default function OnlyOn({ setProgress }) {
  return (
    <div className="onlyOn">
      <navbar className="navbar-2">
        <div className="nav-logo">
          <img src={logo} alt="Netflix" id="logo1" width={100} />
          <img src={logo2} alt="Netflix" id="logo2" width={30} />
        </div>
        <div className="nav-right">
          <p>Unlimited TV Shows & Movies</p>
          <a href="/" id="join-now">
            Join Now
          </a>
          <a href="/" id="sign-in-only">
            Sign In
          </a>
        </div>
      </navbar>
      <div className="onlyon-content">
        <OnlyOn1 />
        <OnlyOnSlider setProgress={setProgress} />
      </div>
    </div>
  );
}
