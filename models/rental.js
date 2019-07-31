const mongoose = require("mongoose");

const rentalSchema = mongoose.Schema({
	startDate: Date,
	dueDate: Date,
	returnDate: Date,
	active: Boolean,
	// totalCost: Number,
	paid: Boolean,
	amountDue: Number, //tool.rentalCost + calculated lateFee
	user: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'User'
   },
   item: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Item'
   }
})

const Rental = new mongoose.model("Rental", rentalSchema);

module.exports = Rental;