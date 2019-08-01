const mongoose = require("mongoose");

const rentalSchema = mongoose.Schema({
	startDate: String,
	dueDate: String,
	returnDate: String,
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