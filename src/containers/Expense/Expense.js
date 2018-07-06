import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

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
});

const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
	{
		value: 'BTC',
		label: '฿',
	},
	{
		value: 'JPY',
		label: '¥',
	},
];

class ComposedTextField extends React.Component {
	state = {
		name: 'Composed TextField',
		form: {
			type: ''
		}
	};

	handleChange = event => {
		this.setState({name: event.target.value});
	};

	handleSelectType = event => {
		this.setState({
			form: {
				type: event.target.value
			}
		})
	}

	handleSubmit = () => {

	}

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.container}>
				<form className="classes.form" onsubmit={this.handleSubmit}>
					<FormGroup>
						<FormControl required className={classes.formControl}>
							<InputLabel htmlFor="type">Type</InputLabel>
							<Select
								value={this.state.form.type}
								onChange={this.handleSelectType}
								id="type"
								name="type"
								className={classes.selectEmpty}
							>
								<MenuItem value={'fixed'}>Fixed</MenuItem>
								<MenuItem value={'flexible'}>Flexible</MenuItem>
							</Select>
							<FormHelperText>Required</FormHelperText>
						</FormControl>
					</FormGroup>

					<FormGroup>
						<FormControl required className={classes.formControl}>
							<InputLabel htmlFor="amount">Amount</InputLabel>
							<Input id="amount" name="amount" value="adds" onChange=""/>
						</FormControl>
					</FormGroup>

					<FormGroup>
						<FormControl required className={classes.formControl}>
							<InputLabel htmlFor="For">For</InputLabel>
							<Input id="for" name="for" value="adds" onChange=""/>
						</FormControl>
					</FormGroup>

					<FormGroup>
						<TextField
							id="date"
							label="Date"
							type="date"
							defaultValue="2017-05-24"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</FormGroup>

					<FormGroup>
						<TextField
							id="description"
							label="Description"
							defaultValue="Enter Description"
							className={classes.textField}
							margin="normal"
						  multiline
							rows="4"
						/>
					</FormGroup>

					<TextField
						id="select-currency"
						select
						label="Select"
						className={classes.textField}
						value={this.state.currency}
						// onChange={this.handleChange('currency')}
						SelectProps={{
							MenuProps: {
								className: classes.menu,
							},
						}}
						helperText="Please select your currency"
						margin="normal"
					>
						{currencies.map(option => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>

				</form>
			</div>
		);
	}
}

ComposedTextField.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);
