import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters  from './ExpenseListFilters';


const ExpenseDashboardpage = (props) => {
    console.log(props);   
    return(
    <div>
    <ExpenseListFilters />
    <ExpenseList />
    </div>
    );
}
export default ExpenseDashboardpage;
