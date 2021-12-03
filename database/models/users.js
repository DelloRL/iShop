module.exports = function(sequelize, dataTypes){
    let alias = "users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        role: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let users = sequelize.define(alias, cols, config);

    users.associate = function (models) {
        users.hasMany(models.cart, {
            as: 'cart',
            foreignKey: 'users_id'
        })
    }

    return users;
}
