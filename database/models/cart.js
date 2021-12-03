module.exports = (sequelize, dataTypes) => {
    let alias = 'Cart';

    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            references: 'user',
            referencesKey: 'id'
        },
        product_id: {
            type: dataTypes.INTEGER,
            references: 'product',
            referencesKey: 'id'
        }
    };

    let config = {
        tableName: "cart",
        timestamps: false,
        primaryKey: false
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.removeAttribute('id');

    Cart.associate = function (models) {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
        Cart.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'product_id'
        })
    }

    return Cart;
};