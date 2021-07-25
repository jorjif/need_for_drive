import Options from "./options";
import OrderInfo from "../orderInfo/orderInfo";
import "./optionsPage.scss";

export default function OptionsPage(props) {
  const orderBoilerplate = {
    "Пункт выдачи": "Ульяновск, Нариманова\u00A042",
    Модель: "Hyundai,\u00A0i30N",
  };
  return (
    <div className="page_order_content">
      <Options />
      <OrderInfo btnContent="Итого" order={orderBoilerplate} link="/order/" />
    </div>
  );
}
