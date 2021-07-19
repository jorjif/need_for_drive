function CarSelect(props) {
  return (
    <div className="order_cars">
      <div className="order_cars_input">
        <input type="radio" name="class" id="any" value="" className="order_radio" />
        <label htmlFor="any">Все модели</label>
      </div>
      <div className="order_cars_input">
        <input
          type="radio"
          name="class"
          id="economy"
          value="economy"
          className="order_radio"
        />
        <label htmlFor="economy">Эконом</label>
      </div>
      <div className="order_cars_input">
        <input
          type="radio"
          name="class"
          id="bussines"
          value="bussines"
          className="order_radio"
        />
        <label htmlFor="bussines">Премиум</label>
      </div>
    </div>
  );
}
export default CarSelect;
