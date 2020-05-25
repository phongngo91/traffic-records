const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdinanceSchema = new Schema({
  enforceable: {
    type: Boolean,
    default: true
  },
  ordinanceNumber: {
    type: "String"
  },
  signs: [
    {
      type: Schema.Types.ObjectId,
      refer: "Sign"
    }
  ]
});

const Ordinance = mongoose.model("ordinances", OrdinanceSchema);
module.exports = Ordinance;