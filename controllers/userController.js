const fs = require('fs');
const path = require('path');

module.exports = {
    register: (req,res) => {
        return res.render('users/login_register');
    },
    processRegister: (req,res) => {
        return res.send("Viaje por post")
    },
    profile: (req,res) => {
        return res.render('users/profile');
    },
    editarUsuarios: (req, res) => {
        return res.render('userEdit');
    }
}






