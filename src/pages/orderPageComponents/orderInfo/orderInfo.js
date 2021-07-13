import Button from "../../mainComponents/standartButton";
import OrderOptions from "./priceList";
import "./orderInfo.scss";
function OrderInfo(props) {
  return (
    <div className="order_price">
      <h1>Ваш заказ:</h1>
      <div className="order_price_prices">
        <ul>{/*тут будет список из опций имеющих цену*/}</ul>
      </div>
      <div className="order_price_final">
        <p>Цена: {/*тут будет итоговая цена*/}</p>
      </div>
      <Button
        classes="order_price_next"
        pressed="order_price_next_pressed"
        msg="Выбрать модель"
      />
    </div>
  );
}
export default OrderInfo;
