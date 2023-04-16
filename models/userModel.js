const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, " Username Required "],
    },
    email: {
      type: String,
      required: [true, "Email Required "],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Enter Password "],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);