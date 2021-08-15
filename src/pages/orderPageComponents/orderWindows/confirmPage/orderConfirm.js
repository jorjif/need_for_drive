export default function OrderConfirm({
  info: { model, number, fuel, time },
  image,
}) {
  return (
    <div className="order_confirm">
      <div className="order_confirm_info">
        <h1 className="order_confirm_info_car">{model}</h1>
        <p className="order_confirm_info_plate">{number}</p>
        <p className="order_confirm_info_additional">
          <span>Топливо </span>
          {fuel}%
        </p>
        <p className="order_confirm_info_additional">
          <span>Доступна с </span>
          {time}
        </p>
      </div>
      <div className="order_confirm_car">
        <img src={image} alt="Фото машины" />
      </div>
    </div>
  );
}
