import OrderInfo from "../orderInfo/orderInfo";
import CarSelect from "./carSelect";

function CarsPage(props) {
  const order = {
    "Пункт выдачи": "Ульяновск, Нариманова\u00A042",
    Модель: "Hyundai,\u00A0i30N",
  };
  return (
    <div className="page_order_content">
      <CarSelect />
      <OrderInfo btnContent="Дополнительно" order={order} />
    </div>
  );
}

export default CarsPage;
