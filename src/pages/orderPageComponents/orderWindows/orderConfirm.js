export default function OrderConfirm(props) {
  return (
    <div className="order_confirm">
      <div className="order_confirm_info">
        <h1 className="order_confirm_info_car">{props.info.model}</h1>
        <p className="order_confirm_info_plate">{props.info.number}</p>
        <p className="order_confirm_info_additional">
          <span>Топливо:</span>
          {props.info.fuel}%
        </p>
        <p className="order_confirm_info_additional">
          <span>Доступна с</span>
          {props.info.time}
        </p>
      </div>
      <div className="order_confirm_car">
        <img src={props.image} alt="Фото машины" />
      </div>
    </div>
  );
}
