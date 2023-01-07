const { model } = require("mongoose");
const ModelName = require("../../const/modelName");
const UserSchema = require("../schema/user.schema");

const userModel = model(ModelName.USER, UserSchema);

module.exports = userModel;
