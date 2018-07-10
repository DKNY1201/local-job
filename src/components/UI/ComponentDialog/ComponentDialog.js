import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import AddExpense from '../../Expense/AddExpense/AddExpense';

const componentDialog = (props) => (
	<Dialog
		open
		onClose={this.handleCloseDialog}
		aria-labelledby="form-dialog-title"
	>
		<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
		<DialogContent>
			{/*{props.component}*/}
			<AddExpense />
		</DialogContent>
		<DialogActions>
			<Button onClick={this.handleCloseDialog} color="primary">
				Cancel
			</Button>
			<Button onClick={this.handleCloseDialog} color="primary">
				Subscribe
			</Button>
		</DialogActions>
	</Dialog>
);

export default componentDialog;