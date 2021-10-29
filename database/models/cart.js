module.exports = function(sequelize, dataTypes){
    let alias = "Cart";

    let cols = {
        id: {
            type: dataTypes.INTEGER
        },
        cartitem_id: {
            type: dataTypes.INTEGER
        },
        amount: {
            type: dataTypes.NUMBER
        }
    }

    let config = {
        tableName: "cart",
        timestamps: false
    }

    let cart = sequelize.define(alias, cols, config);

    cart.associate = function(models){
        cart.hasMany(models.cartitems, {
            as: "cartitems",
            foreignKey: "cartItem_id"
        });
    }

    return cart;
}