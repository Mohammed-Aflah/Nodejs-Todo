const MONGO_URL =
"mongodb://127.0.0.1:27017"
  // "mongodb+srv://aflah:YllR2BpiMW5WtkJB@cluster0.yunclcm.mongodb.net/?retryWrites=true&w=majority";
// "mongodb://127.0.0.1:27017"
const mongoose = require("mongoose");
mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", () => console.log("connected to Database"));
mongoose.connection.on("disconnected", () => console.log("disconnected to DB"));
