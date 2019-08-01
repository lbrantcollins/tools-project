const express 		= require("express");
const router 		= express.Router();
const User			= require("../models/user");
const Tool			= require("../models/tool");
const Item			= require("../models/item");
const Rental		= require("../models/rental");


router.get("/", (req, res, next) => {
	console.log("in res render admin home page");
	res.render("./admins/home.ejs")
})

// *********************************************
// # 3
// *********************************************
// admin sees list of all rented items,
// selects those to be returned and submits

// result is a return for each item selected
// 		set rental.active = false
// result is a calculated amount due (cost + late fee)
// 		set rental.cost = tool.cost + (days late) * tools.lateFee
// *********************************************

// *** PSEUDOCODE ***
// admin returns item
// render page (for ADMINS only, others redirect to home page)
// ******************
// find all rentals
router.get("/rentals", async (req, res, next) => {
	try {
		const rentalsFound = await Rental.find({
			active: true
		})
		console.log("\nrentals found for admin show route");
		console.log("\--------------------------");
		console.log(rentalsFound);

		// can only view rentals list if logged in as ADMIN
		if (req.session.admin) {
			res.render("./admins/index_rentals.ejs",
				{
					rentals: rentalsFound
				});
		} else {
			res.redirect("/");
		}
	} catch(err) {
		next(err)
	}
})


// populate each rental with item "rented" field
// subpopulate each rental with tool fields
// (show page limits display to rented items)










//later
// user index/search
/// Account situation for one particular user


module.exports = router;