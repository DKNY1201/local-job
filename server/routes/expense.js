var express = require('express');
var router = express.Router();

const Expense = require('../models/expense');

router.post('/', (req, res, next) => {
	const expense = new Expense({
		type: req.body.type,
		amount: +req.body.amount,
		reason: req.body.reason,
		date: req.body.date,
		description: req.body.description,
		category: req.body.category,
	});

	expense.save((err, expense) => {
		if (err) {
			return res.status(500).json({
				title: 'Error happened when creating new Expense',
				error: err
			});
		}
		res.status(201).json({
			message: 'Expense created',
			expense: expense
		});
	})
});

router.get('/', (req, res, next) => {
	Expense.find({}, (err, expenses) => {
		if (err) {
			return res.status(500).json({
				title: 'Error happened when fetching Expenses',
				error: err
			});
		}

		if (expenses) {
			return res.status(200).json({
				message: 'Expenses found',
				expenses: expenses
			});
		}

		return res.json({
			message: 'Expenses not found',
			expenses: null
		});
	});
});

module.exports = router;
