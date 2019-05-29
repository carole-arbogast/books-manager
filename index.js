const express = require("express");
const session = require("express-session");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const cors = require("cors");
const MongoStore = require("connect-mongo")(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require("./config/passport");
app.use(
	session({
		secret: "potato",
		resave: true,
		saveUninitialized: false,
		maxAge: new Date(Date.now() + 3600000),
		store: new MongoStore({
			url: "mongodb://localhost/books-app"
		})
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const userInfoRoutes = require("./routes/userInfo");
const authRoutes = require("./routes/auth");

app.use("/api/userInfo", userInfoRoutes);
app.use("/auth", authRoutes);

require("mongoose").connect("mongodb://localhost/books-app");

app.listen(port, () => console.log("APP IS RUNNING ON PORT " + port));
