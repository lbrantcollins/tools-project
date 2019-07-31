const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const Rental		= require("../models/rental");
const Tool			= require("../models/tool");
const Item 			= require("../models/item");


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
		const foundRentals = await Rental.find({rental_active: true});
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
		const foundRentals = await Rental.find({rental_active: true});
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
		const foundRental = await Rental.findById({_id: req.params.body});
		console.log(foundRental);
		const foundItem = await Item.findById({_id: foundRental.item})
		res.render("rentals/index.ejs",
			{
				rentals: foundRental,
				item: foundItem
			});
	} catch(err) {
		next(err)
	}
})

module.exports = router;