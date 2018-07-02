import * as actionTypes from './actionTypes';

export const addExpense = (newExpense) => {
    return {
        type: actionTypes.ADD_EXPENSE,
        expense: newExpense
    }
}