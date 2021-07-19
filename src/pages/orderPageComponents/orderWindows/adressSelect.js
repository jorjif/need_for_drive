import { ReactComponent as Delete } from "../../icons/deleteCross.svg";
import Map from "../../icons/orderMap.png";
function AdressSelect() {
  return (
    <div className="order_adress">
      <div className="order_adress_search">
        <div className="order_adress_search_input">
          <label htmlFor="order_adress_city">Город:</label>
          <input
            list="order_adress_city"
            className="order_adress_search_input_textfield"
          />
          <datalist id="order_adress_city">
            <option value="Ульяновск" />
          </datalist>
          <button className="order_adress_search_input_delete">
            <Delete />
          </button>
        </div>
        <div className="order_adress_search_input">
          <label htmlFor="order_adress_street">Пункт выдачи:</label>
          <input
            list="order_adress_street"
            className="order_adress_search_input_textfield"
          />
          <datalist id="order_adress_street">
            <option value="Нариманова 42" />
          </datalist>
          <button className="order_adress_search_input_delete">
            <Delete />
          </button>
        </div>
      </div>
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
