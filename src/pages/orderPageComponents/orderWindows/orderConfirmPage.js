import OrderInfo from "../orderInfo/orderInfo";
import OrderConfirm from "./orderConfirm";
import ConfirmationPopup from "./orderConfirmPopup";
import car2 from "./images/2.png";
import "./orderConfirm.scss";
import { useState } from "react";
import classNames from "classnames";

export default function OrderConfirmPage({ isConfirmed, confirmEvent }) {
  //стейт состояния всплывающего окна. Отвечает только за это
  const [confirmOpen, setConfirmOpen] = useState(true);
  //функция, которая меняет стейт на противоположный. Нужна для закрытия всплывающего окна
  //возможности менять стейт снизу
  function handleOpen() {
    setConfirmOpen((state) => !state);
    console.log(confirmOpen);
  }
  //функция для кнопки подтверждения. Меняет состояние заказа на выполненный, после этого закрывает окно подтверждения
  function confirmBtnEvent() {
    handleOpen();
    confirmEvent();
  }

  const popUp = classNames({
    order_confirm_closedPopup: confirmOpen,
    order_confirm_popup: true,
  });
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
      <ConfirmationPopup
        classes={popUp}
        confirmEvent={confirmBtnEvent}
        cancelEvent={handleOpen}
      />
      <OrderConfirm info={selectedCarBoilerplate} image={car2} />
      <OrderInfo
        btnContent={isConfirmed ? "Отменить" : "Заказать"}
        order={orderBoilerplate}
        confirmation={true}
        btnClick={isConfirmed ? confirmEvent : handleOpen}
      />
    </div>
  );
}
