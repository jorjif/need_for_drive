import Button from "../../mainComponents/standartButton";
export default function ConfirmationPopup({ classes, confirmEvent, cancelEvent }) {
  return (
    <div className={classes}>
      <div className="order_confirm_popup_content">
        <h1>Подтвердить заказ</h1>
        <div className="order_confirm_popup_buttons">
          <Button
            classes="order_confirm_popup_accept"
            msg="Подтвердить"
            pressed="order_confirm_popup_accept_pressed"
            onClick={confirmEvent}
          />
          <Button
            classes="order_confirm_popup_cancel"
            pressed="order_confirm_popup_cancel_pressed"
            msg="Вернуться"
            onClick={cancelEvent}
          />
        </div>
      </div>
    </div>
  );
}
