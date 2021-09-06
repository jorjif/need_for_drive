import { ReactComponent as Delete } from "../../../icons/deleteCross.svg";
import Map from "../../../icons/orderMap.png";
import { useSelector, useDispatch } from "react-redux";
import {
  cityChanged,
  streetChanged,
  changeStatus,
} from "../../../../store/order/adress";
import { userAccess } from "../../../../store/order/orderAcess";
import { useEffect, useState } from "react";
import { useGetAdressInfoQuery } from "../../../../store/order/carStore";

function AdressSelect() {
  const [cityInput, setCityInput] = useState("");
  const [streetInput, setStreetInput] = useState("");
  const { city, street } = useSelector((store) => store.adress);
  const dispatch = useDispatch();
  const { data, success } = useGetAdressInfoQuery();
  //useEffect при маунте и анмаунте компонента устанавливает его статус
  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("complete"));
  }, [dispatch]);
  const datalist = [
    { city: "Ульяновск", street: ["Нариманова 42", "Крымова 8"] },
    { city: "Краснодар", street: ["Московская 2", "Красная 154"] },
  ];
  //useEffect для проверки допуска на следующий шаг и отправки значений в стор
  useEffect(() => {
    //проверяет соответствует ли инпут доступным городам
    const comparedCity = data.find((elem) => elem.city === cityInput);
    const comparedStreet = data.find(
      (elem) => (elem.city === cityInput) & elem.streets.street.includes(streetInput)
    );
    //если инпут соответствует - отправляет стейт в стор
    if (comparedCity) {
      dispatch(cityChanged(cityInput));
    }
    //если город выставлен, но изменен на неверное значение - стор отчищается
    if (city && !comparedCity) {
      dispatch(cityChanged(""));
    }
    if (comparedStreet) {
      dispatch(streetChanged(streetInput));
    }
    if (street && !comparedStreet) {
      dispatch(streetChanged(""));
    }
    // eslint-disable-next-line
  }, [streetInput, cityInput]);
  useEffect(() => {
    if (street && city) {
      dispatch(userAccess(true));
    }
  });
  useEffect(() => {}, []);
  function cityOnChange(e) {
    const value = e.target.value;
    setCityInput(value);
  }
  function streetOnChange(e) {
    const value = e.target.value;
    setStreetInput(value);
  }

  function deleteButtonClick(e, type) {
    e.preventDefault();
    if (type === "city") {
      setCityInput("");
      dispatch(cityChanged(""));
      return;
    }
    setStreetInput("");
    dispatch(streetChanged(""));
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  function optionsWithCity(adressArr) {
    const cityIndex = adressArr.find((elem) => elem.city === city);
    return cityIndex?.street.map((streetElem) => (
      <option value={streetElem} key={streetElem} />
    ));
  }
  return (
    <div className="order_adress">
      <form id="adress_form" className="order_adress_search" onSubmit={onSubmit}>
        <div className="order_adress_search_input">
          <label htmlFor="order_adress_city">Город:</label>
          <input
            list="order_adress_city"
            className="order_adress_search_input_textfield"
            value={cityInput}
            onChange={cityOnChange}
            required
          />
          <datalist id="order_adress_city">
            {datalist.map((adressObj) => {
              return <option value={adressObj.city} key={adressObj.city} />;
            })}
          </datalist>
          <button
            className="order_adress_search_input_delete"
            onClickCapture={(e) => deleteButtonClick(e, "city")}
          >
            <Delete />
          </button>
        </div>
        <div className="order_adress_search_input">
          <label htmlFor="order_adress_street">Пункт выдачи:</label>
          <input
            list="order_adress_street"
            className="order_adress_search_input_textfield"
            value={streetInput}
            onChange={streetOnChange}
            required
          />
          <datalist id="order_adress_street">{optionsWithCity(datalist)}</datalist>
          <button
            className="order_adress_search_input_delete street"
            onClick={deleteButtonClick}
          >
            <Delete />
          </button>
        </div>
      </form>
      <div className="order_adress_map">
        <p>Пункт выдачи</p>
        <img
          className="order_adress_map_map"
          src={Map}
          alt="карта выбора места посадки"
        />
      </div>
    </div>
  );
}
export default AdressSelect;
