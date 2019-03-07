const express = require('express');
const fs = require("fs");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;


// Middleware
app.use(express.static(__dirname + "/public"));
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// this imports the routes from the htmlRoutes.js file
const routes = require("./routes/htmlroutes.js");
routes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT + " and so is yo mama!!!");
  });