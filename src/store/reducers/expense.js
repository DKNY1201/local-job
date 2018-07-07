import * as actionTypes from '../actions/actionTypes';

const initState = {
    expenses: [
        {
            id: 1,
            type: 'fixed',
            amount: 1800,
            reason: 'Student Loan',
            date: '06/01/2018',
            description: '',
            category: 'study'
        },
        {
            id: 2,
            type: 'fixed',
	        amount: 300,
	        reason: 'Car Loan',
            date: '06/01/2018',
            description: '',
            category: 'life'
        },
        {
            id: 3,
            type: 'flexible',
	        amount: 20,
	        reason: 'Starbucks',
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