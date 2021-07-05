import { useState } from "react";
import Slide from "./sliderContent.js";
import bg1 from "./bg_pics/1.png";
import bg2 from "./bg_pics/2.png";
import bg3 from "./bg_pics/3.png";
import bg4 from "./bg_pics/4.png";
import "./slider.scss";

function Slider(props) {
  const slides = [bg1, bg2, bg3, bg4];
  return (
    <div className="slider">
      <div className="slider_content">
        {slides.map((slide, id) => (
          <Slide key={id + 1} content={slide} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
