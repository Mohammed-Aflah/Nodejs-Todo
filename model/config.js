const MONGO_URL =
  "mongodb+srv://todo:94@cluster0.if8dxu0.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", () => console.log("connected to DB"));
mongoose.connection.on("disconnected", () => console.log("disconnected to DB"));
