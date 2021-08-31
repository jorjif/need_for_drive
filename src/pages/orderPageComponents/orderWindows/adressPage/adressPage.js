import AdressSelect from "./adressSelect";
import OrderInfo from "../../orderInfo/orderInfo";
import "./adressPage.scss";

function AdressPage() {
  const adress = { "Пункт выдачи": "Ульяновск, Нариманова\u00A042" };
  return (
    <div className="page_order_content">
      <AdressSelect />
      <OrderInfo
        link="/order/cars"
        form="adress_form"
        btnContent="Выбрать модель"
        order={adress}
      />
    </div>
  );
}
export default AdressPage;
