const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignActionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  }, 
  action: {
    type: "String",
    required: true
  },
  names: {
    type: "String",
    required: true
  }
});

const SignAction = mongoose.model("users", SignActionSchema);
module.exports = SignAction;