import Button from "../../mainComponents/standartButton";
import OrderOptions from "./priceList";
import "./orderInfo.scss";
import { Link } from "react-router-dom";

function OrderInfo({ order, btnContent, btnClick, confirmation, link }) {
  const orderArr = []; //массив с OrderOptions - деталями заказа, который составляет пользователь
  for (const [key, value] of Object.entries(order)) {
    //цикл через объект содержащий детали заказа
    orderArr.push(<OrderOptions key={key} optionName={key} optionValue={value} />);
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
        />
      );
    }
    //во всех остальных случаях, пропса нет, рендерится линк
    return (
      <Link to={link}>
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
        <ul>{orderArr}</ul>
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
