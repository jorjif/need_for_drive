import { useState } from "react";
import React from "react";
import classNames from "classnames";
//это кнопка,  которая меняет цвет при нажатии и наведении
function Button(props) {
  const [pressed, setPressed] = useState(false);
  const btnClass = classNames({
    button: true,
    [`${props.classes}`]: props.classes, // получает аргументом класс, обычно содержит цвет
    [`${props.pressed}`]: pressed, //получает аргументом класс, меняющий при нажатии цвет
    //!важно для изменения цвета надо перекрыть значение в :hover, просто background не сработает
  });
  //она получает значение внури в качестве аргумента msg
  return (
    <button
      className={btnClass}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={props.onClick}
    >
      {props.msg}
    </button>
  );
}

export default Button;
