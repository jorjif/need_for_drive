function RadioButton({ name, id, value, defaultChecked, children }) {
  return (
    <label className="order_cars_input radio_container">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="order_radio"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id} className="radio_label">
        {children}
      </label>
      <span className="radio_checkmark"></span>
    </label>
  );
}

export default RadioButton;
