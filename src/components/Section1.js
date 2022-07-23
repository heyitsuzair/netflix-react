import React from "react";
import tv from "../assets/img/tv.png";
import video from "../assets/videos/video1.mp4";

export default function Section1() {
  return (
    <div className="section bb-gray section-card">
      <div className="section-inner">
        <div className="section-card-text">
          <h1>Enjoy On Your TV.</h1>
          <h3>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <div>
          <div className="video-home">
            <img width={450} src={tv} alt="" />
            <video width="357" autoPlay playsInline loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
