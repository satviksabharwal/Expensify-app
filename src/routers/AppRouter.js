import React from "react";
import { Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
