import { ReactComponent as Arrow } from "../../icons/orderArrow.svg";
import { ReactComponent as Geo } from "../../icons/geomark.svg";
import "./orderHeader.scss";
import { useSelector } from "react-redux";
import classNames from "classnames";

function OrderHeader({ isConfirmed }) {
  const adressStatus = useSelector((store) => store.adress.status);
  const carSelectStatus = useSelector((store) => store.car.status);
  const optionsStatus = useSelector((store) => store.options.status);
  const confirmationStatus = useSelector((store) => store.status.status);
  function classForMenu(status) {
    return classNames({
      order_header_nav_element: true,
      order_header_nav_element_isActive: status === "in progress",
      order_header_nav_element_complete: status === "complete",
      order_header_nav_element_blocked: status === "blocked",
    });
  }
  function orderConfirmed() {
    if (isConfirmed) {
      return (
        <nav className="order_header_nav">
          <p className="order_header_nav_element_first_order-number">
            Номер заказа RU{Math.floor(Math.random() * 10000)}
          </p>
        </nav>
      );
    }
    return (
      <nav className="order_header_nav">
        <p className={classForMenu(adressStatus)}>Местоположение</p>
        <Arrow />
        <p className={classForMenu(carSelectStatus)}>Модель</p>
        <Arrow />
        <p className={classForMenu(optionsStatus)}>Дополнительно</p>
        <Arrow />
        <p className={classForMenu(confirmationStatus)}>Итоги</p>
      </nav>
    );
  }

  return (
    <div className="order_header">
      <header className="order_header_header">
        <h1>Need for drive</h1>
        <div className="main-page_geo">
          <Geo />
          <p>Ульяновск</p>
        </div>
      </header>
      {orderConfirmed()}
    </div>
  );
}
export default OrderHeader;
