const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: { type: String, unique: false },
	books: [
		{
			reference: String,
			shelf: String
		}
	],
	google: {
		googleId: { type: String, required: false }
	}
});

const User = mongoose.model("User", userSchema);
module.exports = User;
