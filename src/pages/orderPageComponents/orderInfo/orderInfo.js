import Button from "../../mainComponents/standartButton";
import OrderOptions from "./priceList";
import "./orderInfo.scss";
import { Link } from "react-router-dom";

function OrderInfo(props) {
  const order = []; //массив с OrderOptions - деталями заказа, который составляет пользователь
  for (const [key, value] of Object.entries(props.order)) {
    //цикл через объект содержащий детали заказа
    order.push(<OrderOptions key={key} optionName={key} optionValue={value} />);
  }
  //функция отвечает за рендер кнопки - будет ли это link или обычная кнопка
  const buttonType = () => {
    if (props.confirmation === true) {
      //в случае если вкладка - подтверждение заказа, пускаем пропс confirmation={true}
      //проверяет сообщение кнопки. На основании этого выбирает какой класс подставить
      const classes =
        props.btnContent === "Отменить"
          ? "order_price_next_cancel"
          : "order_price_next";
      //то же, но для класса нажатой кнопки
      const pressedClass =
        props.btnContent === "Отменить"
          ? "order_price_next_cancel_pressed"
          : "order_price_next_pressed";
      return (
        <Button
          classes={classes}
          pressed={pressedClass}
          msg={props.btnContent}
          onClick={props.btnClick}
        />
      );
    }
    //во всех остальных случаях, пропса нет, рендерится линк
    return (
      <Link to={props.link}>
        <Button
          classes="order_price_next"
          pressed="order_price_next_pressed"
          msg={props.btnContent}
        />
      </Link>
    );
  };
  return (
    <div className="order_price">
      <h1>Ваш заказ:</h1>
      <div className="order_price_prices">
        <ul>{order}</ul>
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
