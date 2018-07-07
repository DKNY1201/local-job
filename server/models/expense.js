const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.Schema({
	type: {type: String, required: true},
	amount: {type: Number, required: true},
	reason: {type: String, required: true},
	date: {type: String, required: true},
	description: {type: String, required: false},
	category: {type: String, required: true}
});

module.exports = mongoose.model('Expense', schema);
