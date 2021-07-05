import React from "react";
import "./slider.scss";
function Slide(props) {
  return (
    <div
      className="slide"
      style={{ backgroundImage: `url('${props.content}')` }}
    ></div>
  );
}
export default Slide;
