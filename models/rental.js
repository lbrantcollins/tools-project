const mongoose = require("mongoose");

const rentalSchema = mongoose.Schema({
	startDate: Date,
	dueDate: Date,
	returnDate: Date,
	active: Boolean,
	paid: Boolean,
	amountDue: Number, //rentalCost + calculated lateFee
	rentalCost: Number, // store cost as at time of rental
	lateFee: Number, // store the fee as at time of rental
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