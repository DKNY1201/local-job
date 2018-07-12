import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class ComponentDialog extends Component {
	state = {
		open: true,
	}

	handleCloseDialog = () => {
		this.setState({
			...this.state,
			open: false
		});
	}

	render() {
		const C = this.props.component;
		return (
			<Dialog
				open={this.state.open}
				onClose={this.handleCloseDialog}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
				<DialogContent>
					<C {...this.props}/>
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
	}
}


export default ComponentDialog;