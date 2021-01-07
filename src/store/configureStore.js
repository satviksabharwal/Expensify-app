import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expense";
import filterReducer from "../reducers/filter";

export default () => {
  //store creation
  const store = createStore(
    combineReducers({
      expense: expenseReducer,
      filter: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
