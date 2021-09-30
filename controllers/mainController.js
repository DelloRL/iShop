const fs = require('fs');
const path = require('path');

const controller = {
    home: (req, res) => {
        return res.render('home');
    },
    carrito: (req, res) => {
        return res.render('cart');
    },
}

module.exports = controller;