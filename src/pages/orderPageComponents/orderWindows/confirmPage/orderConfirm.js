import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeStatus } from "../../../../store/order/confirmation";
import {
  useGetOrderStatusQuery,
  usePostOrderQuery,
} from "../../../../store/order/carStore";

export default function OrderConfirm() {
  const { carModel, carImg, plate, fuel } = useSelector((store) => store.car);
  const { from } = useSelector((store) => store.options.date);
  const dispatch = useDispatch();
  //данные для заказа
  const { cityId, pointId } = useSelector((store) => store.adress);
  const { id } = useSelector((store) => store.car);
  const { date, color, tariffId, isFullTank, isNeedChildChair, isRightWheel } =
    useSelector((store) => store.options);
  const { startPrice } = useSelector((store) => store.price);
  const { orderConfirmed } = useSelector((store) => store.status);

  const status = useGetOrderStatusQuery();
  const { data, isSuccess } = usePostOrderQuery(
    {
      orderStatusId: status.data.data[1],
      cityId: { id: cityId },
      pointId: { id: pointId },
      carId: { id: id },
      color: color,
      dateFrom: date.from,
      dateTo: 0,
      rateId: { id: tariffId },
      price: startPrice,
      isFullTank: isFullTank.status,
      isNeedChildChair: isNeedChildChair.status,
      isRightWheel: isRightWheel.status,
    },
    { skip: !orderConfirmed }
  );

  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("complete"));
  }, [dispatch]);

  return (
    <div className="order_confirm">
      <div className="order_confirm_info">
        <h1 className="order_confirm_info_car">{carModel}</h1>
        <p className="order_confirm_info_plate">{plate}</p>
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
