import { ReactComponent as Arrow } from "../../icons/orderArrow.svg";
import { ReactComponent as Geo } from "../../icons/geomark.svg";
import "./orderHeader.scss";
function OrderHeader({ isConfirmed }) {
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
        <p className="order_header_nav_element order_header_nav_element_first">
          Местоположение
        </p>
        <Arrow />
        <p className="order_header_nav_element">Модель</p>
        <Arrow />
        <p className="order_header_nav_element">Дополнительно</p>
        <Arrow />
        <p className="order_header_nav_element">Итоги</p>
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
