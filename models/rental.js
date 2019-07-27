const mongoose = require("mongoose");

const rentalSchema = mongoose.Schema({
	startDate: Date,
	dueData: Date,
	returnDate: Date,
	active: Boolean,
	totalCost: Number,
	paid: Boolean,
	AmountDue: Number,
	user: {
    type: mongoose.Schema.Types.ObjectId,  // ._id
    ref: 'User'
  },
	admin: {
    type: mongoose.Schema.Types.ObjectId,  // ._id
    ref: 'Admin'
  }
})

const Rental = new mongoose.model("Rental", rentalSchema);

module.exports = Rental;