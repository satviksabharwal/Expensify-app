import React from 'react';

const Destructuring = () => {

    // OBJECT Destructuring

    // // const person = {
    // //     name : 'Satvik',
    // //     age : 23,
    // //     location : {
    // //         city: 'Bareilly',
    // //         temp: 9
    // //     }
    // // }

    // // const {name, age} = person;

    // // console.log(`${name} age is ${age}`);

    // const book = {
    //     title: 'Ego is the enemy',
    //     author: 'Ryan Holiday',
    //     publisher: {
    //         // name: 'Penguin'
    //     } 
    // };

    // const {name: publisherName = 'Self-published'} = book.publisher;

    // console.log(publisherName);

    // Array Destructuring

    const item = ['Coffee (hot)', ' $3.00', '$3.50', '$3.75'];
    const [menuItem, , mediumPrice] = item; 


    console.log(`A medium ${menuItem} costs ${mediumPrice}`);




















    return(
        <div>
        <h2>Destructuring</h2>
        </div>
    );

}

export default Destructuring;