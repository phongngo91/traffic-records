const Validator = require("Validator");
const validText = require("./valid_text");

module.exports = function validateRegisterInput(data){
  let errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.username, {min: 2, max: 30})){
    errors.username = "Username must be between 2 and 30 chars";
  }

  if(Validator.isEmpty(data.username)){
    errors.username = "Username is required";
  }

  if (Validator.isEmpy(data.password)){
    errors.password = "password is required";
  }
};