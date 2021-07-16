import NavBar from "../mainComponents/nav";
import OrderInfo from "./orderInfo/orderInfo";
import AdressSelect from "./orderWindows/adressSelect";
import "../../index.scss";
import OrderHeader from "./orderHeader/orderHeader";
function Order() {
  return (
    <div className="page">
      <NavBar />
      <div className="page_order">
        <OrderHeader />
        <div className="page_order_content">
          <AdressSelect />
          <OrderInfo />
        </div>
      </div>
    </div>
  );
}
export default Order;
