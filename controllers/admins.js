const express 		= require("express");
const router 		= express.Router();
const User			= require("../models/user");
const Tool			= require("../models/tool");
const Item			= require("../models/item");
const Rental		= require("../models/rental");


router.get("/", (req, res, next) => {
	console.log("in res render admin home page");
	if (req.session.admin === true) {
			res.render("admins/home.ejs");
		} else {
			res.redirect("/tools");
		}
})

// *********************************************
// # 3
// *********************************************
// admin sees list of all rented items,
// selects those to be returned and submits

// result is a return for each item selected
// 		set rental.active = false
// result is a calculated amount due (cost + late fee)
// 		calc: rental.amountDue 
//				= tool.rentalCost + (days late) * tool.lateFee
//			add this amount to user.balance
// *********************************************

// *** PSEUDOCODE ***
// admin returns item
// render page (for ADMINS only, others redirect to home page)
// ******************
// find all rentals
router.get("/rentals", async (req, res, next) => {
	try {
		// find all rentals and for each rental
		// populate the user info via the user id ref in rental
		// sub-populate the tool info via the item id ref in rental
		const rentalsFound = await Rental.find({
			active: true
		}).populate('user').populate({
			path: 'item', 
			populate: {path: 'tool'}
		})

		// console.dir(rentalsFound);

		// can only view rentals list if logged in as ADMIN
		if (req.session.admin === true) {
			res.render("admins/index_rentals.ejs",
				{
					rentals: rentalsFound
				});
		} else {
			res.redirect("/tools");
		}
	} catch(err) {
		next(err)
	}
})

// update a rental to mark as returned
// (and mark the item as available)
router.put("/rentals", async (req, res, next) => {
	try {
		// locate the item being returned
		// populate the user info via the user id ref in rental
		// sub-populate the tool info via the item id ref in rental
		const rentalFound = await Rental.findOne({
			_id: req.body.rentalId
		}).populate('user').populate({
			path: 'item', 
			populate: {path: 'tool'}
		})

		// mark the item as returned (not yet paid)
		rentalFound.active = false;
		// we still keep the rental entry in the db 
		// so that users can always see their history of rentals 
		// (and amt due, if any)

		// *******************************************************
		// ******** NEED TO CALCULATE LATE FEE USING DATES *******
		// lateFee = (# days late) * rentalFound.tool.lateFee
		lateFee = 0;
		// *******************************************************
		rentalFound.amountDue = rentalFound.item.tool.rentalCost + lateFee

		rentalFound.returnDate = new Date();

		// save the rental information
		await rentalFound.save();

		// mark the item as available
		const itemFound = await Item.findOne({
			_id: rentalFound.item
		})
		itemFound.rented = false;
		// save the item information
		await itemFound.save();

		res.redirect("/admins/rentals");
	} catch(err) {
		next(err);
	}
})











//later
// user index/search
/// Account situation for one particular user


module.exports = router;