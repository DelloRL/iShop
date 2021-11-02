module.exports = function(sequelize, dataTypes){
    let alias = "products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
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

    return products;
}