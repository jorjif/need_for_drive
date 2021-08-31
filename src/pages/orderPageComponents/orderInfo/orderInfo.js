import Button from "../../mainComponents/standartButton";
import OrderOptions from "./priceList";
import "./orderInfo.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function OrderInfo({ btnContent, btnClick, confirmation, link, form }) {
  const [orderList, setOrderList] = useState([]); //массив с OrderOptions - деталями заказа, который составляет пользователь
  const accessToNext = useSelector((store) => store.access.access);
  const adressInfo = useSelector((store) => store.adress);
  const carInfo = useSelector((store) => store.car);
  const optionsInfo = useSelector((store) => store.options);

  useEffect(() => {
    //создает массив из частей стора с данными
    const orderInfoArr = [adressInfo, carInfo, optionsInfo];
    //фильтрует массив оставляя только выполненные
    const completedSteps = orderInfoArr.filter((step) => step.status === "complete");
    //объект с заказом через который затем будет итерироваться цикл
    let order = {};
    completedSteps.forEach((info, index) => {
      switch (index) {
        //итерация по шагам заказа
        case 0:
          order = {
            ...order,
            "Пункт выдачи": `${info.city}, ${info.streetNoSpace}`,
          };
          break;
        case 1:
          order = {
            ...order,
            Модель: info.carModel,
          };
          break;
        case 2:
          //опции - объект внутри массива
          const options = Object.keys(info.options);
          //модифицируем объект так, чтоб каждый ключ имел значение да
          const optionsObj = options.reduce((accum, option) => {
            return { ...accum, [option]: "Да" };
          }, {});
          order = {
            ...order,
            Цвет: info.color,
            "Длительность аренды": info.date.difference,
            Тариф: info.tariff,
            ...optionsObj,
          };
          break;
        default:
          break;
      }
    });

    let orderArr = [];

    for (const [key, value] of Object.entries(order)) {
      //цикл через объект содержащий детали заказа
      const orderOption = (
        <OrderOptions key={key} optionName={key} optionValue={value} />
      );
      orderArr = orderArr.concat(orderOption);
    }

    setOrderList([...orderArr]);
  }, [adressInfo, carInfo, optionsInfo]);

  function allowNextStep(e) {
    if (!accessToNext) {
      //если форма заполнена некорректно - пользователь не допускается до следующей вкладки
      e.preventDefault();
      return;
    }
  }

  //функция отвечает за рендер кнопки - будет ли это link или обычная кнопка
  const buttonType = () => {
    if (confirmation === true) {
      //в случае если вкладка - подтверждение заказа, пускаем пропс confirmation={true}
      //проверяет сообщение кнопки. На основании этого выбирает какой класс подставить
      const classes =
        btnContent === "Отменить" ? "order_price_next_cancel" : "order_price_next";
      //то же, но для класса нажатой кнопки
      const pressedClass =
        btnContent === "Отменить"
          ? "order_price_next_cancel_pressed"
          : "order_price_next_pressed";
      return (
        <Button
          classes={classes}
          pressed={pressedClass}
          msg={btnContent}
          onClick={btnClick}
          form={form}
        />
      );
    }
    //во всех остальных случаях, пропса нет, рендерится линк
    return (
      <Link to={link} onClick={allowNextStep}>
        <Button
          classes="order_price_next"
          pressed="order_price_next_pressed"
          msg={btnContent}
        />
      </Link>
    );
  };
  return (
    <div className="order_price">
      <h1>Ваш заказ:</h1>
      <div className="order_price_prices">
        <ul>{orderList}</ul>
      </div>
      <div className="order_price_final">
        <p>
          <span>Цена:</span> от 8 000 до 12 000
        </p>
        {buttonType()}
      </div>
    </div>
  );
}
export default OrderInfo;
