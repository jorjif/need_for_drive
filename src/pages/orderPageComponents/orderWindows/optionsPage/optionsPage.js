import Options from "./options";
import OrderInfo from "../../orderInfo/orderInfo";
import "./optionsPage.scss";

export default function OptionsPage() {
  return (
    <div className="page_order_content">
      <Options />
      <OrderInfo btnContent="Итого" link="/order/confirm" />
    </div>
  );
}
