const mongoose = require("mongoose");

const rentalSchema = mongoose.Schema({
	startDate: Date,
	dueDate: Date,
	returnDate: Date,
	active: Boolean,
	totalCost: Number,
	paid: Boolean,
	amountDue: Number,
	user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
	tool: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tool'
  }
})

const Rental = new mongoose.model("Rental", rentalSchema);

module.exports = Rental;