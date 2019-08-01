const express 		= require("express");
const router 		= express.Router();

const Tool			= require("../models/tool");
const toolData 	= require("../public/js/seed")

// Seeding Tools Collection and a few items
// *****************************************************

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



module.exports = router;