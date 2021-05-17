const mongoose = require("mongoose");
const usersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    accountBalance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("user", usersSchema);
module.exports = users;
