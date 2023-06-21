const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  pass: String,
  mobile: Number,
});
const UserModel = mongoose.model("user", UserSchema);
module.exports = { UserModel };

// const UserModel: This creates a constant variable named UserModel to store the reference to the model object.
// mongoose.model: This is a method provided by Mongoose to create a model based on a defined schema. 
// It takes two arguments: the name of the model (in this case, "User") and the schema definition (in this case, UserSchema).
// "User": This is the name given to the model. It will be used to identify the collection in the MongoDB database.
// UserSchema: This refers to a previously defined schema for the user object. 
//The schema defines the structure, fields, and validation rules for the user documents in the "User" collection.