const db = require("../models");
const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.join(__dirname, "/products.json"));
let products = JSON.parse(data);

db.sequelize.sync({ force: true }).then(function () {
    db.Product.bulkCreate(products).then(function () {
        console.log("Seeded");
        db.sequelize.close();
    }).catch(function (err) {
        console.log(err);
        db.sequelize.close();
    });
});