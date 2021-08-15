import { ReactComponent as Delete } from "../../../icons/deleteCross.svg";
import { ReactComponent as CheckboxMark } from "../../../icons/checkboxMark.svg";
import DateTimePicker from "react-datetime-picker";
import { useState } from "react";
export default function Options() {
  const [dateFrom, setDateFrom] = useState(new Date());

  const [dateTo, setDateTo] = useState(new Date());
  return (
    <div className="order_options">
      <form>
        <div className="order_options_color">
          <fieldset>
            <legend>Цвет:</legend>
            <div className="order_options_color_inpField">
              <label className="radio_container" htmlFor="any">
                <input
                  type="radio"
                  name="class"
                  id="any"
                  value=""
                  className="order_radio"
                  defaultChecked
                />
                <label htmlFor="any" className="radio_label">
                  Любой
                </label>
                <span className="radio_checkmark"></span>
              </label>
              <label className="radio_container">
                <input
                  type="radio"
                  name="class"
                  id="red"
                  value="red"
                  className="order_radio"
                />
                <label htmlFor="red" className="radio_label">
                  Красный
                </label>
                <span className="radio_checkmark"></span>
              </label>
              <label className="radio_container">
                <input
                  type="radio"
                  name="class"
                  id="blue"
                  value="blue"
                  className="order_radio"
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
                defaultChecked
                type="radio"
                name="tariff"
                id="minute"
                value="minute"
                className="order_radio"
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
                value="day"
                className="order_radio"
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
                <input type="checkbox" id="full" />
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
                <input type="checkbox" id="childseat" />
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
                <input type="checkbox" id="jdm" />
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
