import React from "react";

import logo from "../assets/img/logo-2.png";
import logo2 from "../assets/img/favicon.ico";

export default function OnlyOn() {
  return (
    <div>
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
    </div>
  );
}
