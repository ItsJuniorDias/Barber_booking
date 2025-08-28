const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, require: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
