import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import {Provider} from 'react-redux';
import "./index.css";
import "normalize.css/normalize.css";
import configureStore from "./store/configureStore";

const store = configureStore();

console.log("test");
const jsx = (
    <Provider store ={store}>
    <AppRouter />
    </Provider>

); 


ReactDOM.render(jsx, document.getElementById("root"));
