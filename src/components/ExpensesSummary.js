import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import "../styles/component/page-header.css";
import "../styles/component/button.css";

const ExpensesSummary = ({ expenseCount, expensestotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensestotal).format("₹0,00,000.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span className="text-highlight">{expenseCount}</span>{" "}
          {expenseWord} totalling{" "}
          <span className="text-highlight">₹{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expense, state.filter);
  return {
    expenseCount: visibleExpenses.length,
    expensestotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
