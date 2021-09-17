const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
process.env.PWD = process.cwd();

mongoose.connect(
  "mongodb+srv://bogcareers:nikanikonika@cluster0.qet1t.mongodb.net/careers",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());

app.use(express.json());

const Job = require("./router/job/JobRouter");
app.use("/api", Job);

const Users = require("./router/users/UsersRouter");
app.use("/api", Users);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server listen ${PORT} port`);
});
