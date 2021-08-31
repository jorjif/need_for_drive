import OrderInfo from "../../orderInfo/orderInfo";
import OrderConfirm from "./orderConfirm";
import ConfirmationPopup from "./orderConfirmPopup";
import car2 from "../images/2.png";
import "./orderConfirm.scss";
import { useState } from "react";
import classNames from "classnames";
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
  //макет с информацией о заказе
  const orderBoilerplate = {
    "Пункт выдачи": "Ульяновск, Нариманова\u00A042",
    Модель: "Hyundai,\u00A0i30N",
    Цвет: "Голубой",
    "Длительность аренды": "1д2ч",
    Тариф: "На\u00A0сутки",
    "Полный бак": "Да",
  };
  //макет с информацией о выбранном авто
  const selectedCarBoilerplate = {
    model: "Hyndai, i30 N",
    number: "K 761 HA 73",
    fuel: "100",
    time: "12.06.2019 12:00",
  };
  return (
    <div className="page_order_content">
      <ConfirmationPopup />
      <OrderConfirm info={selectedCarBoilerplate} image={car2} />
      <OrderInfo
        btnContent={orderConfirmed ? "Отменить" : "Заказать"}
        order={orderBoilerplate}
        confirmation={true}
        btnClick={orderConfirmed ? confirmEvent : handleOpen}
      />
    </div>
  );
}
