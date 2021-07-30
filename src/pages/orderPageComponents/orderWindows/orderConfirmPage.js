import OrderInfo from "../orderInfo/orderInfo";
import OrderConfirm from "./orderConfirm";
import ConfirmationPopup from "./orderConfirmPopup";
import car2 from "./images/2.png";
import "./orderConfirm.scss";
import { useState } from "react";
import classNames from "classnames";

export default function OrderConfirmPage(props) {
  const [confirmOpen, setConfirmOpen] = useState(true);
  function handleOpen() {
    setConfirmOpen((state) => !state);
    console.log(confirmOpen);
  }
  const popUp = classNames({
    order_confirm_closedPopup: confirmOpen,
    order_confirm_popup: true,
  });
  const orderBoilerplate = {
    "Пункт выдачи": "Ульяновск, Нариманова\u00A042",
    Модель: "Hyundai,\u00A0i30N",
    Цвет: "Голубой",
    "Длительность аренды": "1д2ч",
    Тариф: "На\u00A0сутки",
    "Полный бак": "Да",
  };
  const selectedCarBoilerplate = {
    model: "Hyndai, i30 N",
    number: "K 761 HA 73",
    fuel: "100",
    time: "12.06.2019 12:00",
  };
  return (
    <div className="page_order_content">
      <ConfirmationPopup classes={popUp} cancelEvent={handleOpen} />
      <OrderConfirm info={selectedCarBoilerplate} image={car2} />
      <OrderInfo
        btnContent="Заказать"
        order={orderBoilerplate}
        confirmation={true}
        btnClick={handleOpen}
      />
    </div>
  );
}
