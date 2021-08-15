import { useState } from "react";
import classNames from "classnames";

export default function CarCard({ name, price, image }) {
  const [focused, changeFocus] = useState(false);
  const cardState = classNames({
    order_card: true,
    order_card_focused: focused,
  });
  return (
    <div className={cardState} onClick={() => changeFocus(!focused)}>
      <h1 className="order_card_name">{name}</h1>
      <p className="order_card_price">{price}</p>
      <img src={image} alt="Фото машины" className="order_card_image" />
    </div>
  );
}
