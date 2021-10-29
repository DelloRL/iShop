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

    cartitem.associate = function(models){
        cartitems.belongsTo(models.cart, {
            as: "cartitems",
            foreignKey: "cartItem_id"
        });
    }


    return cartitem;
}