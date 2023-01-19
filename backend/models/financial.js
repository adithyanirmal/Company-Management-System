const mongoose = require("mongoose");

const financialSchema = new mongoose.Schema({
  fId: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  tincome: {
    type: String,
    required: true,
  },
  toutcome: {
    type: String,
    required: true,
  },
  proloss: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
 
});

module.exports = mongoose.model("Financial", financialSchema);
