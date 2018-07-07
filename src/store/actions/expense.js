import * as actionTypes from './actionTypes';
import axios from '../../axios/expense-axios';

export const expenseAdded = (newExpense) => {
    return {
	    type: actionTypes.ADD_EXPENSE,
	    expense: newExpense
    }
}

export const addExpense = (newExpense) => {
    return dispatch => {
        axios.post('', newExpense)
          .then(res => {
              console.log(res);
              dispatch(expenseAdded(newExpense))
          })
          .catch(err => console.log(err));
    }
}