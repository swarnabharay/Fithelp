const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");

connectToMongo();
const app = express();
let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("HELLO FROM HOME");
});

app.use("/assignment", require("./routes/AssignmentRoutes"));

app.use("/display", require("./routes/DisplayRoutes"));

app.listen(port, () => {
  console.log("API IS RUNNING 🚀");
});
