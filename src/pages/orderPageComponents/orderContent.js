import { Route, Switch } from "react-router-dom";
import AdressPage from "./orderWindows/adressPage";
function OrderContent(props) {
  return (
    <div>
      <Switch>
        <Route path="order/cars" />
        <Route path="/order/adress" render={() => <AdressPage />} />
        <Route path="/order/" />
      </Switch>
    </div>
  );
}

export default OrderContent;
