const express 		= require("express");
const router 		= express.Router();
const User			= require("../models/user");
const Tool			= require("../models/tool");
const Item			= require("../models/item");
const Rental		= require("../models/rental");

// INDEX route
// *******************
// show one tool per item (url/photo and cost)
// and "more info" button

router.get("/", async (req, res, next) => {
	res.render("items/index.ejs");
})

// SHOW route
// *******************
// show one tool
// url/photo, cost, description, late fee
// count how many items are available for this tool
// if any are available, provide a "rent" button
router.get("/:id", async (req, res, next) => {
	try {
		Item.findOne().populate(tool).exec(err, tool) 
	} catch(err) {
		next(err)
	}
	res.render("items/show.ejs");
})

module.exports = router;