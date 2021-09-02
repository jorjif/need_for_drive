import AdressSelect from "./adressSelect";
import OrderInfo from "../../orderInfo/orderInfo";
import "./adressPage.scss";

function AdressPage() {
  return (
    <div className="page_order_content">
      <AdressSelect />
      <OrderInfo link="/order/cars" form="adress_form" btnContent="Выбрать модель" />
    </div>
  );
}
export default AdressPage;
