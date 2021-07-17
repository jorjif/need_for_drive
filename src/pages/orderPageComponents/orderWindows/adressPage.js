import AdressSelect from "./adressSelect";
import OrderInfo from "../orderInfo/orderInfo";

function AdressPage(props) {
  return (
    <div className="page_order_content">
      <AdressSelect />
      <OrderInfo link="/order/cars" btnContent="Выбрать модель" />
    </div>
  );
}
export default AdressPage;
