const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();

const Tool			= require("../models/tool");
const toolData 	= require("../data/toolData.js")

app.get('/', (req, res, next) => {
// seed the tool database
	Tool.insertMany(toolData,
		(err, docs) => {
			if (err) {
				next(err);
			} else {
				console.log("Multiple tools added to collection");
			}
		}
	)
	
})



module.exports = router;