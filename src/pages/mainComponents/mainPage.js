import { NavBar } from "./nav.js";
import { ReactComponent as Geo } from "../icons/geomark.svg";
import Slider from "./slider/slider.js";
import "./mainPage.scss";
function MainPage(props) {
  function orderChange(e) {
    e.target.style.backgroundColor = `background: linear-gradient(
      90deg,
      hsl(148, 67%, 41%) 2.61%,
      hsl(158, 76%, 32%) 112.6%
    );`;
  }
  return (
    <div className="page">
      <NavBar />
      <div className="main-page">
        <header className="main-page_header">
          <h1>Need for drive</h1>
          <div className="main-page_geo">
            <Geo />
            <p>Ульяновск</p>
          </div>
        </header>
        <main className="main-page_main">
          <h1>Каршеринг</h1>
          <h2>Need for drive</h2>
          <p>Поминутная аренда авто твоего города</p>
          <button className="main-page_main_order" onClick={(e) => orderChange(e)}>
            Забронировать
          </button>
        </main>
        <footer className="main-page_main_footer">
          <p>© 2016-2019 «Need for drive»</p>
          <p>
            <a href="tel:+7495-234-2244">8 (495) 234-22-44</a>
          </p>
        </footer>
      </div>
      <Slider />
    </div>
  );
}
export { MainPage };
