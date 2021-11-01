module.exports = function(sequelize, dataTypes){
    let alias = "Cart";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        cartItem_id: {
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

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models){
        Cart.hasMany(models.Cartitem, {
            as: "cartitems",
            foreignKey: "cartItem_id"
        });
    }

    return Cart;
}