import Options from "./options";
import OrderInfo from "../orderInfo/orderInfo";
import "./optionsPage.scss";

export default function OptionsPage(props) {
  const orderBoilerplate = {
    "Пункт выдачи": "Ульяновск, Нариманова\u00A042",
    Модель: "Hyundai,\u00A0i30N",
    Цвет: "Голубой",
    "Длительность аренды": "1д2ч",
    Тариф: "На\u00A0сутки",
    "Полный бак": "Да",
  };
  return (
    <div className="page_order_content">
      <Options />
      <OrderInfo btnContent="Итого" order={orderBoilerplate} link="/order/confirm" />
    </div>
  );
}
