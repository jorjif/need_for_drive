import { Route, Switch } from "react-router-dom";
import AdressPage from "./orderWindows/adressPage";
import CarsPage from "./orderWindows/carSelectPage";
function OrderContent(props) {
  return (
    <div>
      <Switch>
        <Route path="/order/cars/" render={() => <CarsPage />} />
        <Route path="/order/adress/" render={() => <AdressPage />} />
        <Route path="/order/" render={() => <AdressPage />} />
      </Switch>
    </div>
  );
}

export default OrderContent;
