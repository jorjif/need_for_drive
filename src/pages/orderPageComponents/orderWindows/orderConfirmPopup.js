import Button from "../../mainComponents/standartButton";
export default function ConfirmationPopup(props) {
  return (
    <div className={props.classes}>
      <div className="order_confirm_popup_content">
        <h1>Подтвердить заказ</h1>
        <div className="order_confirm_popup_buttons">
          <Button
            classes="order_confirm_popup_accept"
            msg="Подтвердить"
            pressed="order_confirm_popup_accept_pressed"
            onClick={props.confirmEvent}
          />
          <Button
            classes="order_confirm_popup_cancel"
            pressed="order_confirm_popup_cancel_pressed"
            msg="Вернуться"
            onClick={props.cancelEvent}
          />
        </div>
      </div>
    </div>
  );
}
