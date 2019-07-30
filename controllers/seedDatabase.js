const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();

const Tool			= require("../models/tool");
const toolData 	= require("../public/js/seed.js")

app.get('/', (req, res, next) => {
// seed the tool database
	Tool.insertMany(toolData,
		(err, tools) => {
			if (err) {
				next(err);
			} else {
				console.log("Multiple tools added to collection");
				// 
				// for each tool
				// 2x: Item.create()
			}
		}
	)
	
})





module.exports = router;