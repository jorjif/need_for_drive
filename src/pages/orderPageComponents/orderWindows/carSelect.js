import car1 from "./images/1.png";
import car2 from "./images/2.png";
import car3 from "./images/3.png";
import car4 from "./images/4.png";
import CarCard from "./carCard";
function CarSelect(props) {
  const headers = ["ELANTRA", "i30N", "CRETA", "SONATA"];
  const prices = [
    "15 000 - 25 000",
    "10 000 - 32 000",
    "12 000 - 25 000",
    "10 000 - 32 000",
  ];
  const img = [car1, car2, car3, car4];
  return (
    <div className="order_cars">
      <form className="order_cars_form ">
        <div className="order_cars_input radio_container">
          <input
            type="radio"
            name="class"
            id="any"
            value=""
            className="order_radio"
            defaultChecked
          />
          <label htmlFor="any" className="radio_label">
            Все модели
          </label>
          <span className="radio_checkmark"></span>
        </div>
        <div className="order_cars_input radio_container">
          <input
            type="radio"
            name="class"
            id="economy"
            value="economy"
            className="order_radio"
          />
          <label htmlFor="economy" className="radio_label">
            Эконом
          </label>
          <span className="radio_checkmark"></span>
        </div>
        <div className="order_cars_input radio_container">
          <input
            type="radio"
            name="class"
            id="bussines"
            value="bussines"
            className="order_radio"
          />
          <label htmlFor="bussines" className="radio_label">
            Премиум
          </label>
          <span className="radio_checkmark"></span>
        </div>
      </form>
      <div className="order_cars_list">
        {headers.map((header, i) => {
          return <CarCard key={i} name={header} price={prices[i]} image={img[i]} />;
        })}
      </div>
    </div>
  );
}
export default CarSelect;
