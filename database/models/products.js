module.exports = function (sequelize, dataTypes) {
    let alias = "products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.NUMBER
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let products = sequelize.define(alias, cols, config);


    products.associate = function (models) {
        products.hasMany(models.cart, {
            as: 'cart',
            foreignKey: 'product_id'
        })
    }

    return products;
};
