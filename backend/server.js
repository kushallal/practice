require("./helper/mongoHelper").init();
require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const app = express();
const cors = require("cors");

app.use(logger("dev"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

//import routes
const paperOptionsRoute = require("./routes/paperoptions");
const engineersRoute = require("./routes/engineer");
const papersRoute = require("./routes/paper");
const planesRoute = require("./routes/plane");
// const verifySignature = require("./routes/verification");

app.use("/options", paperOptionsRoute);
app.use("/engineers", engineersRoute);
app.use("/papers", papersRoute);
app.use("/planes", planesRoute);
// app.use("/verifysign", verifySignature);

//routes
app.get("/", (req, res) => {
  res.status(200).send("running");
});

//connect to db

app.listen(5000);
