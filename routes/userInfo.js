const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Get User Info
router.get("/", (req, res, next) => {
	console.log("===== user!!======");
	console.log(req.user);
	if (req.user) {
		User.findById(req.user._id, function(err, user) {
			return res.json({ user });
		});
	} else {
		return res.json({ user: null });
	}
});

// Update User Info
router.post("/:id", (req, res) => {
	console.log("Current user :", req.user);
	console.log(req.body.books);
	User.findOneAndUpdate(
		{ _id: req.user._id },
		{
			books: req.body.books
		},
		{ new: true }
	)
		.then(userInfo => console.log(userInfo))
		.catch(err => res.json(err));
});

module.exports = router;
