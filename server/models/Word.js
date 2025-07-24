const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  word: { type: String, required: true },
  translation: { type: String, required: true },
  difficulty: { type: Number, default: 1 }, // от 1 до 4
  addedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Word", wordSchema);
