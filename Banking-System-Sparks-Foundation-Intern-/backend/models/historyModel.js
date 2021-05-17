const mongoose = require("mongoose");
const historySchema = mongoose.Schema(
  {
    fromUser: {
      type: String,
      required: true,
    },
    toUser: {
      type: String,
      required: true,
    },
    amountTransferred: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const history = mongoose.model("history", historySchema);
module.exports = history;
