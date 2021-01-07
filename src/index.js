import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import {Provider} from 'react-redux';
import "./index.css";
import "normalize.css/normalize.css";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
// import { setTextFilter } from "./actions/filters";
import getVisibleExpense from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount : 200 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount : 1095 }));

const state = store.getState();
const visibleExpense = getVisibleExpense(state.expense, state.filter);
console.log(visibleExpense);

const jsx = (
    <Provider store ={store}>
    <AppRouter />
    </Provider>

); 


ReactDOM.render(jsx, document.getElementById("root"));
