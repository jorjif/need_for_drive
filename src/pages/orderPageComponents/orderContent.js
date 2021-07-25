import { Route, Switch } from "react-router-dom";
import AdressPage from "./orderWindows/adressPage";
import CarsPage from "./orderWindows/carSelectPage";
import OptionsPage from "./orderWindows/optionsPage";
function OrderContent(props) {
  return (
    <Switch>
      <Route path="/order/options/" render={() => <OptionsPage />} />
      <Route path="/order/cars/" render={() => <CarsPage />} />
      <Route path="/order/adress/" render={() => <AdressPage />} />
      <Route path="/order/" render={() => <AdressPage />} />
    </Switch>
  );
}

export default OrderContent;
