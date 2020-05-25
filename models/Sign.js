const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignSchema = new Schema({
  enforceable: {
    type: Boolean,
    default: true
  },
  signActions: [
    {
      type: Schema.Types.ObjectId,
      refer: "SignAction"
    }
  ]
});

const Sign = mongoose.model("signs", SignSchema);
module.exports = Sign;