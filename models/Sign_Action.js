const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignActionSchema = new Schema({
  date: {
    type: "String"
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

const SignAction = mongoose.model("signActions", SignActionSchema);
module.exports = SignAction;