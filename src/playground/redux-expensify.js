import React from "react";
import {createStore, combineReducers} from 'redux';
import { v4 as uuid} from 'uuid';

const PlaygroundExpensify = () => {


    //ADD_Expense
    const addExpense = ({
        description = '',
        note = '',
        amount = 0,
        createdAt = 0

    } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });

    //Remove Expense
    const removeExpense = ({id} = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    });

    //edit Expense
    const editExpense = (id, updates) => ({
        type : 'EDIT_EXPENSE',
        id, 
        updates
    });

    //Set Text Filter
    const setTextFilter = (text = '') => ({
        type: 'SET_TEXT_FILTER',
        text
    });

    //Sort By Amount
    const sortByAmount = () => ({
        type : 'SORT_BY_AMOUNT'
    });
    //Sort by Date
    const sortByDate = () => ({
        type: 'SORT_BY_DATE'
    });

    //Set Start Date
    const setStartDate = (startDate) => ({
        type : 'SET_START_DATE',
        startDate
    });

    //Set End Date
    const setEndDate = (endDate) => ({
        type : 'SET_END_DATE',
        endDate    
    });


    //expense Reducer
    const expenseReducerDefaultState = [];

    const expenseReducer = (state = expenseReducerDefaultState, action) => {

        switch(action.type){

            case 'ADD_EXPENSE':
                return [
                    ...state,
                    action.expense
                ];

                case 'REMOVE_EXPENSE':
                    return state.filter(({id}) => id !== action.id);

                    case 'EDIT_EXPENSE':
                        return state.map((expense) => {

                            if(expense.id === action.id){
                                return {
                                    ...expense,
                                    ...action.updates
                                }
                            }else{
                                return expense;
                            }

                        });
            default : 
            return state;

        }

    };


     //filter reducer
     const filterReducerDefaultState = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
     };

     const filterReducer = (state = filterReducerDefaultState, action) => {
        switch(action.type){
            case 'SET_TEXT_FILTER':
                return {
                    ...state,
                    text: action.text
                };

                case 'SORT_BY_AMOUNT':
                    return {
                        ...state,
                        sortBy : 'amount'
                    };

                    case 'SORT_BY_DATE' : 
                    return{
                        ...state,
                        sortBy : 'date'
                    };

                    case 'SET_START_DATE' : 
                    return{
                        ...state,
                        startDate : action.startDate
                    };
                    case 'SET_END_DATE' :
                        return{
                            ...state,
                            endDate : action.endDate
                        }
            default : 
            return state;

        }
     }

     //Get visible expenses
     const getVisibleExpenses = (expense, {text, sortBy, startDate, endDate}) => {
        return expense.filter((expenses) => {

            const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate; 
            const textMatch = expenses.description.toLowerCase().includes(text.toLowerCase());


            return startDateMatch && endDateMatch && textMatch;
        }).sort((a, b) => {
            if(sortBy === 'date'){
                return a.createdAt < b.createdAt ? 1 : -1;
            }
            else if(sortBy === 'amount'){
                return a.amount < b.amount ? 1 : -1;
            }
        });
     }; 


     //store creation
    const store = createStore(combineReducers({
        expense: expenseReducer,
        filter: filterReducer 
    }
    ));

    store.subscribe(() => {
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expense, state.filter);
        console.log(visibleExpenses);
    });
    
    const expenseTwo = store.dispatch(addExpense({
        description : 'Rent',
        amount : 100,
        createdAt : 5000
    }));

    const expenseOne = store.dispatch(addExpense({
        description:'Coffee',
        amount: 300,
        createdAt : 500
    }));

    // store.dispatch(removeExpense({id: expenseOne.expense.id}));
    // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

    // store.dispatch(setTextFilter('dot'));
    // store.dispatch(setTextFilter());

    store.dispatch(sortByAmount());

    // store.dispatch(setStartDate(-2000));
    // // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(2000));
    // store.dispatch(sortByDate());
    // store.dispatch(setTextFilter('cof'));




    return(
        <div>
        <h1>Redux!!</h1>
        </div>
    );}
    
    export default PlaygroundExpensify;