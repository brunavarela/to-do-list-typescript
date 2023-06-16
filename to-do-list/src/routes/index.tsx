import { Route, Switch } from "react-router-dom";
import { Login } from "../components/Login";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
  </Switch>
);
