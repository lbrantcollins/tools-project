const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const Tool			= require("../models/tool");
const Item 			= require("../models/item");

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
		Tool.findById(req.params.id).populate()
	} catch(err) {
		next(err)
	}
	res.render("items/show.ejs");
})

router.get('/:id', (req, res) => {
  console.log(req.params, " params in the show route")
  Author.findById(req.params.id)
  .populate('articles')
  .exec((err, foundAuthor) => {
    console.log(foundAuthor, ' foundAuthor in authors show page')

    res.render('authors/show.ejs', {
      author: foundAuthor
    })
  })
});

module.exports = router;