const db = require('../database/models/index.js');

function remember(req, res, next) {

    if (req.cookies.rememberMe != undefined && req.session.userLogged == undefined) {

        db.users.findByPk(req.cookies.rememberMe)
            .then(user => {
                req.session.userLogged = user;
                next();
            })


    } else {
        next();
    }

}

module.exports = remember;