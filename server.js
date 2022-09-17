/*********************************************************************************
 *  WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Yash Gulati Student ID: 156134215 Date: 09-16-2022
 *
 *  Online (Cyclic) URL:
 *
 ********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Yash Gulati- 156134215");
});

app.listen(HTTP_PORT);
