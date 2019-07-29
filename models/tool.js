const mongoose = require('mongoose')

const toolSchema = new mongoose.Schema({
	name: String,
	type: String,
	rental_cost: Number,
	late_fee: Number,
	description: String,
	url: String,
	rented: Boolean
})

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;