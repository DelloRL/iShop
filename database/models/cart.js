module.exports = (sequelize, dataTypes) => {
    let alias = 'cart';

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
        Cart.belongsTo(models.users, {
            as: 'users',
            foreignKey: 'users_id'
        })
        Cart.belongsTo(models.products, {
            as: 'products',
            foreignKey: 'product_id'
        })
    }

    return Cart;
};