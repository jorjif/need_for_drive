import car1 from "../images/1.png";
import car2 from "../images/2.png";
import car3 from "../images/3.png";
import car4 from "../images/4.png";
import CarCard from "./carCard";
import { selectCar, changeStatus } from "../../../../store/order/carSelect";
import { userAccess } from "../../../../store/order/orderAcess";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCar } from "./fetchCar";

function CarSelect() {
  const dispatch = useDispatch();
  const { id } = useSelector((store) => store.car);

  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("complete"));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    function errorHandler(err) {
      console.error(err);
    }
    fetchCar(errorHandler);
    // eslint-disable-next-line
  }, []);
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

  function setCarOnclick({ header, price, img, id }) {
    const carObject = {
      carModel: header,
      carImg: img,
      id,
      priceRange: price,
    };
    dispatch(selectCar(carObject));
    dispatch(userAccess(true));
  }
  return (
    <div className="order_cars">
      <form className="order_cars_form ">
        <label className="order_cars_input radio_container">
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
        </label>
        <label className="order_cars_input radio_container">
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
        </label>
        <label className="order_cars_input radio_container">
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
        </label>
      </form>
      <div className="order_cars_list">
        {cars.map((car) => {
          return (
            <CarCard
              onClick={() => setCarOnclick(car)}
              key={car.id}
              name={car.header}
              price={car.price}
              image={car.img}
              selected={car.id === id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default CarSelect;
