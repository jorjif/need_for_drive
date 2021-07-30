import NavBar from "../mainComponents/nav";
import OrderContent from "./orderContent";
import "../../index.scss";
import OrderHeader from "./orderHeader/orderHeader";
import { useState } from "react";
function Order() {
  //стейт с состоянием заказа - подтвержден/нет
  const [orderConfirmed, setConfirmed] = useState(false);
  function confirmation() {
    setConfirmed((state) => !state);
  }
  return (
    <div className="page">
      <NavBar />
      <div className="page_order">
        <OrderHeader isConfirmed={orderConfirmed} />
        <OrderContent confirmEvent={confirmation} isConfirmed={orderConfirmed} />
      </div>
    </div>
  );
}
export default Order;
