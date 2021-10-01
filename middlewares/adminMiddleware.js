const fs = require('fs')
const path = require('path')

let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')));
function adminMiddleware(req, res, next){
    if(req.session && req.session.userLogged){
        let usuario = req.session.userLogged
        if(usuario.role === 9){
            return res.redirect("/admin")
        } else {
            return res.render(path.resolve(__dirname, '../views/accesoDenegado'));   
        }
    }
    next();
}

module.exports = adminMiddleware

