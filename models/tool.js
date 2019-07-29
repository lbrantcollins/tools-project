const mongoose = require('mongoose')

const toolSchema = new mongoose.Schema({
	name: String,
	type: String,
	rentalCost: Number,
	lateFee: Number,
	description: String,
	url: String,
	rented: Boolean
})

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;