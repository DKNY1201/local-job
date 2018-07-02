import * as actionTypes from '../actions/actionTypes';

const initState = {
    expenses: [
        {
            id: 1,
            type: 'fixed',
            value: 1800,
            name: 'Student Loan',
            date: '06/01/2018',
            description: '',
            category: 'study'
        },
        {
            id: 2,
            type: 'fixed',
            value: 300,
            name: 'Car Loan',
            date: '06/01/2018',
            description: '',
            category: 'life'
        },
        {
            id: 3,
            type: 'flexible',
            value: 20,
            name: 'Starbucks',
            date: '06/01/2018',
            description: 'with MUM friends',
            category: 'for_fun'
        }
    ],
    totalFixExpenses: 0,
    totalFlexibleExpenses: 0,
    totalExpenses: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.expense]
            };
            default:
                return state;
    }
}

export default reducer;