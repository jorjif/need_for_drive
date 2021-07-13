import NavBar from "../mainComponents/nav";
import OrderInfo from "./orderInfo/orderInfo";
import AdressSelect from "./orderWindows/adressSelect";
import "../../index.scss";
function Order() {
  return (
    <div className="page">
      <NavBar />
      <AdressSelect />
      <OrderInfo />
    </div>
  );
}
export default Order;
