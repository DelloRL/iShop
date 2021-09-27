const fs = require('fs');
const path = require('path');

const controller = {
    home: (req, res) => {
        return res.render('home');
    },
    login: (req, res) => {
        return res.render('users/login_register');
    },
    carrito: (req, res) => {
        return res.render('cart');
    },
    profile:(req,res)=>{
        return res.render('users/profile');
    },
    editarUsuarios: (req, res) => {
        return res.render('userEdit');
    }
}

module.exports = controller;