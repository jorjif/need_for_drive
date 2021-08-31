import CarCard from "./carCard";
import { selectCar, changeStatus } from "../../../../store/order/carSelect";
import { userAccess } from "../../../../store/order/orderAcess";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterCar } from "./fetchCar";
import { useGetCarsQuery } from "../../../../store/order/carStore";

function CarSelect() {
  const dispatch = useDispatch();
  const selectedCar = useSelector((store) => store.car);
  const [carList, setCarList] = useState([]);
  const [cathegoryList, setCathegoryList] = useState([]);
  const { data, error, isLoading, isSuccess } = useGetCarsQuery();

  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("complete"));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isSuccess) {
      filterCar(data).then(({ carCategories, carData }) => {
        setCarList(carData);
        setCathegoryList([...carCategories]);
      });
    }
  }, [isSuccess]);
  //массив с объектами машинами
  /*const cars = [
    {
      header: "ELANTRA",
      price: "15 000 - 25 000",
      img: car1,
      id: "car14223",
    },
    { header: "i30 N", price: "10 000 - 32 000", img: car2, id: "car12635" },
    { header: "CRETA", price: "12 000 - 25 000", img: car3, id: "car11532" },
    { header: "SONATA", price: "10 000 - 32 000", img: car4, id: "car12735" },
  ];*/

  function setCarOnclick({ name, priceMax, priceMin, imgUrl, id }) {
    const carObject = {
      carModel: name,
      carImg: imgUrl,
      id,
      priceMax,
      priceMin,
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
        {
          /*cars.map((car) => {
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
        })*/
          carList.map((car) => {
            const { name, id, priceMax, priceMin, thumbnail } = car;
            const path = thumbnail.path;
            const imgUrl = `https://api-factory.simbirsoft1.com${path}`;
            return (
              <CarCard
                key={id}
                name={name}
                image={imgUrl}
                startPrice={priceMin}
                endPrice={priceMax}
                onClick={() => setCarOnclick({ ...car, imgUrl })}
                selected={selectedCar.id === id}
              />
            );
          })
        }
      </div>
    </div>
  );
}
export default CarSelect;
