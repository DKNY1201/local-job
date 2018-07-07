import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import AddExpense from '../../components/Expense/AddExpense/AddExpense';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing.unit * 2,
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
});

class Expense extends Component {
	componentDidMount() {
			this.props.onInitFetchingExpense();
	}

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.container}>
				<h3>Expenses</h3>
				<div>
					{
						this.props.expenses.map(expense => expense.reason + ' | ')
					}
				</div>
				<AddExpense/>
			</div>
		);
	}
}

Expense.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		expenses: state.expense.expenses
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onInitFetchingExpense: () => dispatch(actions.initFetchingExpense())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Expense));
