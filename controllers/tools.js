const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const Tool			= require("../models/tool");
const Item 			= require("../models/item");

// Seeding Tools Collection and a few items
// *****************************************************
// const toolData = require('../public/js/seed')

// router.get('/seed', async (req, res, next) => {
// 	try {
// 		const data = await Tool.collection.insertMany(toolData)
// 		console.log("added provided tool data");
// 		console.log(data);
// 		const foundTools = await Tool.find({});
// 		console.log(foundTools);
// 		for(let i = 0; i < foundTools.length; i++){
// 			Item.create({tool: foundTools[i]._id, rented: false});
// 			Item.create({tool: foundTools[i]._id, rented: true});
// 			Item.create({tool: foundTools[i]._id, rented: false});
// 		}
// 		res.redirect('/');
		
// 	} catch(err){
// 		next(err)
// 	}
// });

// INDEX route for users AND admin
// *****************************************************
// show tools (url/photo and cost)
// and "more info" button
router.get("/", async (req, res, next) => {
	try {
		const toolsFound = await Tool.find({})
		// console.log(toolsFound);
		// can only view catalog if logged in
		if (req.session.loggedIn) {
			res.render("tools/index.ejs",
				{
					tools: toolsFound
				});
		} else {
			res.redirect("/");
		}
	} catch(err) {
		next(err)
	}
})

// SHOW route for users AND admin
// *******************
// (ONLY admin will see an edit button displayed on page)
// (ONLY user will see a "rent" button displayed on page)
// show one tool
// url/photo, cost, description, late fee
// *********************************************
// # 2
// *********************************************
// count how many items are available for this tool
// if any are available, provide a "rent" button
// *********************************************

router.get("/:id", async (req, res, next) => {
	try {
		// find the tool info for user-selected tool (a hammer)
		const toolFound = await Tool.findById(req.params.id);
		console.log("\n---------------------------");
		console.log("\ntool found in show route");
		console.log(toolFound);

		// find all items for this tool (all the hammers)
		const itemsFound = await Item.find({
			tool: req.params.id
		})
		console.log("\n---------------------------");
		console.log("\nitems found for specifc tool in tool show route");
		console.log(itemsFound);

		// count how many items are available (how many hammers)
		const itemsAvailable = itemsFound.reduce( 
			(accumulator, element) => {
				return accumulator + (element.rented === false);
			}, 0);
		console.log("\n Number of items available:", itemsAvailable);
		
		// On show page: display number of items available
		// If no items avail, show "out of stock", disable "rent" button

		// Users can only view tool details if logged in
		if (req.session.loggedIn) {
			res.render("tools/show.ejs",
				{
					tool: toolFound,
					itemsAvailable: itemsAvailable
				});
		} else {
			res.redirect("/");
		}
	} catch(err) {
		next(err)
	}
})


// EDIT route (FOR ADMIN ONLY)
// *****************************
// change properties of an existing tool
router.put("/:id/edit", async (req, res, next) => {
	try {
		const toolFound = await Tool.findByIdAndUpdate(req.params.id, req.body);
		console.log("tool found in admin edit route ----->", toolFound);
		// Only allow access for ADMIN
		if (req.session.admin) {
			res.render("tools/edit.ejs", {
				tool: toolFound
			})
		} else {
			res.redirect("/");
		}
	} catch(err) {
		next(err)
	}
})

// CREATE route (FOR ADMIN ONLY)
// *******************************
// show new page with form for adding a tool
router.get("/new", (req, res, next) => {
	// Only allow access for ADMIN
	if (req.session.admin) {
		res.render("tools/new.ejs")
	} else {
		res.redirect("/");
	}
})

// create: add a new tool to the db
router.post("/", async (req, res, next) => {
	try {
		console.log("create new tool ------>", req.body);
		await Tool.create(req.body);
		res.redirect("/tools");
	} catch(err) {
		next(err);
	}
})







module.exports = router;