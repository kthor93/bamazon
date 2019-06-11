const path = require("path");

module.exports = function (app) {
    //path to home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/inex.html"));
    });
};