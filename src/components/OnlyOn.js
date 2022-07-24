import React from "react";

import logo from "../assets/img/logo-2.png";

export default function OnlyOn() {
  return (
    <div>
      <navbar className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Netflix" width={100} />
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
