module.exports = function(sequelize, dataTypes){
    let alias = "Cartitem";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
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

    let Cartitem = sequelize.define(alias, cols, config);

    Cartitem.associate = function(models){
        Cartitem.belongsTo(models.Cart, {
            as: "cartitems",
            foreignKey: "cartItem_id"
        });
    }


    return Cartitem;
}