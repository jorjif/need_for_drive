import OrderInfo from "../orderInfo/orderInfo";
import OrderConfirm from "./orderConfirm";
import car2 from "./images/2.png";

export default function OrderConfirmPage(props) {
  const orderBoilerplate = {
    "Пункт выдачи": "Ульяновск, Нариманова\u00A042",
    Модель: "Hyundai,\u00A0i30N",
    Цвет: "Голубой",
    "Длительность аренды": "1д2ч",
    Тариф: "На\u00A0сутки",
    "Полный бак": "Да",
  };
  const selectedCarBoilerplate = {
    model: "Hyndai, i30 N",
    number: "K 761 HA 73",
    fuel: "100",
    time: "12.06.2019 12:00",
  };
  return (
    <div className="page_order_content">
      <OrderConfirm info={selectedCarBoilerplate} image={car2} />
      <OrderInfo btnContent="Итого" order={orderBoilerplate} confirmation={true} />
    </div>
  );
}
