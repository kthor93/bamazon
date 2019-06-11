module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
        product_name: DataTypes.STRING,
        department_name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        stock_quantity: DataTypes.INTEGER,
        image: DataTypes.STRING
    });
    return Product;
}