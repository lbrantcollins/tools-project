const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const Tool			= require("../models/tool");
const Item 			= require("../models/item");


// Seeding Tools Collection
const toolData = require('../public/js/seed')

router.get('/seed', async (req, res, next) => {
	try {
		const data = await Tool.collection.insertMany(toolData)
		console.log("added provided tool data");
		console.log(data);
		const foundTools = await Tool.find({});
		console.log(foundTools);
		for(let i = 0; i < foundTools.length; i++){
			Item.create({tool: foundTools[i]._id, rented: false});
			Item.create({tool: foundTools[i]._id, rented: false});
			Item.create({tool: foundTools[i]._id, rented: false});
		}
		res.redirect('/');

	} catch(err){
		next(err)
	}
});





// INDEX route
// *******************
// show tools (url/photo and cost)
// and "more info" button
router.get("/", async (req, res, next) => {
	try {
		const foundTools = await Tool.find({})
		console.log(foundTools);
		res.render("tools/index.ejs",
			{
				tools: foundTools
			});
	} catch(err) {
		next(err)
	}
})

// SHOW route
// *******************
// show one tool
// url/photo, cost, description, late fee
// count how many items are available for this tool
// if any are available, provide a "rent" button
router.get("/:id", async (req, res, next) => {
	try {
		const foundTool = await Tool.findById(req.params.id);
		console.log(foundTool);
		res.render("tools/show.ejs", {
			tool: toolFound
		})
	} catch(err) {
		next(err)
	}
})


module.exports = router;