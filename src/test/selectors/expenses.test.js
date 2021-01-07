import selectExpenses from '../../selectors/expenses';

const expense = [{
    id: 1,
    description : 'Gas Bill',
    note : '',
    amount : 4500,
    createdAt : 1000
},
{
    id : 2,
    description : 'Rent',
    note : '',
    amount : 1200,
    createdAt : -100
},
{
    id : 3,
    description : 'Credit Card',
    note : '',
    amount : 900,
    createdAt : 0
}
]

test('should filter by text value', () => {

    const filters = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };

    const result = selectExpenses(expense, filters);

    expect(result).toEqual([expense[2], expense[1]]);

});