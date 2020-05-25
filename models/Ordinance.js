const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdinanceSchema = new Schema({
  enforceable: {
    type: Boolean,
    default: true
  },
  number: {
    type: "String"
  },
  streetName: {
    type: "String"
  },
  travelDir: {
    type: "String"
  },
  streetSide: {
    type: "String"
  },
  crossStreet: {
    type: "String"
  },
  hamlet: {
    type: "String"
  },
  adoptionDate: {
    type: "String"
  },
  tags: [
    {
      type: "String"
    }
  ],
  signs: [
    {
      type: Schema.Types.ObjectId,
      refer: "Sign"
    }
  ]
});

const Ordinance = mongoose.model("ordinances", OrdinanceSchema);
module.exports = Ordinance;