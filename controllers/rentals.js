const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const Rental		= require("../models/rental");
const Tool			= require("../models/tool");
const Item 			= require("../models/item");

// 
router.get("/", async (req, res, next) => {
	try {
		const foundRentals = await Rental.find({})
		console.log(foundRentals);
		const item = await Item.findById({})
		res.render("rentals/index.ejs",
			{
				rentals: foundRentals
			});
	} catch(err) {
		next(err)
	}
})

router.get("/active", async (req, res, next) => {
	try {
		const foundRentals = await Rental.find({rental_active: true}).populate(user)...;
		// limit list of found rentals to those by this user
		console.log(foundRentals);
		res.render("rentals/index.ejs",
			{
				rentals: foundRentals
			});
	} catch(err) {
		next(err)
	}
})

router.get("/history", async (req, res, next) => {
	try {
		const foundRentals = await Rental.find({rental_active: false}).populate(user)....;
		// limit list of found rentals to those by this user
		console.log(foundRentals);
		res.render("rentals/index.ejs",
			{
				rentals: foundRentals
			});
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const foundRental = await Rental.findById({_id: req.params.body}).populate(item)...;
		console.log(foundRental);
		const foundItem = await Item.findById({_id: foundRental.item})
		// find tool as well?
		res.render("rentals/show.ejs",
			{
				rentals: foundRental,
				item: foundItem
			});
	} catch(err) {
		next(err)
	}
})

module.exports = router;