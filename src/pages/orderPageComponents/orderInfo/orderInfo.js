import Button from "../../mainComponents/standartButton";
import OrderOptions from "./priceList";
import "./orderInfo.scss";
import { Link } from "react-router-dom";
function OrderInfo(props) {
  const order = []; //массив с OrderOptions - деталями заказа, который составляет пользователь
  for (const [key, value] of Object.entries(props.order)) {
    //цикл через объект содержащий детали заказа
    order.push(<OrderOptions key={key} optionName={key} optionValue={value} />);
  }
  return (
    <div className="order_price">
      <h1>Ваш заказ:</h1>
      <div className="order_price_prices">
        <ul>{order}</ul>
      </div>
      <div className="order_price_final">
        <p>
          <span>Цена:</span> от 8 000 до 12 000
        </p>
      </div>
      <Link to={props.link}>
        <Button
          classes="order_price_next"
          pressed="order_price_next_pressed"
          msg={props.btnContent}
        />
      </Link>
    </div>
  );
}
export default OrderInfo;
