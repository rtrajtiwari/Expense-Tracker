const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
  title: String,
  amount: Number,
  type: { type: String , enum:["income","expense"]},
  category: String,
  date: Date
},{timeStamps: true});

module.exports = mongoose.model("Expense",expenseSchema);