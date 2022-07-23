import React from "react";
import mobile from "../assets/img/section2img-1.jpg";
import banner from "../assets/img/section2img-2.jpg";
import downloading from "../assets/img/download-icon.gif";

export default function Section2() {
  return (
    <div className="section section-2 bb-gray section-card">
      <div className="section-inner">
        <div className="video">
          <div className="video-home">
            <img width={450} src={mobile} alt="" style={{ zIndex: "0" }} />
          </div>
          <div className="left-bottom">
            <img src={banner} width={40} alt="Banner" />
            <div className="downloading">
              <h4>Stranger Things</h4>
              <span>Downloading...</span>
            </div>
            <div className="downloading-icon">
              <img src={downloading} width={50} alt="Downloading" />
            </div>
          </div>
          <div className="left-bottom-mobile">
            <div className="image-mobile">
              <img src={banner} width={20} height={190} alt="Banner" />
            </div>
            <div className="downloading">
              <h4>Stranger Things</h4>
              <span>Downloading...</span>
            </div>
            <div className="downloading-icon">
              <img
                src={downloading}
                width={20}
                height={190}
                alt="Downloading"
              />
            </div>
          </div>
        </div>
        <div className="section-card-text">
          <h1>Download your shows to watch offline.</h1>
          <h3>
            Save your favorites easily and always have something to watch.
          </h3>
        </div>
      </div>
    </div>
  );
}
