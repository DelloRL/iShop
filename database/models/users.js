module.exports = function(sequelize, dataTypes){
    let alias = "users";

    let cols = {
        id: {
            type: dataTypes.INTEGER
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
            type: dataTypes.NUMBER 
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let users = sequelize.define(alias, cols, config);

    return users;
}