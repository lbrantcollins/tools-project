const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const Tool			= require("../models/tool");
const Item 			= require("../models/item");

// Seeding Tools Collection
const toolData = require('../public/js/seed')

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
// *******************
// show tools (url/photo and cost)
// and "more info" button
router.get("/", async (req, res, next) => {
	try {
		const toolsFound = await Tool.find({})
		console.log(toolsFound);
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
// (admin ONLY will see an edit button displayed on page)
// show one tool
// url/photo, cost, description, late fee
// count how many items are available for this tool
// if any are available, provide a "rent" button
router.get("/:id", async (req, res, next) => {
	try {
		const toolFound = await Tool.findById(req.params.id);
		console.log("tool found in show route ----->", toolFound);
		// Can only view tool details if logged in
		if (req.session.loggedIn) {
			res.render("tools/show.ejs",
				{
					tool: toolFound
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