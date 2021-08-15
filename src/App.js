import MainPage from "./pages/mainComponents/mainPage.js";
import Order from "./pages/orderPageComponents/orderPage.js";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/order/" render={(props) => <Order />} />
          <Route path="/" render={(props) => <MainPage />} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
