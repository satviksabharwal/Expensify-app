import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return(
    <div>
    <h1>Expense List</h1>
    {props.expense.map((expenses) => {
        return <ExpenseListItem key={expenses.id} {...expenses}/>
    })}
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
     expense : selectExpenses(state.expense, state.filter)
    };   
 }

export default connect(mapStateToProps)(ExpenseList);
