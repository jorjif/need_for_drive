import React from "react";
import Button from "../standartButton";
import "./slider.scss";
function Slide(props) {
  const bg = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('${props.content}')`;
  return (
    <div
      className="slide"
      style={{
        backgroundImage: bg,
        mixBlendMode: "normal",
      }}
    >
      <h2>{props.header}</h2>
      <p>{props.para}</p>
      <Button msg="Подробнее" classes={props.btn} pressed={props.click} />
    </div>
  );
}
export default Slide;
