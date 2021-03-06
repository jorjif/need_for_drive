import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeStatus } from "../../../../store/order/confirmation";
export default function OrderConfirm({ info: { number, fuel } }) {
  const { carModel, carImg } = useSelector((store) => store.car);
  const { from } = useSelector((store) => store.options.date);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("complete"));
  }, []);
  return (
    <div className="order_confirm">
      <div className="order_confirm_info">
        <h1 className="order_confirm_info_car">{carModel}</h1>
        <p className="order_confirm_info_plate">{number}</p>
        <p className="order_confirm_info_additional">
          <span>Топливо </span>
          {fuel}%
        </p>
        <p className="order_confirm_info_additional">
          <span>Доступна с </span>
          {from}
        </p>
      </div>
      <div className="order_confirm_car">
        <img src={carImg} alt="Фото машины" />
      </div>
    </div>
  );
}
