const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const list = require("./routes/list");
const { exists } = require("./models/user.model");
require("./conn/conn");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", auth);
app.use("/user", list);

//app listen
const port = process.env.PORT || 8000; // Specify the desired port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
