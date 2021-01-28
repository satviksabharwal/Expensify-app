import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import "../styles/component/visibility.css";
import "../styles/component/list.css";

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expense.length === 0 ? (
        <div>
          <span className="list-item list-item--message">No Expenses</span>
        </div>
      ) : (
        props.expense.map((expenses) => {
          return <ExpenseListItem key={expenses.id} {...expenses} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expense: selectExpenses(state.expense, state.filter),
  };
};

export default connect(mapStateToProps)(ExpenseList);
