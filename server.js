require("dotenv").config();
const express = require("express");

// Set up Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Import models
const db = require("./models");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Sync sequelize models and start Express app
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});