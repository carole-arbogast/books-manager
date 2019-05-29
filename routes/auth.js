const passport = require("passport");
const express = require("express");
const router = express.Router();
const User = require("../models/user");

/* GET Google Authentication API. */
router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile"] }, { session: true })
);

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: "http://localhost:3000",
		failureRedirect: "/login"
	})
);

router.post("/logout", (req, res) => {
	if (req.user) {
		req.session.destroy();
		res.clearCookie("connect.sid"); // clean up!
		return res.json({ msg: "logging you out" });
	} else {
		return res.json({ msg: "no user to log out!" });
	}
});
module.exports = router;
