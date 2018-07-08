import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions';
import * as utils from '../../../shared/utils';
import * as data from '../../../shared/data';

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

class AddExpense extends Component {
	state = {
		form: {
			type: data.types[0].value,
			amount: '',
			reason: '',
			date: '',
			description: '',
			category: data.categories[0].value,
		}
	};

	componentDidMount() {
		this.setState({
			...this.state,
			form: {
				...this.state.form,
				date: utils.getToday()
			}
		});
	}

	handleChange = event => {
		this.setState({
			...this.state,
			form: {
				...this.state.form,
				[event.target.name]: event.target.value
			}
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onAddExpense(this.state.form);
	}

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.container}>
				<h3>Add new Expense</h3>
				<form className="classes.form" onSubmit={this.handleSubmit}>
					<FormGroup>
						<TextField
							id="type"
							name="type"
							select
							required
							label="Select Type"
							className={classes.textField}
							value={this.state.form.type}
							onChange={this.handleChange}
							helperText="Please select expense type"
							margin="normal"
						>
							{data.types.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</FormGroup>

					<FormGroup>
						<TextField
							required
							name="amount"
							label="Amount"
							placeholder="Enter amount"
							className={classes.textField}
							margin="normal"
							type="number"
							value={this.state.form.amount}
							onChange={this.handleChange}
							InputProps={{
								startAdornment: <InputAdornment position="start">$</InputAdornment>
							}}
						/>
					</FormGroup>

					<FormGroup>
						<TextField
							required
							name="reason"
							label="Reason"
							placeholder="Enter reason"
							value={this.state.form.reason}
							onChange={this.handleChange}
							className={classes.textField}
							margin="normal"
						/>
					</FormGroup>

					<FormGroup>
						<TextField
							required
							name="date"
							label="Date"
							type="date"
							value={this.state.form.date}
							onChange={this.handleChange}
							className={classes.textField}
						/>
					</FormGroup>

					<FormGroup>
						<TextField
							name="description"
							label="Description"
							placeholder="Enter Description"
							value={this.state.form.description}
							onChange={this.handleChange}
							className={classes.textField}
							margin="normal"
							multiline
							rows="4"
						/>
					</FormGroup>

					<FormGroup>
						<TextField
							name="category"
							select
							required
							label="Select"
							className={classes.textField}
							value={this.state.form.category}
							onChange={this.handleChange}
							SelectProps={{
								MenuProps: {
									className: classes.menu,
								},
							}}
							helperText="Please select expense category"
							margin="normal"
						>
							{data.categories.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</FormGroup>
					<Button type="submit" variant="contained" color="primary">
						Add Expense
					</Button>
				</form>
			</div>
		);
	}
}

AddExpense.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		expenses: state.expense.expenses
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddExpense: (expense) => dispatch(actions.initAddingExpense(expense))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddExpense));
