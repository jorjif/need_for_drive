import { Route, Switch } from "react-router-dom";
import AdressPage from "./orderWindows/adressPage";
import CarsPage from "./orderWindows/carSelectPage";
import OptionsPage from "./orderWindows/optionsPage";
import OrderConfirmPage from "./orderWindows/orderConfirmPage";
function OrderContent({ isConfirmed, confirmEvent }) {
  return (
    <Switch>
      <Route
        path="/order/confirm"
        render={() => (
          <OrderConfirmPage confirmEvent={confirmEvent} isConfirmed={isConfirmed} />
        )}
      />
      <Route path="/order/options/" render={() => <OptionsPage />} />
      <Route path="/order/cars/" render={() => <CarsPage />} />
      <Route path="/order/adress/" render={() => <AdressPage />} />
      <Route path="/order/" render={() => <AdressPage />} />
    </Switch>
  );
}

export default OrderContent;
