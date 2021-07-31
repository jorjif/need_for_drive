import { useState } from "react";
import classNames from "classnames";

export default function CarCard(props) {
  const [focused, changeFocus] = useState(false);
  const cardState = classNames({
    order_card: true,
    order_card_focused: focused,
  });
  return (
    <div className={cardState} onClick={() => changeFocus(!focused)}>
      <h1 className="order_card_name">{props.name}</h1>
      <p className="order_card_price">{props.price}</p>
      <img src={props.image} alt="Фото машины" className="order_card_image" />
    </div>
  );
}
