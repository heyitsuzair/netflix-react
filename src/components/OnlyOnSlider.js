import React from "react";
import Carousel from "./categories/Carousel";

export default function OnlyOnSlider({ setProgress }) {
  return (
    <div className="onlyon-sec">
      <div className="onlyon-slider-inner">
        <Carousel title="Action" setProgress={setProgress} cat_id={28} />
      </div>
    </div>
  );
}
