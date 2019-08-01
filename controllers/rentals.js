const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const Rental		= require("../models/rental");
const Tool			= require("../models/tool");
const Item 			= require("../models/item");
const User 			= require("../models/user");

// create route (rent a tool)
// grab the first available item
// *********************************************
router.post("/", async (req, res, next) => {
	// assumption: template prevents you from even 
	// getting here if no items available for this tool
	console.log("req.body in rental create ------->\n", req.body);
	try {
		// find the first available item
		const availableItemsFound = await Item.find({
			tool: req.body.toolId,
			rented: false
		})
		// mark this item as rented
		availableItemsFound[0].rented = true;
		availableItemsFound[0].save();

		console.log("items found in rental create ------->\n", availableItemsFound);
		console.log("\nreq.session:");
		console.log(req.session);

		// find the id of the current user
		const userFound = await User.findOne({
			username: req.session.username
		})

		console.log("\nuser found in rental create ------->");
		console.log(userFound);
		// rental date is now
		d = new Date();
		// rental due date is 7 days from now
		d7 = new Date();
		d7.setDate(d7.getDate() + 7);
		// create a rental record for this item
		const rentalCreated = await Rental.create({
				startDate: d,
				dueDate: d7,
				returnDate: undefined,
				active: true,
				// totalCost: Number,
				paid: false,
				amountDue: undefined, 
				user: userFound,
			   item: availableItemsFound[0]
			});
		// res.redirect("/rentals/active");
		console.log("\n-------- rental created!\n");
		console.log(rentalCreated);
		res.send('check terminal')
	} catch(err) {
		next(err);
	}
})


// index route: show all of user's active rentals
router.get("/active", async (req, res, next) => {
	try {
		const foundRentals = await Rental.find({
			active: true
		})
		//.populate(Item.populate(Tool)) subpopulate
		// https://mongoosejs.com/docs/populate.html
		// limit list of found rentals to those by this user
		console.log(foundRentals);
		res.render("rentals/index_active.ejs",
			{
				rentals: foundRentals
			});
	} catch(err) {
		next(err)
	}
})

// index route: show all of user's past/returned rentals
router.get("/history", async (req, res, next) => {
	try {

		const foundRentals = await Rental.find({
			active: false
			// add user id from session here
		})
		//.populate(Item.populate(Tool)) subpopulate
		// limit list of found rentals to those by this user

		// can we also send tool info with rental here?
		// would need to populate tool id as well
		// then how to reference tool in index page?
		console.log(foundRentals);

		res.render("rentals/index_history.ejs",
			{
				rentals: foundRentals
			});
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const foundRental = await Rental.findById({_id: req.params.body})
		//.populate(item)...;
		console.log(foundRental);
		const foundItem = await Item.findById({_id: foundRental.item})
		// find tool as well?
		// calculate late fee, if any
	   
		res.render("rentals/show.ejs",
			{
				rental: foundRental,
				item: foundItem,
				tool: foundTool,
				lateFee: lateFee
			});
	} catch(err) {
		next(err)
	}
})

module.exports = router;