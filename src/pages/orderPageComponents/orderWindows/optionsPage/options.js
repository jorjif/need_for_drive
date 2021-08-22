import { ReactComponent as Delete } from "../../../icons/deleteCross.svg";
import { ReactComponent as CheckboxMark } from "../../../icons/checkboxMark.svg";
import DateTimePicker from "react-datetime-picker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  changeColor,
  changeStartDate,
  changeEndDate,
  changeDateDifference,
  changeTariff,
  addOption,
  removeOption,
} from "../../../../store/order/options";
import { format } from "date-fns/fp";
import { userAccess } from "../../../../store/order/orderAcess";
import dateDifference from "./dateDifference";
export default function Options() {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const { color, tariff } = useSelector((store) => store.options);
  const storeForOptions = useSelector((store) => store.options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("done"));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //если начальная дата меньше конечной - отправляет значение в стор, пропускает в следующий шаг
    if (dateFrom < dateTo) {
      /*const formatFrom = format(dateFrom, "dd/MM/yyyy hh:mm");
      const formatTo = format(dateTo, "dd/MM/yyyy hh:mm");*/
      dispatch(changeStartDate(dateFrom));
      dispatch(changeEndDate(dateTo));
      const difference = dateDifference(dateFrom, dateTo);
      dispatch(changeDateDifference(difference));
      dispatch(userAccess(true));
    }
    //если пользователь после этого меняет дату на неправильную - доступ закрывается
    if (dateFrom > dateTo) {
      dispatch(userAccess(false));
    }
    // eslint-disable-next-line
  }, [dateFrom, dateTo]);

  function getColor(e) {
    dispatch(changeColor(e.target.value));
  }

  function getTariff(e) {
    dispatch(changeTariff(e.target.value));
  }
  function addOptionEvent(e) {
    /*const hasProp = storeForOptions[e.target.name];
    if (hasProp) {
      dispatch(removeOption(e.target.name));
      return;
    }*/
    dispatch(addOption(e.target.name));
  }

  function checkOption(e) {
    return storeForOptions[e.target.name];
  }
  return (
    <div className="order_options">
      <form>
        <div className="order_options_color">
          <fieldset name="цвет">
            <legend>Цвет:</legend>
            <div className="order_options_color_inpField">
              <label className="radio_container" htmlFor="any">
                <input
                  type="radio"
                  name="color"
                  id="any"
                  value=""
                  className="order_radio"
                  checked={color === ""}
                  onChange={getColor}
                />
                <label htmlFor="any" className="radio_label">
                  Любой
                </label>
                <span className="radio_checkmark"></span>
              </label>
              <label className="radio_container">
                <input
                  type="radio"
                  name="color"
                  id="red"
                  value="красный"
                  className="order_radio"
                  checked={color === "красный"}
                  onChange={getColor}
                />
                <label htmlFor="red" className="radio_label">
                  Красный
                </label>
                <span className="radio_checkmark"></span>
              </label>
              <label className="radio_container">
                <input
                  type="radio"
                  name="color"
                  id="blue"
                  value="синий"
                  className="order_radio"
                  checked={color === "синий"}
                  onChange={getColor}
                />
                <label htmlFor="blue" className="radio_label">
                  Синий
                </label>
                <span className="radio_checkmark"></span>
              </label>
            </div>
          </fieldset>
        </div>
        <div className="order_options_date">
          <fieldset>
            <legend>Дата аренды</legend>
            <div className="order_options_date_form">
              <div className="order_options_date_form_input">
                <label htmlFor="order_date_from">С</label>
                <DateTimePicker
                  minDate={new Date()}
                  calendarIcon={null}
                  value={dateFrom}
                  onChange={setDateFrom}
                  type="datetime-local"
                  list="order_date_from"
                  className="order_options_date_form_input_textfield"
                  clearIcon={<Delete />}
                  format="dd.MM.y hh:mm"
                />
              </div>
              <div className="order_options_date_form_input">
                <label htmlFor="order_date_to">По</label>
                <DateTimePicker
                  minDate={new Date()}
                  calendarIcon={null}
                  value={dateTo}
                  onChange={setDateTo}
                  type="datetime-local"
                  list="order_date_from"
                  className="order_options_date_form_input_textfield"
                  format="dd.MM.y hh:mm"
                  clearIcon={<Delete />}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className="order_options_tariff">
          <fieldset>
            <legend>Тариф</legend>
            <label className="radio_container" htmlFor="minute">
              <input
                checked={tariff === "Поминутно"}
                type="radio"
                name="tariff"
                id="minute"
                value="Поминутно"
                className="order_radio"
                onChange={getTariff}
              />
              <label htmlFor="minute" className="radio_label">
                Поминутно, 7₽/мин
              </label>
              <span className="radio_checkmark"></span>
            </label>
            <label className="radio_container" htmlFor="day">
              <input
                type="radio"
                name="tariff"
                id="day"
                value="На день"
                className="order_radio"
                checked={tariff === "На день"}
                onChange={getTariff}
              />
              <label htmlFor="day" className="radio_label">
                На сутки, 1999₽/сутки
              </label>
              <span className="radio_checkmark"></span>
            </label>
          </fieldset>
        </div>
        <div className="order_options_options">
          <fieldset>
            <legend>Доп услуги</legend>
            <label htmlFor="full" className="checkbox">
              <span className="checkbox_input">
                <input
                  type="checkbox"
                  id="full"
                  name="полный бак"
                  value="да"
                  onClick={addOptionEvent}
                />
                <span className="checkbox_control">
                  <CheckboxMark />
                </span>
              </span>
              <label htmlFor="full" className="checkbox_label">
                Полный бак, 500р
              </label>
            </label>
            <label htmlFor="childseat" className="checkbox">
              <span className="checkbox_input">
                <input
                  type="checkbox"
                  id="childseat"
                  name="детское кресло"
                  value="да"
                  onClick={addOptionEvent}
                />
                <span className="checkbox_control">
                  <CheckboxMark />
                </span>
              </span>
              <label htmlFor="childseat" className="checkbox_label">
                Детское кресло, 200р
              </label>
            </label>
            <label htmlFor="jdm" className="checkbox">
              <span className="checkbox_input">
                <input
                  type="checkbox"
                  id="jdm"
                  name="правый руль"
                  value="да"
                  onClick={addOptionEvent}
                />
                <span className="checkbox_control">
                  <CheckboxMark />
                </span>
              </span>
              <label htmlFor="jdm" className="checkbox_label">
                Правый руль, 1600р
              </label>
            </label>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
