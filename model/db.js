const mongoose = require("mongoose");
require("./config");
const schema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("todo_list", schema);
