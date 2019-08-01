const express 		= require("express");
const router 		= express.Router();
const User			= require("../models/user");
const Tool			= require("../models/tool");
const Item			= require("../models/item");
const Rental		= require("../models/rental");


router.get("/", (req, res, next) => {
	console.log("in res render admin home page");
	if (req.session.admin === true) {
			res.render("admins/home.ejs",
				{
					rentals: rentalsFound
				});
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

router.post("/rentals", async (req, res, next) => {
	try {
		
		res.redirect("/rentals")
	} catch(err) {
		next(err);
	}
})

// populate each rental with item "rented" field
// subpopulate each rental with tool fields
// (show page limits display to rented items)










//later
// user index/search
/// Account situation for one particular user


module.exports = router;