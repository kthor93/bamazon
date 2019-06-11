const db = require("../models");
const Sequelize = require("sequelize");

module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Product.findAll().then(function (results) {
            res.json(results);
        });
    });

    app.get("/api/products/:name", function (req, res) {
        db.Product.findOne({
            where: {
                product_name: req.params.name
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    app.put("/api/products", function (req, res) {
        db.Product.update(req.body, {
            where: {
                product_name: req.body.product_name
            }
        });
    })
}