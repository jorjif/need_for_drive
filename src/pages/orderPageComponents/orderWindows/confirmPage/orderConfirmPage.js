import OrderInfo from "../../orderInfo/orderInfo";
import OrderConfirm from "./orderConfirm";
import ConfirmationPopup from "./orderConfirmPopup";
import car2 from "../images/2.png";
import "./orderConfirm.scss";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, popupCloseOpen } from "../../../../store/order/confirmation";

export default function OrderConfirmPage() {
  const { orderConfirmed } = useSelector((store) => store.status);
  const dispatch = useDispatch();
  function confirmEvent() {
    dispatch(confirmOrder(false));
  }
  function handleOpen() {
    dispatch(popupCloseOpen(true));
  }

  return (
    <div className="page_order_content">
      <ConfirmationPopup />
      <OrderConfirm image={car2} />
      <OrderInfo
        btnContent={orderConfirmed ? "Отменить" : "Заказать"}
        confirmation={true}
        btnClick={orderConfirmed ? confirmEvent : handleOpen}
      />
    </div>
  );
}
