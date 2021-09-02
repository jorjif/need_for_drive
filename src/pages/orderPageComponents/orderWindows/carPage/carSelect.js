import CarCard from "./carCard";
import { selectCar, changeStatus } from "../../../../store/order/carSelect";
import { userAccess } from "../../../../store/order/orderAcess";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filterCar } from "./fetchCar";
import { useGetCarsQuery } from "../../../../store/order/carStore";
import RadioButton from "../commonComponents/radioBtn";

function CarSelect() {
  const dispatch = useDispatch();
  const selectedCar = useSelector((store) => store.car);
  const [carList, setCarList] = useState([]);
  const [cathegoryList, setCathegoryList] = useState([]);
  const [chosenCathegory, setChosenCathegory] = useState("");
  const { data, isSuccess } = useGetCarsQuery();

  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("complete"));
  }, [dispatch]);
  //распределяет фильтрованную с сервера инфу
  useEffect(() => {
    if (isSuccess) {
      const { carCategories, carData } = filterCar(data);
      setCarList(carData);
      setCathegoryList([...carCategories]);
    }
  }, [isSuccess, data]);

  function setCarOnclick({
    name,
    priceMax,
    priceMin,
    imgUrl,
    id,
    number,
    colors,
    tank,
  }) {
    const carObject = {
      carModel: name,
      carImg: imgUrl,
      id,
      priceMax,
      priceMin,
      plate: number,
      colors: [...colors],
      fuel: tank,
    };
    dispatch(selectCar(carObject));
    dispatch(userAccess(true));
  }
  function setCathegoryOnclick(e) {
    setChosenCathegory(e.target.value);
  }
  return (
    <div className="order_cars">
      <form className="order_cars_form ">
        <RadioButton
          name="class"
          id="any"
          value=""
          onChange={setCathegoryOnclick}
          checked={!chosenCathegory}
        >
          Все модели
        </RadioButton>
        {cathegoryList.map((cathegory) => {
          return (
            <RadioButton
              name="class"
              id={cathegory}
              value={cathegory}
              key={cathegory}
              onChange={setCathegoryOnclick}
              checked={chosenCathegory === cathegory}
            >
              {cathegory}
            </RadioButton>
          );
        })}
      </form>
      <div className="order_cars_list">
        {carList
          .filter(({ categoryId }) => categoryId.name.includes(chosenCathegory))
          .map((car) => {
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
          })}
      </div>
    </div>
  );
}
export default CarSelect;
