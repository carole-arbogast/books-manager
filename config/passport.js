const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

require("dotenv").config();

passport.serializeUser((user, done) => {
	console.log("=== serialize ... called ===");
	console.log(user); // the whole raw user object!
	console.log("---------");
	done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
	console.log("DEserialize ... called");
	User.findOne(
		{ _id: id },
		"firstName lastName photos local.username",
		(err, user) => {
			console.log("======= DESERILAIZE USER CALLED ======");
			console.log(user);
			console.log("--------------");
			done(null, user);
		}
	);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:8080/auth/google/callback"
		},
		function(accessToken, refreshToken, profile, done) {
			// testing
			console.log("===== GOOGLE PROFILE =======");
			console.log(profile);
			console.log("======== END ===========");
			// code
			const { id, name } = profile;
			User.findOne({ "google.googleId": id }, (err, userMatch) => {
				console.log("trying to find user");
				// handle errors here:
				if (err) {
					console.log("Error!! trying to find user with googleId");
					console.log(err);
					return done(null, false);
				}
				// if there is already someone with that googleId
				if (userMatch) {
					console.log("User already exists");

					return done(null, userMatch);
				} else {
					// if no user in our db, create a new user with that googleId
					console.log("====== PRE SAVE =======");
					console.log(id);
					console.log(profile);
					console.log("====== post save ....");
					const newGoogleUser = new User({
						"google.googleId": id,
						name: name.givenName,
						books: "Book"
					});
					// save this user
					newGoogleUser.save((err, savedUser) => {
						if (err) {
							console.log("Error!! saving the new google user");
							console.log(err);
							return done(null, false);
						} else {
							console.log("Saved");
							return done(null, savedUser);
						}
					}); // closes newGoogleUser.save
				}
			}); // closes User.findONe
		}
	)
);
