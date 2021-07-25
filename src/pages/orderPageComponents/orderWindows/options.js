import { ReactComponent as Delete } from "../../icons/deleteCross.svg";
export default function Options(props) {
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
                <input
                  placeholder="Введите дату и время"
                  type="datetime-local"
                  list="order_date_from"
                  pattern="[0-9]{2}.[0-9]{2}.[0-9]{4} [0-9]{2}:[0-9]{2}"
                  className="order_options_date_form_input_textfield"
                />

                <button className="order_options_date_form_input_delete">
                  <Delete />
                </button>
              </div>
              <div className="order_options_date_form_input">
                <label htmlFor="order_date_to">По</label>
                <input
                  type="datetime-local"
                  list="order_date_to"
                  placeholder="Введите дату и время"
                  pattern="[0-9]{2}.[0-9]{2}.[0-9]{4} [0-9]{2}:[0-9]{2}"
                  className="order_options_date_form_input_textfield"
                />

                <button className="order_options_date_form_input_delete">
                  <Delete />
                </button>
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
            <label htmlFor="full">
              <input type="checkbox" id="full" />
              <label htmlFor="full">Полный бак, 500р</label>
            </label>
            <label htmlFor="childseat">
              <input type="checkbox" id="childseat" />
              <label htmlFor="childseat">Детское кресло, 200р</label>
            </label>
            <label htmlFor="jdm">
              <input type="checkbox" id="jdm" />
              <label htmlFor="jdm">Правый руль, 1600р</label>
            </label>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
