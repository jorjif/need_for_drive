import car1 from "../images/1.png";
import car2 from "../images/2.png";
import car3 from "../images/3.png";
import car4 from "../images/4.png";
import CarCard from "./carCard";
function CarSelect() {
  //массив с объектами машинами
  const cars = [
    {
      header: "ELANTRA",
      price: "15 000 - 25 000",
      img: car1,
      id: "car14223",
    },
    { header: "i30 N", price: "10 000 - 32 000", img: car2, id: "car12635" },
    { header: "CRETA", price: "12 000 - 25 000", img: car3, id: "car11532" },
    { header: "SONATA", price: "10 000 - 32 000", img: car4, id: "car12735" },
  ];
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
        {cars.map((car) => {
          return (
            <CarCard
              key={car.id}
              name={car.header}
              price={car.price}
              image={car.img}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CarSelect;
