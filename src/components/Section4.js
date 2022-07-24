import React from "react";
import Kids from "../assets/img/section4img-1.png";

export default function Section2() {
  return (
    <div className="section section-4 bb-gray section-card">
      <div className="section-inner">
        <div className="video">
          <div className="video-home">
            <img width={450} src={Kids} alt="Kids" />
          </div>
        </div>
        <div className="section-card-text">
          <h1>Create profiles for kids.</h1>
          <h3>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h3>
        </div>
      </div>
    </div>
  );
}
