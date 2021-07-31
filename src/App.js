import MainPage from "./pages/mainComponents/mainPage.js";
import Order from "./pages/orderPageComponents/orderPage.js";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/order" render={(props) => <Order />} />
        <Route path="/" render={(props) => <MainPage />} />
      </Switch>
    </Router>
  );
}
export default App;
