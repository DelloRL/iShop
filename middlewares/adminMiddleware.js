function adminMiddleware(req, res, next){
    if(req.session && req.session.userLogged){
        let userAdmin = req.session.userLogged
        if(userAdmin.role === 9){
            return res.redirect("/admin")
        } else {
            res.send("no sos admin pa")
        }
    }
    next();
}

module.exports = adminMiddleware