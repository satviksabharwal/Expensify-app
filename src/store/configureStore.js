import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expenseReducer from "../reducers/expense";
import filterReducer from "../reducers/filter";
import authReducer from '../reducers/auth';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      expense: expenseReducer,
      filter: filterReducer,
      auth: authReducer 
    }),
    
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&, applyMiddleware window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};