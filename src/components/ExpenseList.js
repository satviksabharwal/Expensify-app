import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    {props.expense.length === 0 ? (<p>No Expenses</p>) : 
    (props.expense.map((expenses) => {
        return <ExpenseListItem key={expenses.id} {...expenses}/>
    }))}
    </div>
);

const mapStateToProps = (state) => {
    return {
     expense : selectExpenses(state.expense, state.filter)
    };   
 }

export default connect(mapStateToProps)(ExpenseList);
