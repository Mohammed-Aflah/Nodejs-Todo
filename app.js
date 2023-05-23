const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const router = require("./routes/router");
const expressejsLayout = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("layout", "layout/main.ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(expressejsLayout);
app.use("/", router);
app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:5000`)
);
