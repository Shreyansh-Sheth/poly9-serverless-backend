const { Schema } = require("mongoose");
const Genders = require("../../const/gender");

const UserSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: Object.values(Genders),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserSchema;
