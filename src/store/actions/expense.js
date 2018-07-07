import * as actionTypes from './actionTypes';
import axios from '../../axios/expense-axios';

export const startLoading = () => {
	return {
		type: actionTypes.START_LOADING
	};
}

export const loadingFail = () => {
	return {
		type: actionTypes.LOADING_FAIL
	};
}

export const addExpenseSuccess = (newExpense) => {
	return {
		type: actionTypes.ADD_EXPENSE_SUCCESS,
		expense: newExpense
	}
}

export const initAddingExpense = (newExpense) => {
	return dispatch => {
		dispatch(startLoading());
		axios.post('', newExpense)
			.then(res => {
				dispatch(addExpenseSuccess(res.data.expense));
			})
			.catch(err => {
				dispatch(loadingFail(err));
			});
	}
}

export const fetchExpenseSuccess = (expenses) => {
	return {
		type: actionTypes.FETCH_EXPENSE_SUCCESS,
		expenses: expenses
	}
}

export const initFetchingExpense = () => {
	return dispatch => {
		dispatch(startLoading());
		axios.get('')
			.then(res => {
				console.log(res);
				dispatch(fetchExpenseSuccess(res.data.expenses));
			})
			.catch(err => {
				dispatch(loadingFail(err));
			})
	}
}