import React from "react";
import { createStore } from "redux";

const Playground = () => {

    const incrementCount = ({ incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
    });

    const decrementCount = ({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
    });

    const reset = () => ({
        type : 'RESET'
    });

    const set = ({countTo}) => ({
        type : 'SET',
        countTo
    });

    const store = createStore((state = { count : 0}, action) => {

        switch(action.type){
            case 'INCREMENT':
                return{
                    count : state.count + action.incrementBy
                }
            case 'DECREMENT':
                return{
                    count : state.count-action.decrementBy
                }    
            case 'RESET':
                return{
                    count : 0
                } 
                case 'SET':
                    return{
                        count : action.countTo
                    }   
            default:
                return state;

        }
        
    });

   store.subscribe(() => {
        console.log(store.getState());
    });

    store.dispatch(incrementCount());

    store.dispatch(incrementCount( {incrementBy : 5}));

    store.dispatch(reset());

    store.dispatch(decrementCount());

    store.dispatch(decrementCount({decrementBy : 10}));

    store.dispatch(set({ countTo : 101}));

    return(
    <div>
    <h1>Redux!!</h1>
    </div>
);}

export default Playground;