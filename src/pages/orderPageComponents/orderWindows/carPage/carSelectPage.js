import OrderInfo from "../../orderInfo/orderInfo";
import CarSelect from "./carSelect";
import "./carSelect.scss";

function CarsPage() {
  return (
    <div className="page_order_content">
      <CarSelect />
      <OrderInfo btnContent="Дополнительно" link="/order/options" />
    </div>
  );
}

export default CarsPage;
