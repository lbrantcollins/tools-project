const express 		= require("express");
const router 		= express.Router();
const User			= require("../models/user");
const Tool			= require("../models/tool");
const Item			= require("../models/item");
const Rental		= require("../models/rental");

// create route (rent a tool)
// grab the first available item
// *********************************************
router.post("/", async (req, res, next) => {
	// assumption: template prevents you from even 
	// getting here if no items available for this tool
	// so, "availableItemsFound" is never an empty array

	try {
		// find the first available item
		const availableItemsFound = await Item.find({
			tool: req.body.toolId,
			rented: false
		})
		// mark this item as rented
		availableItemsFound[0].rented = true;
		await availableItemsFound[0].save();

		// gather information about this tool
		const toolFound = await Tool.findOne( {
			_id: req.body.toolId
		})

		// find the id of the current user
		const userFound = await User.findOne({
			username: req.session.username
		})

		// rental date is, well... now!
		const d = new Date();
		console.log("start date: ", d);
		// const dDate = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear()

		// rental due date is 7 days from now
		const d7 = new Date();
		d7.setDate(d7.getDate() + 7);
		console.log("due date: ", d7);
		// d7Date = (d7.getMonth() + 1) + "/" + d7.getDate() + "/" + d7.getFullYear()

		// create a rental record for this item
		const rentalCreated = await Rental.create({
				startDate: d,
				dueDate: d7,
				returnDate: null,
				active: true,
				// totalCost: Number,
				paid: false,
				amountDue: 0, // don't charge the user until item returned
				rentalCost: toolFound.rentalCost,
				lateFee: toolFound.lateFee,
				user: userFound,
			   item: availableItemsFound[0]
			});
		res.redirect("/tools");
		// console.log("\n-------- rental created!\n");
		// console.log(rentalCreated);
		// res.send('check terminal')
	} catch(err) {
		next(err);
	}
})


// index route: show all of user's active rentals
router.get("/active", async (req, res, next) => {
	try {
		// find all active rentals for the current user
		// populate the user according to their (unique) username
		// population the tool info through the item id ref
		const foundRentals = await Rental.find({
			active: true
		}).populate('user')
			.populate({
				path: 'item', 
				populate: { path: 'tool' }
		})

		// console.log("\ndb username:", foundRentals[0]);
		// console.log("\nsession username:", req.session.username);

		// console.log("\nactive rentals index route:\n", foundRentals);
		// console.dir(foundRentals[0].item);
		// console.dir(foundRentals[0].item.tool);
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
		// find all active rentals for the current user
		// populate the user according to their (unique) username
		// population the tool info through the item id ref
		const foundRentals = await Rental.find({
			active: false
		}).populate('user')
			.populate({
				path: 'item', 
				populate: { path: 'tool' }
		})		

		// show the the history (all past rentals)
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

		const foundRental = await Rental.findById({_id: req.params.id}).populate({
			path: 'item', 
			populate: {path: 'tool'}
		})
		// calculate late fee, if any
	   
		res.render("rentals/show.ejs",
			{
				rental: foundRental,
				// item: foundItem,
				// tool: foundTool,
				// lateFee: lateFee
			});
	} catch(err) {
		next(err)
	}
})

module.exports = router;