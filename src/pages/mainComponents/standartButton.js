import { useState } from "react";
import React from "react";
import classNames from "classnames";

function Button(props) {
  const [pressed, setPressed] = useState(false);
  const btnClass = classNames({
    button: true,
    [`${props.classes}`]: props.classes,
    [`${props.pressed}`]: pressed,
  });
  return (
    <button
      className={btnClass}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {props.msg}
    </button>
  );
}

export default Button;
