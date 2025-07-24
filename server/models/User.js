const mongoose = require("mongoose");

const dailyLogSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  minutes: { type: Number, default: 0 },
});

const userSchema = new mongoose.Schema(
  {
    googleId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    name: { type: String },
    stars: { type: Number, default: 0 },
    dailyStudyLog: [dailyLogSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
