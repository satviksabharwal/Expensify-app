import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('test should generate set Start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate : moment(0)
    });
});

test('test should generate set End date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate : moment(0)
    });
});

test('test should generate sort by  date action object',() => {
    const action = sortByDate();
    expect(action).toEqual({
        type : 'SORT_BY_DATE'
    });

});

test('test should generate Sort by amount action object',() => {
    const action = sortByAmount();
    expect(sortByAmount()).toEqual({type : 'SORT_BY_AMOUNT'});

});


test('test should genrate text filter action object by providing value', () => {
    const text = 'Text Dummy'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text
    });
});

test('test should genrate text filter action object by providing value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type : 'SET_TEXT_FILTER',
        text : ''
    });
});
