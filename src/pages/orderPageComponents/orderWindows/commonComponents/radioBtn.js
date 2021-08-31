/**
 *
 * @param {*} props получает на вход name, id, value, checked, onClick
 *  и использует проп children для текста в кнопке
 * @returns радио кнопку, которые можно через name объединить в один сет
 */
function RadioButton({
  name,
  id,
  value,
  defaultChecked,
  children,
  checked,
  onClick,
}) {
  return (
    <label className="order_cars_input radio_container">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="order_radio"
        defaultChecked={defaultChecked}
        checked={checked}
        onClick={onClick}
      />
      <label htmlFor={id} className="radio_label">
        {children}
      </label>
      <span className="radio_checkmark"></span>
    </label>
  );
}

export default RadioButton;
