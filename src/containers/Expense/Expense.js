import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as data from '../../shared/data';
import * as utils from '../../shared/utils';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddEditExpense from '../../components/Expense/AddEditExpense/AddEditExpense';
import {Route, Switch} from 'react-router-dom';
import ComponentDialog from '../../components/UI/ComponentDialog/ComponentDialog';

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});

class Expense extends Component {
	state = {
		fixedExpenses: [],
		flexibleExpenses: [],
	};

	componentDidMount() {
		this.props.onInitFetchingExpense();
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (!this.state.updated) {
	// 		const fixedExpenses = [];
	// 		const flexibleExpenses = [];
	// 		for (const expense of nextProps.expenses) {
	// 			if (expense.type === 'fixed') {
	// 				fixedExpenses.push(expense);
	// 			} else if (expense.type === 'flexible') {
	// 				flexibleExpenses.push(expense);
	// 			}
	// 		}
	//
	// 		this.setState({
	// 			...this.state,
	// 			fixedExpenses: fixedExpenses,
	// 			flexibleExpenses: flexibleExpenses,
	// 			updated: true
	// 		});
	// 		return true;
	// 	}
	// 	return false;
	// }

	handleOpenDialog = () => {
		this.setState({ open: true });
	};

	handleCloseDialog = () => {
		this.setState({ open: false });
	};

	handleEditExpense = (id) => {
		this.props.history.push(this.props.match.url + '/edit/' + id);
	};

	render() {
		const {classes} = this.props;

		return (
			<Fragment>
				<Grid item xs={12}>
					<h3>Fixed Expenses</h3>
					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<CustomTableCell>Amount</CustomTableCell>
									<CustomTableCell>Reason</CustomTableCell>
									<CustomTableCell>Date</CustomTableCell>
									<CustomTableCell>Description</CustomTableCell>
									<CustomTableCell>Category</CustomTableCell>
									<CustomTableCell>Action</CustomTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.props.expenses.map(expense => {
									if (expense.type === 'fixed') {
										return (
											<TableRow className={classes.row} key={expense._id}>
												<CustomTableCell>${expense.amount}</CustomTableCell>
												<CustomTableCell>{expense.reason}</CustomTableCell>
												<CustomTableCell>{utils.formatDate(expense.date)}</CustomTableCell>
												<CustomTableCell>{expense.description}</CustomTableCell>
												<CustomTableCell>{data.categories.find(cat => cat.value === expense.category).label}</CustomTableCell>
												<CustomTableCell>
													<IconButton className={classes.button} aria-label="Edit" color="primary" onClick={() => this.handleEditExpense(expense._id)}>
														<EditIcon />
													</IconButton>
													<IconButton className={classes.button} aria-label="Delete" color="primary">
														<DeleteIcon />
													</IconButton>
												</CustomTableCell>
											</TableRow>
										);
									}
								})}
							</TableBody>
						</Table>
					</Paper>
				</Grid>

				<Grid item xs={12}>
					<h3>Flexible Expenses</h3>
					<Paper className={classes.root}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow>
									<CustomTableCell>Type</CustomTableCell>
									<CustomTableCell>Amount</CustomTableCell>
									<CustomTableCell>Reason</CustomTableCell>
									<CustomTableCell>Date</CustomTableCell>
									<CustomTableCell>Description</CustomTableCell>
									<CustomTableCell>Category</CustomTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.props.expenses.map(expense => {
									if (expense.type === 'flexible') {
										return (
											<TableRow className={classes.row} key={expense._id}>
												<CustomTableCell>{expense.type}</CustomTableCell>
												<CustomTableCell>{expense.amount}</CustomTableCell>
												<CustomTableCell>{expense.reason}</CustomTableCell>
												<CustomTableCell>{expense.date}</CustomTableCell>
												<CustomTableCell>{expense.description}</CustomTableCell>
												<CustomTableCell>{expense.category}</CustomTableCell>
											</TableRow>
										);
									}
								})}
							</TableBody>
						</Table>
					</Paper>
				</Grid>

				<Switch>
					<Route path={this.props.match.url + '/edit/:id'} component={
						() => <ComponentDialog component={AddEditExpense} edit title="Edit expense"/>
					} />
				</Switch>


			</Fragment>
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
