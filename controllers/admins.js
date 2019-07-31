const express 		= require("express");
const bcrypt		= require("bcryptjs")
const router 		= express.Router();
const Admin			= require("../models/admin");
const Tool			= require("../models/tool");
const Item			= require("../models/item");
const User			= require("../models/user");

// *********************************************
// # 3
// *********************************************
// admin sees list of all rented items,
// selects those to be returned and submits
//
// result is a return for each item selected
//		set rental.active = false
// result is a calculated amount due (cost + late fee)
//		set rental.cost = tool.cost + (days late) * tools.lateFee
// *********************************************

// *** PSEUDOCODE ***
// admin returns item
// render page (for ADMINS only, others redirect to home page)
// ******************
// find all rentals
// populate each rental with item "rented" field
// subpopulate each rental with tool fields
// (show page limits display to rented items)








//later
// user index/search
/// Account situation for one particular user


module.exports = router;