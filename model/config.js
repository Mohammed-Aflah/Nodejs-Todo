const MONGO_URL =
  "mongodb+srv://mohamedaflah186:fx7WzLg4LgP4eQEv@cluster0.2zwiyzp.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", () => console.log("connected to DB"));
mongoose.connection.on("disconnected", () => console.log("disconnected to DB"));

// fx7WzLg4LgP4eQEv
// mohamedaflah186