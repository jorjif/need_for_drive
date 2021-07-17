import Button from "../../mainComponents/standartButton";
import OrderOptions from "./priceList";
import "./orderInfo.scss";
import { Link } from "react-router-dom";
function OrderInfo(props) {
  return (
    <div className="order_price">
      <h1>Ваш заказ:</h1>
      <div className="order_price_prices">
        <ul>
          {
            <OrderOptions
              optionName="Пункт выдачи:"
              optionValue="Ульяновск, Нариманова&nbsp;42"
            />
          }
        </ul>
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
