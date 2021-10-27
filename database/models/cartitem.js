module.exports = function(sequelize, dataTypes){
    let alias = "cartitem";

    let cols = {
        id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "cartitem",
        timestamps: false
    }

    let cartitem = sequelize.define(alias, cols, config);

    return cartitem;
}