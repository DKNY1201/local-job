import * as actionTypes from '../actions/actionTypes';

const initState = {
	expenses: [],
	totalFixExpenses: 0,
	totalFlexibleExpenses: 0,
	totalExpenses: 0,
	editingExpense: null,
  error: null,
	loading: false
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.START_LOADING:
			return {
				...state,
				error: null,
				loading: true
			};
		case actionTypes.LOADING_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			};
		case actionTypes.ADD_EXPENSE_SUCCESS:
			return {
				...state,
				expenses: [...state.expenses, action.expense],
				loading: false
			};
		case actionTypes.FETCH_EXPENSE_SUCCESS:
			return {
				...state,
				expenses: action.expenses,
				loading: false
			};
		case actionTypes.FETCH_EXPENSE_BY_ID_SUCCESS:
			return {
				...state,
				editingExpense: action.expense,
				loading: false
			};
		default:
			return state;
	}
}

export default reducer;