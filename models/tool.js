const mongoose = require("mongoose");

const toolSchema = mongoose.Schema({
	itemName: String,
	itemType: String,
	instructions: String,
	available: Boolean,
	rentalCost: Number,
	lateFee: Number,
})

const Tool = new mongoose.model("Tool", toolSchema);

module.exports = Tool;