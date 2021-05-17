const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const users = require("./routes/usersRouter");
const history = require("./routes/historyRouter");


app.use(cors());
app.use(bodyParser.json());

const port = 4000;
const uri = process.env.MONGODB_URI;

app.use("/users", users);
app.use("/history", history);

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});
