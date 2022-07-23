import React from "react";
import logo from "../assets/img/logo-2.png";
import GetStartedForm from "./GetStartedForm";
export default function Hero() {
  return (
    <div className="Hero bb-gray">
      <navbar className="navbar">
        <div className="nav-item">
          <img src={logo} alt="Netflix" width={120} />
          <a id="signin" className="authLinks" href="/">
            Sign In
          </a>
        </div>
      </navbar>
      <div className="hero-inner">
        <h1>Unlimited movies, TV</h1>
        <h1 id="second-h2">
          <span>shows, and more.</span>
        </h1>
        <h3>Watch Anywhere, Cancel Anytime</h3>
        <h5>
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <GetStartedForm />
      </div>
      <div className="overlay"></div>
    </div>
  );
}
