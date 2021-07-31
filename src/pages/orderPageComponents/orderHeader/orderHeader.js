import { ReactComponent as Arrow } from "../../icons/orderArrow.svg";
import { ReactComponent as Geo } from "../../icons/geomark.svg";
import "./orderHeader.scss";
function OrderHeader(props) {
  return (
    <div className="order_header">
      <header className="order_header_header">
        <h1>Need for drive</h1>
        <div className="main-page_geo">
          <Geo />
          <p>Ульяновск</p>
        </div>
      </header>
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
    </div>
  );
}
export default OrderHeader;
