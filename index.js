var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3001;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  