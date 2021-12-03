const db = require('../database/models/index.js');

function remember(req, res, next) {

    if (req.cookies.remember != undefined && req.session.userLogged == undefined) {

        db.users.findByPk(req.cookies.remember)
            .then(user => {
                req.session.userLogged = user;
                next();
            })


    } else {
        next();
    }

}

module.exports = remember;