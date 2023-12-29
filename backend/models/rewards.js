const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  emailAddress: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  uniqueCode: {
    type: String,
    required: true,
    unique: true,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
});

const Reward = mongoose.model("Reward", rewardSchema);

module.exports = Reward;
