const express = require("express");
const ConnectToDb = require("../middlewares/connectToDb");
const app = express();

app.use(express.json());
app.use(ConnectToDb);

module.exports = app;
