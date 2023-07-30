const MONGO_URL =
  "mongodb+srv://aflah:YllR2BpiMW5WtkJB@cluster0.yunclcm.mongodb.net/?retryWrites=true&w=majority";
// "mongodb+srv://mohamedaflah186:YKAUtFW83HUVw4pP@cluster0.2zwiyzp.mongodb.net/?retryWrites=true&w=majority"

const mongoose = require("mongoose");
mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", () => console.log("connected to DB"));
mongoose.connection.on("disconnected", () => console.log("disconnected to DB"));

// YllR2BpiMW5WtkJB
